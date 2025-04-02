import styled from "styled-components";
import { colors } from "../../styles";

export const AppName = styled.h1`
    margin-top: 45px;
    
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    font-family: Roboto;
    
    color: ${colors.branco};
`

export const LoginContainer = styled.form`
    max-width: 560px;
    height: 400px;
    margin: 44px auto 0;

    align-items: center;
    text-align: center;

    border: solid 3px ${colors.verdeClaro};
    border-radius: 28px;

    background-color: ${colors.azulClaro};
`

export const InputContainer = styled.div `
    max-width: 420px;
    height: 150px;
    margin: 46px auto 0;
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
            margin-bottom: 16px;

            font-size: 18px;
        }
    }
`

export const ButtonContainer = styled.div`
    max-width: 465px;
    height: 100px;
    padding-top: 12px;
    display: block;
    margin: 50px auto 0;

    button {
        width: 70%;
        height: 30px;

        border: 1px solid ${colors.preto};
        border-radius: 8px;

        font-size: 22px;
        font-weight: bold;

        color: ${colors.preto};
    }

    button:hover {
        border: 2px solid;
    }

    .loginButton {
        background-color: ${colors.azul};
        margin-bottom: 15px;
    }

    .signUpButton {
        background-color: ${colors.verdeClaro};
    }
`
