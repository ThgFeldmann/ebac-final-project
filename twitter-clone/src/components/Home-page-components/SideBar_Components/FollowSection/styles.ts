import styled from "styled-components"
import { breakpoints, colors } from "../../../../styles"

export const FollowSection = styled.div`
    height: 221px;
    border-bottom: 2px solid ${colors.cinzaClaro};

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 283px;
    }

    @media (max-width: 767px) {
        height: 241px;
    }
`

export const FollowList = styled.ul`
    position: relative;
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

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        margin-left: 10px;

        li {
            font-size: 34px;
        }
    }

    @media (max-width: 767px) {
        margin-left: 3px;
    }
`

export const FollowedUserItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;

    text-align: center;

    button {
        display: block;

        height: 25px;
    
        background: none;
        border: none;

        font-size: 26px;
        font-weight: bold;
        color: ${colors.cinzaClaro};

        &: hover {
            color: ${colors.verde};
        }
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        justify-content: flex-start;

        button {
            font-size: 50px;
            padding-top: 1px;
        }
    }

    @media (max-width: 767px) {
        justify-content: flex-start;

        button {
            font-size: 30px;
            padding-top: 1px;
        }
    }
`

export const FollowInfo = styled.div`
    h3, h4 {
        color: ${colors.cinzaClaro};
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        h3 {
            font-size: 30px;
        }

        h4 {
            font-size: 28px;
        }
    }

    @media (max-width: 767px) {
        
    }
`