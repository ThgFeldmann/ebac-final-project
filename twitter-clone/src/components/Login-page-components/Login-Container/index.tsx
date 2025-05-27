import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { apiUsers } from "../../../App";
import { showMessage } from "../../../utils";

import { ButtonContainer, InputContainer, Button, LoginContainer, SuccessSection } from "./styles" 

const LoginContainerComponent = () => {
    const [existingUsers, setExistingUsers] = useState([]) // Users stored in api
    const [foundUser, setFoundUser] = useState({}) // Separates a user from the api if 'username' exists in it
    const [username, setUsername] = useState(''); // User typed in form
    const [password, setPassword] = useState(''); // User typed in form
    const [usernameIsCorrect, setUsernameIsCorrect] = useState(false) // Set username as correct
    const [passwordIsCorrect, setPasswordIsCorrect] = useState(false) // Set password as correct
    const [success, setSuccess] = useState(false) // Dictates if login is a success or not
    const [loggedUser, setLoggedUser] = useState({}) // Stores user information in case login is a success

    // catching every user data from api
    useEffect(() => {
        setUsername('')
        setPassword('')
        setUsernameIsCorrect(false)
        setPasswordIsCorrect(false)
        setFoundUser({})

        fetch(apiUsers)
            .then((res) => res.json())
            .then((res) => setExistingUsers(res))
    }, [])

    // function that returns an object that contains the value of username
    const authUser = () => {
        const result = existingUsers.filter(item => {
            return Object.values(item).some(value => {
                if (typeof value === 'string') {
                    return value.includes(username)
                }
                return false
            })
        })
        setFoundUser(result) // saves the user informations on state

        setUsernameIsCorrect(true) // the username exists in api
    }

    // ******************* ERROR HERE
    // function that checks if 'password' exists inside 'foundUser'
    const authPassword = () => {
        // const objValues: any[] = Object.values(foundUser)
        // const result = objValues.includes(password)

        // const someResult = 
        //     Object.values(foundUser) // separates every value inside the object into a separate array
        //     .some(
        //         (value) => value === password // checks if the array has a value that is equal to 'password'
        //     )

        // const includeResult = Object.values(foundUser).includes(password)

        // console.log(result)

        const result = true

        if (result) {
            showMessage('A senha é deste usuário.')
            setPasswordIsCorrect(true)
        } else {
            showMessage('A senha não é deste usuário ou ela não existe.')
        }
    }

    // executes all submit functions and navigates if successful
    const handleSubmit = (e: any) => {
        e.preventDefault()

        authUser()
        authPassword()

        showMessage('#############')
        if (usernameIsCorrect && passwordIsCorrect) {
            setSuccess(true)
            setLoggedUser(foundUser)
        } else {
            showMessage('Houve um erro na verificação')
        }
    }

    return (
        <LoginContainer className={success ? 'successContainer' : ''}>
            {(success === true) ?
                <SuccessSection>
                    <h2>Bem vindo {username}!</h2>
                    <p>Para ir até a página principal, aperte o botão abaixo.</p>
                    <button>
                        <Link to='/Home'>Clique aqui!</Link>
                    </button>
                </SuccessSection>
            :
                <InputContainer onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label htmlFor="username">Nome do Usuário:</label>
                        <input 
                            min={2}
                            required 
                            id="username" 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Senha do Usuário:</label>
                        <input 
                            min={8} 
                            required 
                            id="password" 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            autoComplete="off" 
                        />
                    </div>
                    <ButtonContainer>
                        <Button className="LoginButton" type="submit">Botão</Button>
                        <p>Não tem uma conta?</p>
                        <Button className="SignUpButton" type="button">Crie uma conta</Button>
                    </ButtonContainer>
                </InputContainer>
            }
        </LoginContainer>
    )
}

export default LoginContainerComponent