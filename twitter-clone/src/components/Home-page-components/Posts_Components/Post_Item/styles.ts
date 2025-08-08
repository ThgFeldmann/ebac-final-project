import styled from "styled-components";
import { colors } from "../../../../styles";

export const PostContainer = styled.div`
    min-width: 550px;
    max-width: 550px;
    min-height: 100px;
    margin: 0 auto 36px;

    border: 1px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulClaro};
`

export const PostUserNameArea = styled.div`
    width: 100%;
    height: 26px;
    border-bottom: 1px solid ${colors.cinzaClaro};
    text-align: center;

    h4: first-child {
        color: ${colors.cinzaClaro};
        font-size: 18px;
        font-weight: 200;
        line-height: 30px;
        text-align: center;
        cursor: pointer;

        &: hover {
            text-decoration: underline;
        }
    }
`

export const PostContentArea = styled.div`
    * {
        padding: 12px;
        color: ${colors.cinzaClaro};
    }
`

export const PostActionArea = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    align-items: center;
    border-top: 1px solid ${colors.cinzaClaro};

    button {
        width: 80px;
        height: 20px;
        margin: 0 auto;
        font-size: 14px;
        font-weight: bold;
        border: 2px solid ${colors.preto};
        border-radius: 6px;
        background-color: ${colors.verdeClaro};

        &: hover, &.clicked {
            border: 3px inset ${colors.cinza};
        }
    }
`

export const CreationContainer = styled.div`
    display: none;

    &.unhidden {
        display: flex;
        flex-direction: column;
    }

    z-index: 2;

    position: absolute;
    top: 180px;
    left: 80px;

    width: 400px;
    min-height: 110px;
    max-height: 160px;

    border: 1px solid ${colors.cinzaClaro};
    background-color: ${colors.azulEscuro};

    label {
        margin: 8px auto;

        font-weight: bold;

        color: ${colors.cinzaClaro};
    }
    
    textarea {
        width: 320px;
        min-height: 50px;
        max-height: 90px;
        margin: 0 auto;
        padding: 4px;

        font-size: 16px;

        color: ${colors.cinzaClaro};

        border: 3px dotted ${colors.cinzaClaro};

        background-color: ${colors.azulClaro};

        resize: none;
    }

    div {
        width: 160px;
        margin: 8px auto;
        display: flex;
        justify-content: space-between;

        button {
            width: 70px;
            height: 20px;
            font-size: 14px;
            font-weight: bold;
            color: ${colors.preto};
            
            border: 3px solid ${colors.preto};
            border-radius: 6px;

            &: hover {
                border: 4px inset ${colors.preto};
            }

            &.finish {
                background-color: ${colors.verdeClaro};
            }

            &.cancel {
                background-color: ${colors.vermelho};
            }
        }
    }
`