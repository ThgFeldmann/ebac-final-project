//* Note: The name 'value' refers to the input values in general

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { apiUsers, FormValues, User } from "../../../App";

import PageTitle from "../Page_Title";

import { Button, SignUpContainerComponent, SignUpFormContainer, SuccessSection } from "./styles";
import { sleep } from "../../../utils";

const SignUpContainer = () => {
    //*Error states
    const [emptyFormError, setEmptyFormError] = useState<boolean>(false)
    const [existingUserError, setExistingUserError] = useState<boolean>(false) // Dictates if the form has an error
    const [confirmationError, setConfirmationError] = useState<boolean>(false) // Dictates if the password isn't confirmed

    //*Main states
    const [success, setSuccess] = useState<boolean>(false) // Dictates if the user has been created
    const [passwordConfirmed, setPasswordConfirmed] = useState<boolean>(false) // Dictates if the password is confirmed
    const [confirmationValue, setConfirmationValue] = useState<string>('') // The password confirmation input value
    const [formData, setFormData] = useState<FormValues>({ // Informations typed on the form, excluding the password confirmation
        email: '',
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    // Checks if an input is empty
    const checkIfEmpty = (data: FormValues) => { //* 'data' refers to 'formData'
        // extracting the values from 'data'
        const values = Object.values(data)

        const result = values.includes('')

        if (result) {
            console.log("Missing fields!")
            setEmptyFormError(true)
            return true
        } else {
            console.log("No missing fields, proceeding with the creation.")
            setEmptyFormError(false)
            return false
        }
    }

    // handles submit functions
    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const emptyForm: boolean = checkIfEmpty(formData)

        sleep(1)

        if (emptyForm === false) { //* IF FORM ISN'T EMPTY
            if (formData.password !== confirmationValue) { //* IF PASSWORD ISN'T CONFIRMED
                console.log('Por favor, confirme sua senha.')
                setConfirmationError(true)
            } else if (formData.password === confirmationValue) { //* IF PASSWORD IS CONFIRMED
                setPasswordConfirmed(true)
                fetch(apiUsers.Get) //* fetches users from api
                    .then((response) => response.json())
                    .then((users) => {
                        const userExists = users.some( //* checks if the form values matches an existing user
                            (user: User) => 
                                user.email === formData.email && 
                                user.username === formData.username && 
                                user.password === formData.password
                        )
                        if (userExists) { //* IF USER EXISTS
                            console.log("User already exists!")
                            setExistingUserError(true)
                        } else { //* IF USER DOES NOT EXIST
                            fetch(apiUsers.Create, { //* creating the new user
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(formData),
                            })
                                .then((response) => response.json())
                                .then((newUser) => {
                                    console.log("User created: " + newUser)
                                })
                                setSuccess(true)
                        }
                    })
            }
        }
    }

    // handles the navigation in case of success
    const handleNavigate = () => {
        navigate('/Login')
    }

    return (
        <SignUpContainerComponent className={success ? 'success': ''}>
            {success ?
                <SuccessSection>
                    <h2>Bem vindo {formData.username}!</h2>
                    <h4>Você se tornou um usuário com successo!</h4>
                    <p>
                        Ao clicar no botão abaixo você será direcionado para a página de login.
                    </p>
                    <button onClick={e => handleNavigate()}>Para a pagina de login</button>
                </SuccessSection>
            :
                <>
                    <PageTitle />
                    <SignUpFormContainer>
                        {(emptyFormError) ? 
                            <p className="error">Por favor, complete os campos abaixo</p>
                        : (existingUserError) ?
                            <p className="error">Um usuário com essas informações já existe.</p>
                        :
                            null
                        }
                        <div className={existingUserError ? 'error' : ''}>
                            <label htmlFor="email">Email do Usuário:</label>
                            <input 
                                min={2}
                                required 
                                id="email" 
                                type="email"
                                value={formData.email}
                                autoComplete="off"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                        <div className={existingUserError ? 'error' : ''}>
                            <label htmlFor="username">Nome de Usuário:</label>
                            <input 
                                min={2}
                                required 
                                id="username"
                                type="text" 
                                value={formData.username}
                                autoComplete="off"
                                onChange={(e) => setFormData({...formData, username: e.target.value})}
                            />
                        </div>
                        <div className={existingUserError ? 'error' : ''}>
                            <label htmlFor="password">Senha do Usuário:</label>
                            <input
                                min={8}
                                required 
                                id="password" 
                                type="password"
                                value={formData.password}
                                autoComplete="off"
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                        </div>
                        <div className={(confirmationError && !passwordConfirmed) ? 'error' : (existingUserError) ? 'error' : ''}>
                            <label htmlFor="password-confirm">Confirme a senha: </label>
                            {(confirmationError && !passwordConfirmed) ?
                                <p className="error">Por favor, confirme sua senha</p>
                            :
                            null
                            }
                            <input
                                min={8}
                                required 
                                id="password-confirm" 
                                type="text"
                                value={confirmationValue}
                                autoComplete="off"
                                onChange={(e) => setConfirmationValue(e.target.value)}
                            />
                        </div>
                    </SignUpFormContainer>
                    <div>
                        <Button onClick={(e) => handleSubmit(e)}>Criar Usuário</Button >
                        <Button className="goBack">
                            <Link to='/Login'>Voltar para o login</Link>
                        </Button >
                    </div>
                </>
            }
        </SignUpContainerComponent>
    )
}

export default SignUpContainer;