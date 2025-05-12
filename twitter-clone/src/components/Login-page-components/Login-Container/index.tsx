import { useState } from "react"
import { ButtonContainer, InputContainer, LinkButton, LoginContainer } from "./styles"

// These props are for use only inside this page (Login)
type props = {
    LoginButton: {
        Text: 'Entrar',
        ClassName: 'LoginButton',
        LinkURL: '/home',
        ButtonType: 'submit'
    },
    SignUpButton: {
        Text: 'Crie uma Conta',
        ClassName: 'SignUpButton',
        LinkURL: '/SignUp',
        ButtonType: 'button'
    }
}

const LoginContainerComponent = ({ LoginButton, SignUpButton }: props) => {
    return (
        <LoginContainer>
            <InputContainer>
                <div>
                    <label htmlFor="name">Nome do Usuário:</label>
                    <input id="name" type="text" required />
                </div>
                <div>
                    <label htmlFor="password">Senha do Usuário:</label>
                    <input id="password" type="password" required />
                </div>
                <ButtonContainer>
                    <LinkButton 
                        to={LoginButton.LinkURL} 
                        className={LoginButton.ClassName} 
                        type={LoginButton.ButtonType}
                        >
                            {LoginButton.Text}
                    </LinkButton>
                    <LinkButton 
                        to={SignUpButton.LinkURL} 
                        className={SignUpButton.ClassName} 
                        type={SignUpButton.ButtonType}
                    >
                        {SignUpButton.Text}
                    </LinkButton>
                </ButtonContainer>
            </InputContainer>
        </LoginContainer>
    )
}

export default LoginContainerComponent