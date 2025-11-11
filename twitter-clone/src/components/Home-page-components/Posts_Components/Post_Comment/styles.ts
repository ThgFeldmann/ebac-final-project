import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles";

export const CommentUserArea = styled.div`
    width: 100%;
    height: 26px;
    border-top: 2px solid ${colors.cinzaClaro};
    border-bottom: 2px solid ${colors.cinzaClaro};

    background-color: ${colors.azulEscuro};

    h4 {
        padding: 2px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        color: ${colors.cinzaClaro};

        cursor: pointer;

        &: hover {
            text-decoration: underline;
        }
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 40px;
        
        h4 {
            font-size: 28px;
        }
    }

    @media (max-width: 767px) {
        
    }
`

export const CommentContentArea = styled.div`
    * {
        padding: 12px;
        color: ${colors.cinzaClaro};

        @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
            font-size: 26px;
        }

        @media (max-width: 767px) {
            
        }
    }
`