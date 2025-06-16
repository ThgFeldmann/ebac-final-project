import styled from "styled-components";
import { colors } from "../../../../styles";

export const SpecialPostsContainer = styled.div`
    width: 350px;
    height: 650px;

    position: fixed;
    top: 35px;
    right: 50px;
    z-index: -1;

    text-align: center;

    border: 2px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulEscuro};

    button {
        width: 240px;
        height: 30px;
        margin: 8px auto;
        font-size: 14px;
        font-weight: bold;
        border: 1px solid ${colors.cinzaClaro};
        border-radius: 10px;
        background-color: ${colors.verdeClaro};
    }
`

export const SpecialPostsArea = styled.div`
    width: 90%;
    height: 600px;
    margin: 0 auto;

    overflow: hidden;

    &: hover {
        overflow: auto;
        scrollbar-gutter: stable both-edges;
    }

    &: :-webkit-scrollbar {
        width: 8px;
    }

    &: :-webkit-scrollbar-track {
        background-color: rgba(218, 255, 251, 0.656);
        border: 3.5px solid ${colors.azulEscuro};
        border-radius: 10px;
    }

    &: :-webkit-scrollbar-thumb {
        background-color: ${colors.azulClaro};
        border: 2px solid rgba(218, 255, 251, 0.656);
        border-radius: 10px;
    }
`