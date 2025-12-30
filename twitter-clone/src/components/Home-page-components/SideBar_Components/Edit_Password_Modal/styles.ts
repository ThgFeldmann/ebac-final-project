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

export const Result = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px;
    margin: 0 auto;
    text-align: center;
    
    h2 {
        width: 90%;
        padding: 2px;
        color: ${colors.cinzaClaro};
        font-size: 18px;
    }

    p {
        margin-top: 4px;
        color: ${colors.cinzaClaro};
    }

    div {
        button {
            margin: 0 auto;
        }

        .goBackButton {
            border-color: ${colors.cinzaClaro};
            background-color: ${colors.cinza};
            margin: 0 auto;
        }
    }
`