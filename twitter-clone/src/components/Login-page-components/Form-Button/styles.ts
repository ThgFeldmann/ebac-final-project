import styled from "styled-components";
import { colors } from "../../../styles";

export const ButtonContainer = styled.div`
    max-width: 385px;
    max-height: 75px;
    display: flex;
    flex-direction: column;
    margin: 70px auto 0;

    a {
        width: 70%;
        height: 30px;
        margin: 0 auto;

        border: 1px solid ${colors.preto};
        border-radius: 8px;

        font-size: 22px;
        font-weight: bold;
        color: ${colors.preto};

        cursor: pointer;

        &.loginLink {
            background-color: ${colors.azul};
            margin-bottom: 15px;
        }

        &.signUpLink {
            background-color: ${colors.verdeClaro};
        }

        &:hover {
            border: 2px solid;
        }
    }
`