import { Link } from "react-router-dom"

import { ButtonContainer } from "./styles"

const SignUpButtonContainer = () => {
    return (
        <ButtonContainer>
            <Link className="CreateUserButton" to='/'>Criar Usuário</Link>
            <Link className="GoBackButton" to='/'>Voltar para o login</Link>
        </ButtonContainer>
    )
}

export default SignUpButtonContainer