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

    border: 1px solid ${colors.cinzaClaro};
    border-radius: 8px;

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
        background-color: ${colors.cinzaClaro};
        width: 50%;
        height: 30px;
        margin: 12px 0;
        font-size: 18px;

        &.error {
            border: solid 3px #ff0000cc;;
        }
    }

    p.error {
        font-size: 12px;
        margin: -8px 0 -7px;
        color: #ff0000;
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