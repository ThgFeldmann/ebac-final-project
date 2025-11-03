import styled from "styled-components";
import { breakpoints } from "../../../styles";

export const Title = styled.h1`
    font-size: 44px;
    font-weight: bold;

    margin-top: 25px;
    text-align: center;

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        font-size: 60px;
    }

    @media (max-width: 767px) {
        
    }
`