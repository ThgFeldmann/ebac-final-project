import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles";

export const PostContainer = styled.div`
    width: 550px;
    min-height: 100px;
    margin: 0 auto 36px;

    border: 1px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulClaro};

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 95%;
    }

    @media (max-width: 767px) {
        width: 135px;
    }
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

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        height: 40px;
    
        h4: first-child {
            padding: 4px;
            font-size: 38px;
        }
    }

    @media (max-width: 767px) {
        
    }
`

export const PostContentArea = styled.div`
    * {
        padding: 12px;
        color: ${colors.cinzaClaro};

        @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
            font-size: 32px;
            min-height: 140px;
        }

        @media (max-width: 767px) {
            
        }
    }
`

export const PostActionArea = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    border-top: 1px solid ${colors.cinzaClaro};

    div {
        margin: 0 auto;
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        p {
            margin: 0 auto;
            color: ${colors.cinzaClaro};
        }

        button {
            margin: 0 auto;

            min-width: 80px;
            height: 20px;
            font-size: 14px;
            font-weight: bold;
            border: 2px solid ${colors.preto};
            border-radius: 6px;
            background-color: ${colors.verdeClaro};

            &.likeButton {
                width: 105px;
            }

            &: hover, &.clicked {
                border: 3px inset ${colors.cinza};
            }
        }
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {

        height: auto;

        div {
            display: flex;
            flex-direction: column;
            width: 100%;

            p {
                font-size: 24px;
            }

            button {
                font-size: 22px;
                min-width: 120px;
                height: 50px;
            }
        }
    }

    @media (max-width: 767px) {
        height: 65px;

        div {
            display: flex;
            flex-direction: column;
            width: 100%;

            p {
                font-size: 14px;
            }
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
    top: 35%;
    left: 49.5%;
    transform: translate(-50%, -50%);

    width: 400px;
    min-height: 110px;

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

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 700px;
        height: 380px;

        label {
            font-size: 36px;
        }

        textarea {
            width: 500px;
            height: 200px;
            font-size: 32px;
            padding: 12px;
        }

        div {
            margin-top: 30px;
            width: 50%;

            button {
                width: 160px;
                height: 60px;
                font-size: 34px;
            }
        }
    }

    @media (max-width: 767px) {
        width: 60vw;

        label {
            font-size: 18px;
            padding: 4px;
        }

        textarea {
            width: 90%;
            font-size: 18px;
            min-height: 70px;
        }

        div {
            width: 80%;

            button {
                height: 30px;
                font-size: 15px;
            }
        }
    }
`