import styled from "styled-components";
import { colors } from "../../../styles";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
    max-width: 470px;
    height: 400px;
    margin: 44px auto 0;

    align-items: center;
    text-align: center;

    border: solid 3px ${colors.azulClaro};
    border-radius: 2px;

    background-color: ${colors.azulClaro};

    &.successContainer {
        height: 300px;
    }
`

export const InputContainer = styled.form `
    margin: 44px auto 0;
    justify-content: center;

    div {
        max-width: 400px;
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
    height: 75px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 45px;

    p {
        padding: 4px;
        font-size: 18px;
        font-weight: bold;
        color: ${colors.preto};
    }
`

export const Button = styled.button`
    width: 70%;
    height: 30px;
    margin: 0 auto;
    padding: 1px;

    border: 1px solid ${colors.preto};
    border-radius: 8px;

    font-size: 22px;
    font-weight: bold;
    color: ${colors.preto};

    &.LoginButton {
        background-color: ${colors.azul};
    }

    &.SignUpButton {
        background-color: ${colors.verdeClaro};
    }

    &:hover {
        border: 3px inset ${colors.preto};
    }
`

export const SuccessSection = styled.div`
    text-align: start;
    padding: 30px;

    h2 {
        font-size: 28px;
    }

    p {
        font-size: 20px;
        margin: 20px 0;
    }

    button {
        width: 160px;
        background-color: ${colors.azul};

        border: 1px solid ${colors.preto};
        border-radius: 6px;

        a {
            font-size: 18px;
        }

        &:hover {
            border: 3px inset ${colors.preto};
        }
    }
`