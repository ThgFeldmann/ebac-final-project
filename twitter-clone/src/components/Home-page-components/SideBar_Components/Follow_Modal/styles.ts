import styled from "styled-components"
import { breakpoints, colors } from "../../../../styles"

export const FollowModalContainer = styled.div`
    position: absolute;
    bottom: 8px;
    left: 40px;

    text-align: center;

    border: 1px solid ${colors.cinzaClaro};
    border-radius: 8px;
    background-color: ${colors.azulClaro};

    display: none;

    &.unhidden {
        display: block;
    }

    h3 {
        border-bottom: 1px solid ${colors.cinzaClaro};
        color: ${colors.branco};
    }

    div {
        button {
            width: 110px;
            height: 24px;
            margin: 6px auto;
            font-size: 14px;
            font-weight: bold;
            border: 1px solid ${colors.preto};
            border-radius: 8px;
            background-color: ${colors.verdeClaro};

            &: hover {
                border: 4px inset ${colors.preto};
            }
        }
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 170px;
        height: 110px;
        left: 7px;

        h3 {
            font-size: 28px;
        }

        div {
            button {
                width: 95%;
                height: 65px;
                font-size: 27px;
            }
        }
    }

    @media (max-width: 767px) {
        width: 70px;
        height: 70px;
        left: 5px;

        div {
            button {
                width: 95%;
                height: 60%;
                font-size: 14px;
            }
        }
    }
`