import styled from "styled-components";
import { colors } from "../../../styles";

export const GoBackButtonComponent = styled.button`
    padding: 4px;

    position: absolute;
    top: 32px;
    left: 32px;

    border: 2px solid #000;
    border-radius: 12px;

    font-size: 20px;
    font-weight: bold;

    background-color: ${colors.vermelho};
`