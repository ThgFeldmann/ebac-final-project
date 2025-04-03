import styled from "styled-components";
import { colors } from "../../styles";

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
