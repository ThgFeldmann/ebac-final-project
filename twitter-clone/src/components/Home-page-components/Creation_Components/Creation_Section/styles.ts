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
    width: 180px;
    height: 50px;
    background-color: ${colors.azulClaro};
`

export const Button = styled.button`
    background-color: ${colors.verdeClaro};
`