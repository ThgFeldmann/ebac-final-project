import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { apiUsers } from "../../../App";

import PageTitle from "../Page_Title";

import { ButtonContainer, SignUpContainerComponent, SignUpFormContainer } from "./styles";

type User = {
    id: number,
    username: string,
    password: string,
    email: string,
    friends: [
        {
            id: number,
            username: string
        }
    ]
}

const SignUpContainer = () => {
    const [success, setSuccess] = useState(false)
    const [formError, setFormError] = useState(false)
    const [passwordConfirmed, setPasswordConfirmed] = useState(false)
    const [confirmationValue, setConfirmationValue] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    // handles submit functions
    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (formData.password !== confirmationValue) {
            console.log('Por favor, confirme sua senha.')
            setFormError(true)
        } else if (formData.password === confirmationValue) {
            fetch(apiUsers)
                .then((response) => response.json())
                .then((users) => {
                    const userExists = users.some(
                        (user: User) => 
                            user.email === formData.email && 
                            user.username === formData.username && 
                            user.password === formData.password
                    )
                    if (userExists) {
                        console.log("User already exists.")
                        setFormError(true)
                    } else {
                        fetch(apiUsers, {
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
                // navigate('/Login')
        }
    }

    return (
        <SignUpContainerComponent>
            <PageTitle />
            <SignUpFormContainer>
                <div>
                    <label htmlFor="email">Email do Usuário:</label>
                    <input 
                        min={2}
                        required 
                        id="email" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="username">Nome de Usuário:</label>
                    <input 
                        min={2}
                        required 
                        id="username" 
                        type="text" 
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
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
                    />
                </div>
                <div>
                    <label htmlFor="password-confirm">Confirme a senha:</label>
                    <input
                        min={8}
                        required 
                        id="password-confirm" 
                        type="text"
                        value={confirmationValue}
                        onChange={(e) => setConfirmationValue(e.target.value)}
                    />
                </div>
            </SignUpFormContainer>
            <ButtonContainer>
                <button onClick={(e) => handleSubmit(e)} className="CreateUserButton">Criar Usuário</button >
                <button className="GoBackButton">Voltar para o login</button >
            </ButtonContainer>
        </SignUpContainerComponent>
    )
}

export default SignUpContainer;