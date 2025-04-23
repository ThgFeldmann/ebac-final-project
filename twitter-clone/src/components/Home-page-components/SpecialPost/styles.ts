import styled from "styled-components";
import { colors } from "../../../styles";

export const SpecialPostContainer = styled.div`
    width: 80%;
    height: 120px;
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
        font-size: 18px;
        font-weight: 200;
        line-height: 30px;
        text-align: center;
    }
`

export const SpecialPostContentArea = styled.div`
    * { // Rules for everything inside the content area
        height: 92px;
        padding: 12px;
        color: ${colors.cinzaClaro};

        white-space: nowrap;
        text-wrap: wrap;
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
    }
`