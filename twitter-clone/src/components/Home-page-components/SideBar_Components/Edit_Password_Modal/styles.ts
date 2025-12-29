import styled from "styled-components";
import { colors } from "../../../../styles";
import { Modal } from "../../Search_User_Modal/styles";

export const PasswordModal = styled(Modal)`
    width: 350px;

    h2 {
        color: ${colors.cinzaClaro};
    }

    div {
        width: 65%;
    }
    
    .submitButton {
        background-color: ${colors.verde};
    }

    .cancelButton {
        background-color: ${colors.vermelho};
    }
`