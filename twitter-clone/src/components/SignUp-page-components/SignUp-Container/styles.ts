import styled from "styled-components";
import { breakpoints, colors } from "../../../styles";


export const SignUpContainerComponent = styled.div`
    display: block;
    width: 540px;
    height: 500px;
    margin: 80px auto;
    text-align: center;

    border: 4px solid ${colors.azulClaro};
    border-radius: 10px;

    background-color: ${colors.azulClaro};

    &.success {
        height: 400px;
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        margin-top: 140px;
        width: 700px;
        height: 800px;

        &.success {
            height: 600px;
        }
    }

    @media (max-width: 767px) {
        width: 340px;
        height: 550px;

        &.success {
            height: 410px;
        }
    }
`

export const SignUpFormContainer = styled.div`
    display: block;
    width: 380px;
    height: 280px;
    margin: 17px auto;
    justify-content: center;

    p.error {
        margin-top: -6px;
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

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 500px;
        height: 560px;

        p.error {
            font-size: 32px;
        }

        div {
            label {
                width: auto;
                font-size: 38px;
            }

            input {
                height: 60px;
                font-size: 36px;
            }
        }
    }

    @media (max-width: 767px) {
        width: 90%;
        height: 300px;

        p.error {
            font-size: 18px;
        }

        div {
            label {
                width: auto;
                font-size: 22px;
            }

            input {
                font-size: 20px;
            }
        }
    }
`

export const Button = styled.button`
    display: block;
    width: 400px;
    height: 38px;
    margin: 34px auto 0;
    
    border: 2px solid ${colors.preto};
    border-radius: 12px;
    
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: ${colors.preto};

    background-color: ${colors.verdeClaro};

    &.goBack {
        margin: 0 auto;
        width: 200px;
    
        position: absolute;
        top: 32px;
        left: 32px;
    
        font-size: 20px;
    
        background-color: ${colors.vermelho};

        &:hover {
            border: 4px inset ${colors.cinza};
        }
    }

    &:hover {
        border: 4px inset ${colors.preto};
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 60px;
        font-size: 36px;
        margin-top: 20px;

        &.goBack {
            width: 270px;
            height: 60px;
            font-size: 28px;
        }
    }

    @media (max-width: 767px) {

        margin-top: 70px;
        width: 85%;
        height: 40px;
        
        &.goBack {
            width: 200px;
            height: 40px;
            font-size: 22px;
        }
    }
`

export const SuccessSection = styled.div`
    position: relative;
    width: 370px;
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

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 530px;

        h2 {
            font-size: 50px;
        }

        h4 {
            font-size: 40px;
        }

        p {
            font-size: 30px;
        }

        button {
            width: 80%;
            height: 45px;
            font-size: 25px;
        }
    }

    @media (max-width: 767px) {
        width: 90%;
        height: 380px;

        h2 {
            font-size: 32px;
        }

        h4 {
            font-size: 28px;
        }

        p {
            font-size: 24px;
        }
    }
`