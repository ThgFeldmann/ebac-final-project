import styled from "styled-components"
import { colors } from "../../../../styles"

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
`