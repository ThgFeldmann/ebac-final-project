import styled from "styled-components";
import { colors } from "../../../../styles";

export const CommentUserArea = styled.div`
    border-top: 2px solid ${colors.cinzaClaro};
    border-bottom: 2px solid ${colors.cinzaClaro};

    background-color: ${colors.azulEscuro};

    h4 {
        padding: 2px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        color: ${colors.cinzaClaro}
    }
`

export const CommentContentArea = styled.div`
    * {
        padding: 12px;
        color: ${colors.cinzaClaro};
    }
`