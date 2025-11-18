import styled from "styled-components"
import { breakpoints, colors } from "../../../styles"

export const Modal = styled.div`
    display: none;
    width: 500px;
    min-height: 150px;

    &.unhidden {
        display: block;
    }

    border: 1px solid ${colors.cinzaClaro};
    border-radius: 8px;

    align-items: center;
    justify-content: center;

    padding: 12px;

    position: fixed;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);

    z-index: 4;

    overflow: none;

    background-color: ${colors.azulEscuro};

    h2 {
        width: 270px;
        margin: 0 auto;
        color: ${colors.cinzaClaro};
    }

    input {
        display: block;
        background-color: ${colors.cinzaClaro};
        width: 250px;
        height: 30px;
        margin: 12px auto;
        padding: 4px;
        font-size: 18px;
    }

    div {
        width: 50%;
        display: flex;
        justify-content: space-between;
        margin: 12px auto;

        button {
            width: 80px;
            height: 30px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 10px;

            border: 3px solid ${colors.preto};

            &.submit {
                font-size: 14px;
                background-color: ${colors.verdeClaro};
            }

            &.exit {
                background-color: ${colors.vermelho};
            }

            &:hover {
                border: 4px inset ${colors.preto};
            }
        }
    }

    div.loggedUser {
        height: 40px;
        border: 1px solid ${colors.cinzaClaro};

        h4 {
            margin: auto;
            font-size: 18px;
            color: ${colors.cinzaClaro};
        }
    }

    div.followSection {
        display: flex;
        width: 255px;
        height: 70px;
        padding: 12px;
        text-align: center;
        border: 1px solid ${colors.cinzaClaro};

        h4 {
            padding: 8px 2px;
            margin-top: 1px;
            font-size: 18px;
            color: ${colors.cinzaClaro};

            &.notFollowed {
                width: 90px;
                padding: 2px 0;
                margin-bottom: 2px;
            }
        }

        button {
            height: 45px;
            width: 95px;
            background-color: ${colors.azul};
            border-radius: 10px;

            &.notFollowed {
                font-size: 18px;
            }
        }
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 600px;
        height: 230px;

        top: 42%;

        h2 {
            width: 60%;
            font-size: 30px;
        }

        input {
            width: 60%;
            height: 60px;
            font-size: 28px;
        }

        div {
            width: 60%;
            margin-top: 40px;

            button {
                width: 120px;
                height: 50px;
                font-size: 24px;

                &.submit {
                    font-size: 24px;
                }
            }
        }
    }

    @media (max-width: 767px) {
        width: 90vw;

        div {
            width: 60%;
        }
    }
`