import styled from "styled-components"
import { colors } from "../../../../styles"

export const CreationItemContainer = styled.div`
    max-width: 550px;
    min-height: 160px;
    margin: 18px auto 36px; 

    border: 1px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulClaro};
`

export const CreationAuthorArea = styled.div`
    width: 100%;
    height: 26px;
    border-bottom: 1px solid ${colors.cinzaClaro};
    text-align: center;

    h4 {
        color: ${colors.cinzaClaro};
        font-size: 18px;
        font-weight: 200;
        line-height: 30px;
        text-align: center;
    }
`

export const CreationContentArea = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;

    * {
        padding: 4px;
        color: ${colors.cinzaClaro};
    }

    input {
        margin: 6px 0;
    }

    textarea {
        min-height: 100px;
        font-size: 16px;
        line-height: 25px;
        color: ${colors.preto};
        resize: none;
    }
`