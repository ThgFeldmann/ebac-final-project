import { Link } from "react-router-dom"
import { ButtonContainer } from "./styles"

const FormButtonContainer = () => {
    return (
        <ButtonContainer>
            <Link to='/Home' className="loginLink" type="submit">Entrar</Link>
            <Link to='/SignUp' className="signUpLink" type="button">Crie uma Conta</Link>
        </ButtonContainer>
    )
}

export default FormButtonContainer