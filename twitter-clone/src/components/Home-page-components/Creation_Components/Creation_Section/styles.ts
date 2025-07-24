import styled from "styled-components"
import { colors } from "../../../../styles"

export const CreationSectionContainer = styled.div`
    width: 650px;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    
    margin: 0 70px 0 80px;
    padding-top: 8px;

    border-left: 2px solid ${colors.cinzaClaro};
    border-right: 2px solid ${colors.cinzaClaro};
`

export const Headline = styled.h1`
    margin: 0 auto;
    color: ${colors.cinzaClaro};
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
`

export const PreviewArea = styled.div`
    margin-top: 12px;
    text-align: center;
    border-top: 1px solid ${colors.cinzaClaro};
    
    h3 {
        margin: 6px 0;
        color: ${colors.cinzaClaro};
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
`

export const CreationContentArea = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;

    * {
        padding: 4px;
        color: ${colors.cinzaClaro};
    }

    input {
        margin: 6px 0;
    }

    textarea {
        min-height: 100px;
        font-size: 16px;
        line-height: 25px;
        border: 3px dotted ${colors.cinzaClaro};
        background-color: ${colors.azulClaro};
        resize: none;
    }
`