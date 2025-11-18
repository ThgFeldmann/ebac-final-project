import styled from "styled-components"
import { breakpoints, colors } from "../../../styles"

export const CreationSectionContainer = styled.div`
    width: 650px;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    
    margin: 0 70px 0 80px;
    padding-top: 8px;

    border-left: 2px solid ${colors.cinzaClaro};
    border-right: 2px solid ${colors.cinzaClaro};

    @media (max-width: 767px) {
        width: 145px;
        margin-left: 30px;
    }
`

export const Headline = styled.h1`
    margin: 0 auto;
    color: ${colors.cinzaClaro};

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        font-size: 40px;
    }

    @media (max-width: 767px) {
        text-align: center;
        font-size: 25px;
    }
`

export const ButtonContainer = styled.div`
    width: 240px;
    height: 50px;
    padding: 6px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border: 1px solid ${colors.cinzaClaro};
    border-radius: 4px;
    background-color: ${colors.azulClaro};

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 70%;
        height: 70px;
    }

    @media (max-width: 767px) {
        width: 70%;
        height: 15%;
        flex-direction: column;
    }
`

export const Button = styled.button`
    height: 30px;
    padding: 4px;
    margin-top: 2px;
    border: 2px solid ${colors.preto};
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    background-color: ${colors.verdeClaro};

    &.reset {
        border-color: ${colors.cinzaClaro};
        background-color: ${colors.vermelho};
    }

    &: hover {
        border: 3px inset ${colors.preto};

        &.reset {
            border-color: ${colors.preto};
        }
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 35%;
        height: 55px;

        font-size: 25px;
    }

    @media (max-width: 767px) {
        
    }
`

export const PreviewArea = styled.div`
    margin-top: 12px;
    text-align: center;
    border-top: 1px solid ${colors.cinzaClaro};
    
    h3 {
        margin: 6px 0;
        color: ${colors.cinzaClaro};
    }

    p {
        color: ${colors.cinzaClaro};
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        h3 {
            font-size: 32px;
        }

        p {
            font-size: 28px;
        }
    }

    @media (max-width: 767px) {
        
    }
`

export const GoBackButton = styled.button`
    width: 125px;
    height: 35px;
    margin: 35px auto 0;
    background-color: ${colors.cinza};
    border: 2px solid ${colors.cinzaClaro};
    border-radius: 16px;
    color: ${colors.preto};
    font-size: 22px;
    font-weight: bold;
    text-align: center;

    &:hover {
        border: 3px inset ${colors.preto};
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 40%;
        height: 60px;
        font-size: 38px;
    }

    @media (max-width: 767px) {
        
    }
`

// form
export const CreationItemContainer = styled.form`
    max-width: 550px;
    min-height: 160px;
    margin: 18px auto 36px; 

    border: 1px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulClaro};

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 430px;
        min-height: 260px;
    }

    @media (max-width: 767px) {
        width: 90%;
    }
`

export const CreationAuthorArea = styled.div`
    width: 100%;
    height: 26px;
    border-bottom: 1px solid ${colors.cinzaClaro};
    text-align: center;

    h4 {
        color: ${colors.cinzaClaro};
        font-size: 18px;
        font-weight: 200;
        line-height: 30px;
        text-align: center;
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 40px;

        h4 {
            padding: 7px;
            font-size: 36px;
        }
    }

    @media (max-width: 767px) {
        
        h4 {
            font-size: 20px;
        }
    }
`

export const CreationContentArea = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;

    * {
        padding: 4px;
        color: ${colors.cinzaClaro};
    }

    textarea {
        min-height: 100px;
        font-size: 16px;
        line-height: 25px;
        border: 3px dotted ${colors.cinzaClaro};
        background-color: ${colors.azulClaro};
        resize: none;
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        label {
            font-size: 30px;
        }

        textarea {
            font-size: 28px;
            min-height: 155px;
        }
    }

    @media (max-width: 767px) {
        label {
            font-size: 19px;
        }

        textarea {
            font-size: 18px;
        }
    }
`