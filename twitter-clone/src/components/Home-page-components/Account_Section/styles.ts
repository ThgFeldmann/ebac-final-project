import styled from "styled-components"
import { breakpoints, colors } from "../../../styles"

export const SectionContainer = styled.div`
    width: 665px;
    height: 100vh;
    margin: 0 70px 0 80px;

    padding-top: 14px;

    border-left: 2px solid ${colors.cinzaClaro};
    border-right: 2px solid ${colors.cinzaClaro};

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 600px;
        margin-left: 50px;
    }

    @media (max-width: 767px) {
        width: 600px;
        margin-left: 30px;
    }
`

export const AccountContainer = styled.div`
    background-color: ${colors.azulClaro};
    width: 30vw;
    height: 60vh;
    margin: 0 auto;

    border: 2px solid ${colors.cinzaClaro};
    border-radius: 12px;
    padding: 12px;

    .imageContainer {
        width: 80px;
        height: 75px;
        margin: 0 auto;
        border-radius: 50px;
        background-color: ${colors.cinza};
    }

    h2 {
        text-align: center;
        margin-top: 8px;
        color: ${colors.cinzaClaro};
    }

    .bioContainer {
        border: 1px solid ${colors.cinzaClaro};
        width: 65%;
        min-height: 15%;
        max-height: 30%;
        margin: 16px auto;
        padding: 4px;

        p {
            color: ${colors.cinzaClaro};
        }
    }

    .buttonContainer {

        display: flex;
        flex-direction: column;
        width: 50%;

        margin: 0 auto;

        button {
            height: 30px;
            background-color: ${colors.verde};
            border: 2px solid ${colors.cinzaClaro};
            border-radius: 12px;

            margin-bottom: 10px;

            font-size: 16px;
            font-weight: bold;

            &:hover {
                border: 4px inset ${colors.cinza};
            }
        }
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 60vh;

        h2 {
            font-size: 28px;
        }

        .bioContainer {
            width: 85%;
            font-size: 22px;
        }

        .buttonContainer {
            width: 90%;

            button {
                font-size: 22px;
                height: 45px;
            }
        }
    }

    @media (max-width: 767px) {
        height: 60vh;

        .bioContainer {
            width: 85%;
            min-height: 25%;
            max-height: 35%;
        }

        .buttonContainer {
            width: 90%;

            button {
                height: 45px;
            }
        }
    }
`