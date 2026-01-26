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

    min-height: 190px;
    max-height: 225px;

    margin: 0 auto;

    text-align: center;

    border: 1px solid ${colors.cinza};
    border-radius: 8px;

    background-color: ${colors.azulEscuro};

    img {
        margin-top: 10px;
        width: 90px;
        height: 90px;
    }

    p {
        color: ${colors.cinzaClaro};
        
        &.imageError {
            margin: 15px 0 10px;
        }

        &.userBio {
            margin: 6px auto;
        }
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
        min-height: 220px;
        max-height: 330px;

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
            margin-bottom: 15px;

            button {
                height: 60px;
                font-size: 24px;
            }
        }
    }

    @media (max-width: 767px) {
        width: 130px;
        min-height: 165px;
        max-height: 225px;

        div.buttonContainer {
            margin-bottom: 10px;

            button {
                width: 90%;
            }
        }
    }
`