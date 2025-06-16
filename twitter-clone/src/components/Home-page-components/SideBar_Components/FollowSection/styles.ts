import styled from "styled-components"
import { colors } from "../../../../styles"

export const FollowSection = styled.div`
    height: 221px;
    border-bottom: 2px solid ${colors.cinzaClaro};
`

export const FollowList = styled.ul`
    width: 192px;
    max-height: 172px;
    height: 100%;
    margin-top: 8px;
    margin-left: 32px;
    
    overflow-y: hidden;
    text-align: start;

    border-left: 2px solid ${colors.branco};

    li {
        text-decoration: none;
        font-size: 18px;
        margin-top: 8px;
        margin-left: 4px;
        color: ${colors.branco};

        &: hover {
            text-decoration: underline;
        }
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

    &:hover {
        overflow-y: auto;
    }
`

export const FollowedUserItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;

    text-align: center;

    &: hover {
        button {
            display: block;
        }
    }

    button {
        display: none;

        height: 25px;
    
        background: none;
        border: none;

        font-size: 26px;
        font-weight: bold;
        color: ${colors.cinzaClaro};

        &: hover {
            color: ${colors.verde}
        }
    }
`

export const FollowInfo = styled.div`
    h3, h4 {
        color: ${colors.cinzaClaro};
    }
`