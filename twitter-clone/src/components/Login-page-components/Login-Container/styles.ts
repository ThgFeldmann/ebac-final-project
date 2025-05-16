import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../styles";

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

export const InputContainer = styled.form `
    margin: 46px auto 0;
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

        p.error {
            color: ${colors.vermelho};
            margin 0 0 10px 10px;
            text-align: left;
            font-size: 10px;
        }
    }
`

export const ButtonContainer = styled.div`
    height: 75px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 45px;
`

export const LinkButton = styled(Link)`
    width: 70%;
    height: 30px;
    margin: 0 auto;
    padding: 1px;

    border: 1px solid ${colors.preto};
    border-radius: 8px;

    font-size: 22px;
    font-weight: bold;
    color: ${colors.preto};

    cursor: pointer;

    &.LoginButton {
        background-color: ${colors.azul};
        margin-bottom: 15px;
    }

    &.SignUpButton {
        background-color: ${colors.verdeClaro};
    }

    &:hover {
        border: 3px inset ${colors.preto};
    }
`