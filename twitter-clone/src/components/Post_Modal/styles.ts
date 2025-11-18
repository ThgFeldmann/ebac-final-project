import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const PostModalContainer = styled.div`
    position: relative;

    z-index: 4;

    display: none;

    &.unhidden {
        display: block;
    }

    width: 180px;
    min-height: 115px;
    margin: 0 auto;

    text-align: center;

    border: 1px solid ${colors.cinza};
    border-radius: 8px;

    background-color: ${colors.azulEscuro};

    &.logged_user {
        height: 70px;
    }

    h3, h4 {
        color: ${colors.cinzaClaro};
    }

    div: first-child {
        border-bottom: 1px solid ${colors.cinza};

        h3 {
            font-size: 18px;
        }
    }

    h4 {
        width: 110px;
        margin: 4px auto;
        font-size: 16px;

        &.line_height {
            line-height: 18px;
        }

        &.logged_user {
            margin-top: 7%;

            font-size: 18px;
        }
    }

    div.buttonContainer {
        button {
            width: 150px;
            height: 20px;
            margin-top: 4px;

            font-weight: bold;

            border: 2px solid ${colors.preto};
            border-radius: 6px;

            background-color: ${colors.verde};
            color: ${colors.preto};

            &: hover {
                border: 4px inset ${colors.preto};
            }
        }
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 240px;

        div: first-child {
            h3 {
                font-size: 40px;
            }
        }

        h4 {
            font-size: 26px;

            &.line_height {
                line-height: 22px;
            }

            &.logged_user {
                font-size: 28px;
            }
        }

        div.buttonContainer {
            button {
                height: 60px;
                font-size: 24px;
            }
        }
    }

    @media (max-width: 767px) {
        width: 130px;
        height: 125px;

        div.buttonContainer {
            button {
                width: 90%;
            }
        }
    }
`