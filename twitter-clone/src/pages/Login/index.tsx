import { Container } from "../../styles"
import AppNameComponent from "../../components/Login-page-components/AppName"
import LoginContainerComponent from "../../components/Login-page-components/Login-Container"

const Login = () => {
    return (
        <Container>
            <AppNameComponent />
            <LoginContainerComponent 
            LoginButton={{
                Text: "Entrar",
                ClassName: "LoginButton",
                LinkURL: "/home",
                ButtonType: "submit"
            }} 
            SignUpButton={{
                Text: "Crie uma Conta",
                ClassName: "SignUpButton",
                LinkURL: "/SignUp",
                ButtonType: "button"
            }} />
        </Container>
    )
}

export default Login