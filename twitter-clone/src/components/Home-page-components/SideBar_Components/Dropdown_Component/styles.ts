import styled from "styled-components";
import { colors } from "../../../../styles";


export const Dropdown = styled.button`
    display: none;
    cursor: pointer;
    vertical-align: middle;
    margin-top: -10px;
    font-size: 36px;
    line-height: 0;
    letter-spacing: -1px;
    color: ${colors.branco};

    &:hover {
        display: block;
    }
`