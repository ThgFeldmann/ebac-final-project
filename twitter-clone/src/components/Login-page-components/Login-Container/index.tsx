import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import { apiUsers, FormValues, User } from "../../../App";

import { ButtonContainer, InputContainer, Button, LoginContainer, SuccessSection } from "./styles" 

const LoginContainerComponent = () => {
    // Dictates if login is a success or not
    const [success, setSuccess] = useState<boolean>(false) 
    // Holds informations typed on the form
    const [formData, setFormData] = useState<FormValues>({email: '', password: ''}) 
    // Stores user information in case login is a success
    const [loggedUser, setLoggedUser] = useState<User>({
        id: 0,
        username: '',
        password: '',
        email: '',
        bio: '',
        image: '',
    })
    // Dictates if there is an error inside the form
    const [formError, setFormError] = useState<boolean>(false)

    const navigate = useNavigate()

    // resets the states on re-render
    useEffect(() => {
        setSuccess(false)
        setFormData({email: '', password: ''})
        setLoggedUser({
            id: 0,
            username: '',
            password: '',
            email: '',
            bio: '',
            image: '',
        })
    }, [setSuccess, setFormData, setLoggedUser])

    // executes all submit functions and checks if successful
    const handleSubmit = (e: any) => {
        e.preventDefault()

        fetch(apiUsers.Get)
            .then((response) => response.json())
            .then((users) => {
                const user = users.find(
                    (u: User) =>
                        u.email === formData.email 
                        &&
                        u.password === formData.password
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
    }

    //* handles the navigation, also sends the user data to the home page
    const handleNavigate = async (user: User) => {

        navigate('/Home', {state: {user: user}})
    }

    return (
        <LoginContainer className={success ? 'successContainer' : ''}>
            {(success === true) ?
                <SuccessSection>
                    <h2>Bem vindo {loggedUser.username}!</h2>
                    <p>Para ir até a página principal, aperte o botão abaixo.</p>
                    <button onClick={event => handleNavigate(loggedUser)}>Clique aqui!</button>
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
                        <Button className="LoginButton" type="submit">Entrar</Button>
                        <p>Não é um usuário?</p>
                        <Button className="SignUpButton" type="button">
                            <Link to='/SignUp'>Seja um usuário</Link>
                        </Button>
                    </ButtonContainer>
                </InputContainer>
            }
        </LoginContainer>
    )
}

export default LoginContainerComponent