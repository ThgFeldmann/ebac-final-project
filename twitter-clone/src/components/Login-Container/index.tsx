import FormButtonContainer from "../Form-Button"
import FormInputContainer from "../Form-Input"
import { LoginContainer } from "./styles"

const LoginContainerComponent = () => {
    return (
        <LoginContainer>
            <FormInputContainer/>
            <FormButtonContainer/>
        </LoginContainer>
    )
}

export default LoginContainerComponent