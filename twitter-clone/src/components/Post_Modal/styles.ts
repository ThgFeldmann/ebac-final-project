import styled from "styled-components"
import { colors } from "../../styles"

export const PostModalContainer = styled.div`
    position: absolute;
    top: 3px;
    right: 8px;

    z-index: 3;

    display: none;

    &.unhidden {
        display: block;
    }

    width: 180px;
    min-height: 50px;
    height: 90px;
    max-height: 100px;
    margin: 0 auto;

    text-align: center;

    border: 1px solid ${colors.cinza};
    border-radius: 8px;

    background-color: ${colors.azulEscuro};

    h3, h4 {
        color: ${colors.cinzaClaro};
    }

    div: first-child {
        border-bottom: 1px solid ${colors.cinza};

        h3 {
            font-size: 16px;
        }
    }

    h4 {
        width: 140px;
        max-height: 32px;
        margin: 4px auto;
        font-size: 12px;
        line-height: 16px;
    }

    button {
        width: 150px;
        max-height: 20px;
        font-weight: bold;
        border: 2px solid ${colors.preto};
        border-radius: 6px;
        background-color: ${colors.verde};
        color: ${colors.preto};

        &: hover {
            border: 4px inset ${colors.preto};
        }
    }
`