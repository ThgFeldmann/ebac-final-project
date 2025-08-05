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

export const PostActionArea = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
    border-top: 1px solid ${colors.cinzaClaro};

    button {
        width: 80px;
        height: 20px;
        margin: 0 auto;
        font-size: 14px;
        font-weight: bold;
        border: 2px solid ${colors.preto};
        border-radius: 6px;
        background-color: ${colors.verdeClaro};

        &: hover {
            border: 3px inset ${colors.cinza};
        }
    }
`

export const CreationContainer = styled.div`
    display: none;

    &.unhidden {
        display: block;
    }

    z-index: 2;

    background-color: ${colors.azulEscuro};
`