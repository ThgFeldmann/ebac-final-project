import styled from "styled-components"
import { colors } from "../../../styles"

export const Modal = styled.div`
    display: none;
    width: 500px;
    height: 150px;

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

            border: 3px solid ${colors.preto};

            &.submit {
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
`