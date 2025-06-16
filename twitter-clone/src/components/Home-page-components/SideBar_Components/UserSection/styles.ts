import styled from "styled-components";
import { colors } from "../../../../styles";

export const UserSection = styled.div`
    width: 200px;
    height: 100px;
    margin: 18px auto 0;

    h3 {
        margin: 0 auto -2px;
        font-size: 22px;
        font-weight: bold;
        color: ${colors.branco};
    }

    p {
        font-size: 16px;
        color: ${colors.branco};
    }

    button {
        width: 95px;
        height: 18px;
        margin-top: 12px;
        font-size: 13px;
        font-weight: 600;
        border: 1px solid ${colors.cinzaClaro};
        border-radius: 12px;
        background-color: ${colors.verde};
        color: ${colors.preto};

        
        &:hover {
            border: 3px inset ${colors.cinza};
        }
    }
`

export const Modal = styled.div`
    width: 500px;
    height: 150px;

    padding: 12px;

    position: fixed;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);

    z-index: 2;

    overflow: none;

    background-color: ${colors.azulEscuro};

    h2 {
        color: ${colors.cinzaClaro};
    }

    input {
        width: 50%;
        height: 30px;
        margin: 12px 0;
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