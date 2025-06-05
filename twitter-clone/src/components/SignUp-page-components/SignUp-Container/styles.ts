import styled from "styled-components";
import { colors } from "../../../styles";


export const SignUpContainerComponent = styled.div`
    display: block;
    max-width: 540px;
    height: 500px;
    margin: 80px auto;
    text-align: center;

    border: 4px solid ${colors.azulClaro};
    border-radius: 10px;

    background-color: ${colors.azulClaro};

    &.success {
        height: 400px;
    }
`

export const SignUpFormContainer = styled.div`
    display: block;
    max-width: 380px;
    height: 280px;
    margin: 17px auto 34px;
    justify-content: center;

    p.error {
        font-size: 16px;
        color: #ff0000;
    }

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
            padding: 4px;
            margin-bottom: 8px;

            font-size: 18px;
        }

        &.error {
            input {
                border: 2px solid #ff0000cc;
            }
        }
    }
`

export const Button = styled.button`
    display: block;
    width: 400px;
    height: 38px;
    margin: 0 auto;
    
    border: 1px outset ${colors.preto};
    border-radius: 12px;
    
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: ${colors.preto};

    background-color: ${colors.verdeClaro};

    &.goBack {
        width: 200px;
    
        position: absolute;
        top: 32px;
        left: 32px;
    
        font-size: 20px;
    
        background-color: ${colors.vermelho};

        &:hover {
            border: 3px inset ${colors.cinza};
        }
    }

    &:hover {
        border: 3px inset ${colors.preto};
    }
`

export const SuccessSection = styled.div`
    position: relative;
    max-width: 370px;
    height: 300px;
    margin: 0 auto;
    padding: 16px;

    h2 {
        font-size: 30px;
        margin-top: 12px;
    }

    h4 {
        font-size: 22px;
        margin: 12px;
    }

    p {
        font-size: 18px;
    }

    button {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
        width: 70%;
        height: 30px;
        margin: 0 auto;

        border: 1px solid ${colors.preto};
        border-radius: 12px;

        font-size: 18px;
        font-weight: bold;

        color: ${colors.preto};
        background-color: ${colors.verdeClaro};

        &:hover {
            border: 3px inset ${colors.preto};
        }
    }
`