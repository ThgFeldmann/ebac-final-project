import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import { apiUsers } from "../../../App";

import { ButtonContainer, InputContainer, Button, LoginContainer, SuccessSection } from "./styles" 

const LoginContainerComponent = () => {
    const [success, setSuccess] = useState(false) // Dictates if login is a success or not
    const [formData, setFormData] = useState({email: '', username: '', password: ''}) // informations typed on the form
    const [loggedUser, setLoggedUser] = useState({
        id: 0,
        username: '',
        password: '',
        email: '',
        friends: [
            {
                id: 0,
                username: ''
            }
        ]
    }) // Stores user information in case login is a success
    const [formError, setFormError] = useState(false)

    // const signIn = useSignIn()
    const navigate = useNavigate()

    useEffect(() => {
        setSuccess(false)
        setFormData({email: '', username: '', password: ''})
        setLoggedUser({
            id: 0,
            username: '',
            password: '',
            email: '',
            friends: [
                {
                    id: 0,
                    username: ''
                }
            ]
        })
    }, [setSuccess, setFormData, setLoggedUser])

    // executes all submit functions and checks if successful
    const handleSubmit = (e: any) => {
        e.preventDefault()

        fetch(apiUsers)
        .then((response) => response.json())
        .then((users) => {
            const user = users.find(
                (u: any) => u.email === formData.email && u.username === formData.username && u.password === formData.password
            )
            if (user) {
                console.log("Login successful!")
                setLoggedUser(user)
                setSuccess(true)
            } else {
                console.log("Invalid Credentials")
                setFormError(true)
            }
        })

        // SWITCH TO THIS FUNCTION WHEN BACK-END IS DONE
        // const token = 'byG9wZuXK0my1AhXHI88PEYAToR6DgKBwkDwa3X01IbL91VmCVgWavmiP64COuYz'

        // fetch(apiUsers, {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Bearer ${token}`,
        //         'Content-Type': 'application/json',
        //     }
        // })
        //     .then((response) => response.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.error('Error: ', error))
    }

    const handleNavigate = () => {
        navigate('/Home', {state: {user: loggedUser}})
    }

    return (
        <LoginContainer className={success ? 'successContainer' : ''}>
            {(success === true) ?
                <SuccessSection>
                    <h2>Bem vindo {loggedUser.username}!</h2>
                    <p>Para ir até a página principal, aperte o botão abaixo.</p>
                    <button onClick={event => handleNavigate()}>Clique aqui!</button>
                </SuccessSection>
            :
                <InputContainer onSubmit={e => handleSubmit(e)}>
                    {formError ? <p className="error">Algum dos campos abaixo está com informações erradas.</p> : null}
                    <div>
                        <label htmlFor="email">Email do Usuário:</label>
                        <input 
                            min={2}
                            required 
                            id="email" 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            autoComplete="off"
                            className={formError ? 'error' : ''}
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Nome do Usuário:</label>
                        <input 
                            min={2}
                            required 
                            id="username" 
                            type="text" 
                            value={formData.username}
                            onChange={(e) => setFormData({...formData, username: e.target.value})}
                            autoComplete="off"
                            className={formError ? 'error' : ''}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Senha do Usuário:</label>
                        <input 
                            min={8} 
                            required 
                            id="password" 
                            type="password" 
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})} 
                            autoComplete="off"
                            className={formError ? 'error' : ''}
                        />
                    </div>
                    <ButtonContainer>
                        <Button className="LoginButton" type="submit">Botão</Button>
                        <p>Não tem uma conta?</p>
                        <Button className="SignUpButton" type="button">
                            <Link to='/SignUp'>Crie uma conta</Link>
                        </Button>
                    </ButtonContainer>
                </InputContainer>
            }
        </LoginContainer>
    )
}

export default LoginContainerComponent