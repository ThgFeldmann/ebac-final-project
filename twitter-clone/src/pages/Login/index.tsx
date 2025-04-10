import { Container } from "../../styles"
import AppNameComponent from "../../components/Login-page-components/AppName"
import LoginContainerComponent from "../../components/Login-page-components/Login-Container"

const Login = () => {
    return (
        <Container>
            <AppNameComponent/>
            <LoginContainerComponent/>
        </Container>
    )
}

export default Login