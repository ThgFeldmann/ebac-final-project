import { Container } from "../../styles"
import AppNameComponent from "../../components/App-Name"
import LoginContainerComponent from "../../components/Login-Container"

const Login = () => {
    return (
        <Container>
            <AppNameComponent/>
            <LoginContainerComponent/>
        </Container>
    )
}

export default Login