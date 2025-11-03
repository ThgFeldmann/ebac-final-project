import styled from "styled-components";
import { breakpoints, colors } from "../../../styles";

export const AppName = styled.h1`
    margin-top: 30px;
    
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    font-family: Roboto;
    
    color: ${colors.branco};

    @media (min-width: 769px) and (max-width: ${breakpoints.desktop}) {
        font-size: 88px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin: 30px auto 0;
    }
`