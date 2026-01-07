import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles";

export const SideBarContainer = styled.div`
    width: 260px;
    height: 100%;

    position: sticky;
    top: 35px;
    left: 89px;

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 200px;
        left: 25px;
    }

    @media (max-width: 767px) {
        width: 90px;
        left: 10px;
    }
`

export const SidebarArea = styled.div`
    display: block;
    height: 650px;
    text-align: center;

    border: 2px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulEscuro};

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 80vh;
    }

    @media (max-width: 767px) {
        height: 100vh;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;

    a:last-child {
        width: 145px;
        height: 35px;
        padding-top: 3px;
        margin: 80px auto 0;
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

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        a:last-child {
            width: 110px;
            height: 50px;
            font-size: 34px;
            margin-top: 45px;
        }
    }

    @media (max-width: 767px) {
        a:last-child {
            margin-top: 35px;
            width: 80px;
        }
    }
`

export const PostButton = styled.button`
    width: 145px;
    height: 55px;
    margin: 35px auto 0;
    background-color: ${colors.azul};
    border: 2px solid ${colors.cinzaClaro};
    border-radius: 16px;
    color: ${colors.preto};
    font-size: 16px;
    font-weight: bold;
    text-align: center;

    &.goBack {
        font-size: 22px;
        background-color: ${colors.cinza};
    }

    &:hover {
        border: 4px inset ${colors.cinza};
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 140px;
        height: 65px;
        font-size: 26px;
    }

    @media (max-width: 767px) {
        width: 80px;
        padding: 2px;
    }
`

export const SearchButton = styled(PostButton)`
    padding: 0 12px;
    margin: 16px auto 0;
    background-color: ${colors.verde};

    @media (max-width: 767px) {
        padding: 8px;
    }
`

export const AccountButton = styled.button`
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 3px;

    width: 80%;
    height: 30px;

    font-size: 16px;
    font-weight: bold;
    background-color: ${colors.verde};
    border: 2px solid ${colors.cinzaClaro};
    border-radius: 8px;

    &.accountGoBackButton {
        background-color: ${colors.cinza};
    }

    &:hover {
        border: 4px inset ${colors.cinza};
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 40px;
        font-size: 24px;
        padding: 0;
    }

    @media (max-width: 767px) {
        height: 45px;
    }
`