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

export const Title = styled.h1`
    font-size: 44px;
    font-weight: 500;

    margin-top: 25px;
    text-align: center;
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