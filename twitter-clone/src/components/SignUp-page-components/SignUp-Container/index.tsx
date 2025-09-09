//* Note: The name 'value' refers to the input values in general
//TODO fix being able to send empty values
//TODO check if value is above it's minimum requirement
//TODO fix form button not executing the functions when an error is activated

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { apiUsers, FormValues, User } from "../../../App";

import PageTitle from "../Page_Title";

import { Button, SignUpContainerComponent, SignUpFormContainer, SuccessSection } from "./styles";

const SignUpContainer = () => {
    //*Error states
    const [emptyFormError, setEmptyFormError] = useState<boolean>(false)
    const [existingUserError, setExistingUserError] = useState<boolean>(false) // Dictates if the form has an error
    const [confirmationError, setConfirmationError] = useState<boolean>(false) // Dictates if the password isn't confirmed

    //*Main states
    const [success, setSuccess] = useState<boolean>(false) // Dictates if the user has been created
    const [passwordConfirmed, setPasswordConfirmed] = useState<boolean>(false) // Dictates if the password is confirmed
    const [confirmationValue, setConfirmationValue] = useState<string>('') // The password confirmation input value
    const [formChecked, setFormChecked] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormValues>({ // Informations typed on the form, excluding the password confirmation
        email: '',
        username: '',
        password: ''
    })

    const navigate = useNavigate()


    // TODO work on this function
    // Checks if an input is empty
    const checkIfEmpty = (data: FormValues) => { //* 'data' refers to 'formData'
        // extracting the values from 'data'
        const values = Object.values(data)

        // // mapping the 'values' array and creating a new array | 
        // // the new array holds boolean values, true id string is empty or false if string has content 
        // const valuesMap: boolean[] = values.map(
        //     (item: string) => item === ''
        // )

        const result = values.includes('')

        return result

        // // reads each boolean value and sends an error if 'true' is passed
        // valuesMap.forEach((item: boolean) => {
        //     if (item === true) { //* IF VALUE IS EMPTY
        //         return setEmptyFormError(true)
        //     } else { //* IF VALUE IS NOT EMPTY
        //         setFormChecked(true)
        //     }
        // })
    }

    //? Executed twice, first returned the empty error, then executed as normal
    // handles submit functions
    const handleSubmit = async (e: any) => {
        e.preventDefault()

        checkIfEmpty(formData)

        if (!formChecked) {
            return setEmptyFormError(true)
        } else {
            if (emptyFormError) {
                return null
            } else {
                if (formData.password !== confirmationValue) { //* IF PASSWORD ISN'T CONFIRMED
                    console.log('Por favor, confirme sua senha.')
                    setConfirmationError(true)
                } else if (formData.password === confirmationValue) { //* IF PASSWORD IS CONFIRMED
                    setPasswordConfirmed(true)
                    fetch(apiUsers.Get) // fetches users from api
                        .then((response) => response.json())
                        .then((users) => {
                            const userExists = users.some( // checks if the form values matches an existing user
                                (user: User) => 
                                    user.email === formData.email && 
                                    user.username === formData.username && 
                                    user.password === formData.password
                            )
                            if (userExists) { //* IF USER EXISTS
                                console.log("User already exists!")
                                setExistingUserError(true)
                            } else { //* IF USER DOES NOT EXIST
                                fetch(apiUsers + "create/", { // creating the new user
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
                                
                                    console.log('User created')
                                    setSuccess(true)
                            }
                        })
                }
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
                    <h4>Você criou um usuário com successo!</h4>
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
                            <p className="error">Por favor complete os campos abaixo</p>
                        : (existingUserError) ?
                            <p className="error">Um usuário com essas informações já existe.</p>
                        :
                            null
                        }
                        <div className={existingUserError || existingUserError ? 'error' : ''}>
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
                        <div className={existingUserError || existingUserError ? 'error' : ''}>
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
                        <div className={existingUserError || existingUserError ? 'error' : ''}>
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