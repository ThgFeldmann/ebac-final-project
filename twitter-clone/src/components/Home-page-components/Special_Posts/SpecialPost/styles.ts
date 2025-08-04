import styled from "styled-components";
import { colors } from "../../../../styles";

export const SpecialPostContainer = styled.div`
    position: relative;
    width: 270px;
    min-height: 105px;
    max-height: 120px;
    margin: 8px auto 0;

    border: 1px solid ${colors.cinzaClaro};
    border-radius: 12px;

    background-color: ${colors.azulClaro};

    * {
        color: ${colors.cinzaClaro};
    }
`

export const SpecialPostUserNameArea = styled.div`
    width: 100%;
    height: 26px;
    border-bottom: 1px solid ${colors.cinzaClaro};
    text-align: center;

    h4 {
        color: ${colors.cinzaClaro};
        font-size: 16px;
        font-weight: 200;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
    }
`

// Rules for everything inside the content area
export const SpecialPostContentArea = styled.div`
    * {
        width: 90%;
        height: 80%;
        padding-top: 4px;
        margin: 0 auto;
        color: ${colors.cinzaClaro};


    }

    p {
        --max-lines: 5;
        
        font-size: 14px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--max-lines);
    }
`