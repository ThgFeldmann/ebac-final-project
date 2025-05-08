
import { Link } from "react-router-dom";
import PageTitle from "../Page_Title";

import { SignUpContainerComponent, SignUpFormContainer } from "./styles";
import SignUpButtonContainer from "../SignUp_Button_Container";

const SignUpContainer = () => {
    return (
        <SignUpContainerComponent>
            <PageTitle />
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
            <SignUpButtonContainer />
        </SignUpContainerComponent>
    )
}

export default SignUpContainer;