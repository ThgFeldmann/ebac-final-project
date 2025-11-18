import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles";

export const PostSectionContainer = styled.div`
    width: 650px;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    
    margin: 0 70px 0 80px;
    padding-top: 8px;

    border-left: 2px solid ${colors.cinzaClaro};
    border-right: 2px solid ${colors.cinzaClaro};

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 600px;
    }

    @media (max-width: 767px) {
        width: 600px;
        margin-left: 30px;
    }
`