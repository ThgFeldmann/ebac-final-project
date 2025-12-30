import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles";
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

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 70vw;
        height: 34vh;
        top: 40%;

        h2 {
            width: 85%;
            font-size: 38px;
        }

        input {
            height: 70px;
            font-size: 34px;
            width: 85%;
        }

        div {
            margin-top: 55px;

            width: 75%;

            .submitButton, .cancelButton {
                height: 90px;
                width: 140px;
                font-size: 28px;
            }
        }
    }

    @media (max-width: 767px) {
        width: 250px;
        top: 42%;
        left: 46%;

        h2 {
            width: 90%;
        }

        input {
            width: 90%;
        }

        div {
            width: 80%;
        }
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

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {

        h2 {
            font-size: 38px;
        }

        p {
            font-size: 30px;
        }

        div {
            button {
                font-size: 36px;
                width: 140px;
                height: 60px
            }
        }
    }

    @media (max-width: 767px) {

        h2 {
            font-size: 22px;
        }

        p {
            font-size: 16px;
        }

        div {
            button {
                height: 40px;
                font-size: 24px;
            }
        }
    }
`