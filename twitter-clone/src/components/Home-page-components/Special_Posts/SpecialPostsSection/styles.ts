import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles";

export const SpecialPostsContainer = styled.div`
    width: 300px;
    height: 650px;

    position: sticky;
    top: 35px;
    right: 50px;

    z-index: 0;

    text-align: center;

    border: 2px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulEscuro};

    h4 {
        color: ${colors.cinzaClaro};
    }

    .headliner {
        width: 95%;
        height: 30px;
        margin: 8px auto;
        text-align: center;
        border: 1px solid ${colors.cinzaClaro};
        border-radius: 10px;

        h2 {
            margin-top: 5px;
            font-size: 14px;
            font-weight: bold;
            color: ${colors.cinzaClaro};
        }
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 70vh;

        .headliner {
            height: 80px;

            h2 {
                font-size: 28px;
            }
        }
    }

    @media (max-width: 767px) {
        
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

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        
    }

    @media (max-width: 767px) {
        
    }
`