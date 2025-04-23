import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
    branco: '#fff',
    preto: '#000',
    cinzaClaro: '#dafffb',
    azulDeFundo: '#001C30',
    azulClaro: '#176B87',
    azul: '#63ACFF',
    azulEscuro: '#071952',
    verdeClaro: '#64CCC5',
    verde: '#35A29F',
    vermelho: '#9C0505',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
        color: ${colors.preto};
    }

    body {
        background-color: ${colors.azulDeFundo};
    }

    button {
        cursor: pointer;
    }
`

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`

export const HomeContainer = styled.div`
    max-width: fit-content;
    height: 100%;
    margin: 0 auto;

    display: flex;
    overflow: hidden;
`