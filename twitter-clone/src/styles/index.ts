import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
    branco: '#fff',
    preto: '#000',
    cinza: '#646464',
    cinzaClaro: '#dafffb',
    azulDeFundo: '#001C30',
    azulClaro: '#176B87',
    azul: '#63ACFF',
    azulEscuro: '#071952',
    verdeClaro: '#64CCC5',
    verde: '#35A29F',
    vermelho: '#9C0505',
}

// breakpoints for different devices
export const breakpoints = {
    desktop: '1024px',
    tablet: '768px'
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
    height: auto;
    margin: 0 auto;

    display: flex;
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 1;
`

export const ModalOverlay = styled.div`
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: ${colors.preto};
    opacity: 0.5;

    cursor: pointer;

    &.overlay {
        display: block;
    }
`