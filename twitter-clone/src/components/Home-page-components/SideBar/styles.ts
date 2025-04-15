import styled from "styled-components";
import { colors } from "../../../styles";

export const SideBarContainer = styled.div`
    display: block;
    width: 240px;
    height: 92vh;

    text-align: center;

    position: absolute;
    top: 28px;
    left: 50px;

    border: 2px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulEscuro};
`

export const UserSection = styled.div`
    width: 200px;
    height: 100px;
    margin: 18px auto 0;

    h3 {
        max-width: 120px;
        margin: 0 auto -2px;
        font-size: 20px;
        font-weight: bold;
        color: ${colors.branco};
    }

    p {
        font-size: 14px;
        color: ${colors.branco};
    }

    button {
        width: 95px;
        height: 16px;
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
        width: 180px;
        height: 24px;
        margin-top: 38px;
        font-size: 18px;
        border: 1px solid ${colors.cinzaClaro};
        border-radius: 12px;
        background-color: ${colors.verde};
    }
`

export const FriendsList = styled.div`
    width: 180px;
    max-height: 150px;
    height: 100%;
    margin-top: 8px;
    margin-left: 32px;
    
    overflow-y: hidden;
    text-align: start;

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
        -webkit-box-shadow: inset 0 0 6px ${colors.branco};
        border-radius: 10px;
    }

    &: :-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px ${colors.cinzaClaro};
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