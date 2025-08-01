import styled from "styled-components";
import { colors } from "../../../../styles";

export const PostContainer = styled.div`
    max-width: 550px;
    min-height: 160px;
    margin: 0 auto 36px; 

    border: 1px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulClaro};
`

export const PostUserNameArea = styled.div`
    position: relative;
    width: 100%;
    height: 26px;
    border-bottom: 1px solid ${colors.cinzaClaro};
    text-align: center;

    h4: first-child {
        color: ${colors.cinzaClaro};
        font-size: 18px;
        font-weight: 200;
        line-height: 30px;
        text-align: center;
        cursor: pointer;

        &: hover {
            text-decoration: underline;
        }
    }
`

export const PostContentArea = styled.div`

    * {
        padding: 12px;
        color: ${colors.cinzaClaro};
    }
`

export const DropdownOverlay = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: ${colors.preto};
    opacity: 0.4;

    cursor: pointer;

    &.display {
        display: block;
    }
`