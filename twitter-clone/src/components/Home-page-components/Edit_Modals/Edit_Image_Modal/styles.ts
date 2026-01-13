import styled from "styled-components"
import { PasswordModal } from "../Edit_Password_Modal/styles"
import { breakpoints, colors } from "../../../../styles"

export const ImageModal = styled(PasswordModal)`
    width: 28vw;

    input {
        width: 50%;
        height: 15%;

        // hides the text
        background-color: ${colors.azulEscuro};
        color: ${colors.azulEscuro};

        &::file-selector-button {
            background-color: ${colors.verde};
            cursor: pointer;
            border: 2px solid ${colors.cinzaClaro};

            &:hover {
                border: 3px inset ${colors.preto};
            }
        }
    }

    p {
        color: ${colors.cinzaClaro};
        font-size: 22px;
        margin: 0 auto;
    }

    div.buttonContainer {
        margin-top: 25px;
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 70vw;
        height: 360px;

        input {
            width: 50%;
        }
    }

    @media (max-width: 767px) {
        width: 90vw;

        input {
            width: 50%;
        }
    }
`