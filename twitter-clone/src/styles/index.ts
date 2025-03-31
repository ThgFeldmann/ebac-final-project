import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
    branco: '#fff',
    preto: '#000',
    azulDeFundo: '#001C30',
    azulClaro: '#176B87',
    azul: '#63ACFF',
    verdeClaro: '#64CCC5',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
        color: ${colors.preto}

        button {
            cursor: pointer;
        }

        .container {
            max-width: 1024px;
            margin: 0 auto;
        }
    }
`