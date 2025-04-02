import { Container } from "../../styles"
import { AppName, ButtonContainer, InputContainer, LoginContainer } from "./styles"

const LoginComponent = () => {
    return (
        <Container>
            <AppName>Twitter clone</AppName>
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
                </InputContainer>
                <ButtonContainer>
                    <button className="loginButton" type="submit">Entrar</button>
                    <button className="signUpButton" type="button">Crie uma Conta</button>
                </ButtonContainer>
            </LoginContainer>
        </Container>
    )
}

export default LoginComponent