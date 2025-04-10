import SignUpButton from "../SignUp-Button";
import { SignUpContainerComponent, SignUpFormContainer, Title } from "./styles";

const SignUpContainer = () => {
    return (
        <SignUpContainerComponent>
            <Title>Cadastro</Title>
            <SignUpFormContainer>
                <div>
                    <label htmlFor="email">Email do Usuário:</label>
                    <input required id="email" type="email" />
                </div>
                <div>
                    <label htmlFor="name">Nome do Usuário:</label>
                    <input required id="name" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Senha do Usuário:</label>
                    <input required id="password" type="password" />
                </div>
                <div>
                    <label htmlFor="password-confirm">Confirme a senha:</label>
                    <input required id="password-confirm" type="text" />
                </div>
            </SignUpFormContainer>
            <SignUpButton/>
        </SignUpContainerComponent>
    )
}

export default SignUpContainer;