import styled from "styled-components";
import { colors } from "../../../styles";


export const SignUpContainerComponent = styled.div`
    max-width: 700px;
    height: 540px;
    margin: 80px auto;

    border: 4px solid ${colors.verdeClaro};
    border-radius: 40px;

    background-color: ${colors.azulClaro};
`

export const SignUpFormContainer = styled.div`
    max-width: 520px;
    height: 300px;
    margin: 17px auto 34px;
    justify-content: center;

    div {
        max-width: 470px;
        margin: 0 auto;
        position: static;

        label {
            display: block;
            width: 190px;

            text-align: left;
            font-size: 22px;
            font-weight: bold;
        }

        input {
            display: block;
            width: 100%;
            padding: 8px;
            margin-bottom: 8px;

            font-size: 18px;
        }
    }
`

export const ButtonContainer = styled.div`
    button.CreateUserButton {
        display: block;
        width: 400px;
        height: 38px;
        margin: 0 auto;
        
        border: 2px solid ${colors.preto};
        border-radius: 12px;
        
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: ${colors.preto};

        background-color: ${colors.verdeClaro};
    }

    button.GoBackButton {
        padding: 4px;
    
        position: absolute;
        top: 32px;
        left: 32px;
    
        border: 2px solid ${colors.preto};
        border-radius: 12px;
    
        font-size: 20px;
        font-weight: bold;
    
        background-color: ${colors.vermelho};
    }
`