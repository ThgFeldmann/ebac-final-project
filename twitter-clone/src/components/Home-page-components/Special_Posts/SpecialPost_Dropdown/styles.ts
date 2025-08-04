import styled from "styled-components"
import { colors } from "../../../../styles"

export const DropdownContainer = styled.div`
    position: absolute;
    top: 24px;
    right: 11px;
    left: 11px;

    z-index: 3;

    display: none;

    &.dropdown {
        display: block;
    }

    max-width: 220px;
    min-height: 70px;
    height: 80px;
    max-height: 150px;
    margin: 0 auto;

    text-align: center;

    border: 1px solid ${colors.cinza};
    border-radius: 8px;

    background-color: ${colors.azulEscuro};

    h3, h4 {
        font-weight: bold;
        color: ${colors.cinzaClaro};
    }

    h3 {
        border-bottom: 1px solid ${colors.cinza};
        font-size: 18px;
    }

    h4 {
        font-size: 12px;
    }

    button {
        width: 150px;
        max-height: 20px;
        font-size: 12px;
        font-weight: bold;
        border: 2px solid ${colors.preto};
        border-radius: 6px;
        color: ${colors.preto};
        background-color: ${colors.verde};

        &: hover {
            border: 4px inset ${colors.preto};
        }
    }
`