import styled from "styled-components"
import { colors } from "../../../../styles"

export const FriendsSection = styled.div`
    height: 221px;
    border-bottom: 2px solid ${colors.cinzaClaro};

    button {
        width: 200px;
        height: 24px;
        margin-top: 38px;
        font-size: 18px;
        font-weight: bold;
        border: 1px solid ${colors.cinzaClaro};
        border-radius: 12px;

        &.OnlineList {
            background-color: ${colors.verde};
        }

        &.OfflineList {
            background-color: ${colors.cinza};
        }
    }
`

export const FriendsList = styled.ul`
    width: 192px;
    max-height: 150px;
    height: 100%;
    margin-top: 8px;
    margin-left: 32px;
    
    overflow-y: hidden;
    text-align: start;

    border-left: 2px solid ${colors.branco};

    li {
        text-decoration: underline;
        font-size: 18px;
        margin-top: 8px;
        margin-left: 4px;
        color: ${colors.branco};

        button {
            display: none;
            cursor: pointer;
            vertical-align: middle;
            margin-top: -10px;
            font-size: 36px;
            line-height: 0;
            letter-spacing: -1px;
            color: ${colors.branco};
        }

        &:hover {
            button {
                display: inline;
            }
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