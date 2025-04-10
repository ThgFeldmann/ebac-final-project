import styled from "styled-components"

export const InputContainer = styled.div `
    max-width: 420px;
    height: 150px;
    margin: 46px auto 0;
    justify-content: center;

    div {
        max-width: 470px;
        margin: 0 auto;
        position: static;

        label {
            display: block;
            width: 190px;

            text-align: left;
            font-size: 22px;
            font-weight: bold;
        }

        input {
            display: block;
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;

            font-size: 18px;
        }
    }
`