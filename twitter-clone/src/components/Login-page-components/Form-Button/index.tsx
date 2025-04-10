import { ButtonContainer } from "./styles"

const FormButtonContainer = () => {
    return (
        <ButtonContainer>
            <button className="loginButton" type="submit">Entrar</button>
            <button className="signUpButton" type="button">Crie uma Conta</button>
        </ButtonContainer>
    )
}

export default FormButtonContainer