import styled from "styled-components";
import { colors } from "../../../styles";

export const SideBarContainer = styled.div`
    display: block;
    width: 240px;
    height: 92vh;

    text-align: center;

    position: absolute;
    top: 28px;
    left: 28px;

    border: 2px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulEscuro};
`

export const UserSection = styled.div`
    width: 200px;
    height: 100px;
    margin: 18px auto 0;

    h3 {
        max-width: 120px;
        margin: 0 auto -2px;
        font-size: 20px;
        font-weight: bold;
        color: ${colors.branco};
    }

    p {
        font-size: 14px;
        color: ${colors.branco};
    }

    button {
        width: 95px;
        height: 16px;
        margin-top: 12px;
        font-size: 13px;
        font-weight: 600;
        border: 1px solid ${colors.cinzaClaro};
        border-radius: 12px;
        background-color: ${colors.verde};
        color: ${colors.preto};
    }
`

export const FriendsSection = styled.div`
    button {
        width: 180px;
        height: 24px;
        margin-top: 38px;
        font-size: 18px;
        border: 1px solid ${colors.cinzaClaro};
        border-radius: 12px;
        background-color: ${colors.verde};
    }

    div {
        width: 180px;
        margin-top: 8px;
        margin-left: 32px;
        
        text-align: start;

        border-left: 2px solid ${colors.branco};
        
        p {
            color: ${colors.branco};
            border-bottom: 1px solid: ${colors.branco};

            span {
                color: ${colors.branco};
            }
        }
    }
`