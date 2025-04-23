import styled from "styled-components";
import { colors } from "../../../styles";

export const SideBarContainer = styled.div`
    width: 260px;
    height: 100%;

    position: fixed;
    top: 35px;
    left: 89px;
`

export const SidebarArea = styled.div`
    display: block;
    height: 650px;
    text-align: center;

    border: 2px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulEscuro};
`

export const UserSection = styled.div`
    width: 200px;
    height: 100px;
    margin: 18px auto 0;

    h3 {
        margin: 0 auto -2px;
        font-size: 22px;
        font-weight: bold;
        color: ${colors.branco};
    }

    p {
        font-size: 16px;
        color: ${colors.branco};
    }

    button {
        width: 95px;
        height: 18px;
        margin-top: 12px;
        font-size: 13px;
        font-weight: 600;
        border: 1px solid ${colors.cinzaClaro};
        border-radius: 12px;
        background-color: ${colors.verde};
        color: ${colors.preto};
    }
`

export const FriendsSection = styled.div`
    height: 220px;
    border-bottom: 2px solid ${colors.cinzaClaro};

    button {
        width: 200px;
        height: 24px;
        margin-top: 38px;
        font-size: 18px;
        border: 1px solid ${colors.cinzaClaro};
        border-radius: 12px;
        background-color: ${colors.verde};
    }
`

export const FriendsList = styled.div`
    width: 192px;
    max-height: 150px;
    height: 100%;
    margin-top: 8px;
    margin-left: 32px;
    
    overflow-y: hidden;
    text-align: start;

    border-right: 2px solid ${colors.branco};
    border-left: 2px solid ${colors.branco};

    p {
        text-decoration: underline;
        font-size: 18px;
        margin-top: 8px;
        margin-left: 4px;
        color: ${colors.branco};

        span {
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
            span {
                display: inline;
            }
        }
    }

    &: :-webkit-scrollbar {
        width: 8px;
    }

    &: :-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(218, 255, 251);
        border-radius: 10px;
    }

    &: :-webkit-scrollbar-thumb {
        background-color: rgba(53, 162, 159, .8);
        border-radius: 10px;
    }

    &:hover {
        overflow-y: auto;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const PostButton = styled.button`
    max-width: 145px;
    height: 55px;
    margin: 35px auto 0;
    background-color: ${colors.azul};
    border: 2px solid ${colors.preto};
    border-radius: 16px;
    color: ${colors.preto};
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

export const ExitButton = styled.button`
    width: 145px;
    height: 35px;
    margin: 145px auto 0;
    background-color: ${colors.vermelho};
    border: 2px solid ${colors.verdeClaro};
    border-radius: 16px;
    color: ${colors.preto};
    font-size: 22px;
    font-weight: bold;
    text-align: center;
`