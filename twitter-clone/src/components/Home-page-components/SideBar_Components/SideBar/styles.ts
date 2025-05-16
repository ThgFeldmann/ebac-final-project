import styled from "styled-components";
import { colors } from "../../../../styles";

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

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;

    a:last-child {
        width: 145px;
        height: 35px;
        padding: 2px;
        margin: 145px auto 0;
        background-color: ${colors.vermelho};
        border: 2px solid ${colors.verdeClaro};
        border-radius: 16px;
        color: ${colors.preto};
        font-size: 22px;
        font-weight: bold;
        text-align: center;
    }
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