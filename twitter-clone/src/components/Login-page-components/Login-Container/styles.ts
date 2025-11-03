import styled from "styled-components";
import { breakpoints, colors } from "../../../styles";

export const LoginContainer = styled.div`
    width: 470px;
    height: 340px;
    margin: 44px auto 0;

    align-items: center;
    text-align: center;

    border: solid 3px ${colors.azulClaro};
    border-radius: 2px;

    background-color: ${colors.azulClaro};

    &.successContainer {
        height: 300px;
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 700px;
        height: 600px;
    }

    @media (max-width: 767px) {
        width: 330px;
    }
`

export const InputContainer = styled.form `
    margin: 22px auto 0;
    justify-content: center;

    p.error {
        position: relative;
        top: -4px;
        color: red;
        font-weight: bold;
    }

    div {
        width: 400px;
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

            &.error {
                border: solid 2px #ff0000cc;
            }
        }
        
        @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
            width: 520px;

            label {
                width: auto;
                font-size: 45px;
            }

            input {
                height: 60px;
                font-size: 40px;

                p {
                    font-size: 35px;
                }
            }
        }

        @media (max-width: 767px) {
            width: 300px;

            label {
                width: auto;
                font-size: 25px;
            }

            input {
                font-size: 22px;
            }
        }
    }
`

export const ButtonContainer = styled.div`
    min-height: 75px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 25px;

    p {
        padding: 4px;
        font-size: 18px;
        font-weight: bold;
        color: ${colors.preto};
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        padding-top: 50px;

        p {
            font-size: 32px;
        }
    }

    @media (max-width: 767px) {
        padding-top: 15px;
    
        p {
            font-size: 20px;
        }
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

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 60px;
        font-size: 38px;
    }

    @media (max-width: 767px) {
        height: 35px;
        font-size: 24px;
    }
`

export const SuccessSection = styled.div`
    text-align: center;
    padding: 30px;

    h2 {
        font-size: 28px;
    }

    p {
        font-size: 20px;
        text-wrap: balance;
        margin: 20px 0;
    }

    button {
        width: 160px;
        height: 25px;

        font-size: 18px;
        font-weight: bold;

        background-color: ${colors.azul};

        border: 2px solid ${colors.preto};
        border-radius: 8px;

        &:hover {
            border: 3px inset ${colors.preto};
        }
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        h2 {
            font-size: 48px;
        }

        p {
            font-size: 40px;
        }

        button {
            width: 260px;
            height: 50px;
            font-size: 28px;
        }
    }

    @media (max-width: 767px) {
        h2 {
            font-size: 31px;
        }

        p {
            font-size: 26px;
        }

        button {
            width: 200px;
            height: 40px;
            font-size: 22px;
        }
    }
`