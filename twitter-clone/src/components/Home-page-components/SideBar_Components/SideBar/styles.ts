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

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;

    a:last-child {
        width: 145px;
        height: 35px;
        padding: 2px;
        margin: 145px auto 0;
        background-color: ${colors.vermelho};
        border: 1px solid ${colors.cinzaClaro};
        border-radius: 16px;
        color: ${colors.preto};
        font-size: 22px;
        font-weight: bold;
        text-align: center;

        
        &:hover {
            border: 3px inset ${colors.cinza};
        }
    }
`

export const PostButton = styled.button`
    max-width: 145px;
    height: 55px;
    margin: 35px auto 0;
    background-color: ${colors.azul};
    border: 2px solid ${colors.cinzaClaro};
    border-radius: 16px;
    color: ${colors.preto};
    font-size: 16px;
    font-weight: bold;
    text-align: center;

    &:hover {
        border: 4px inset ${colors.cinza};
    }
`