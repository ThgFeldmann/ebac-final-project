import styled from "styled-components";
import { colors } from "../../../styles";

export const SpecialPostsContainer = styled.div`
    width: 350px;
    height: 650px;
    
    position: fixed;
    top: 35px;
    right: 50px;

`

export const SpecialPostsArea = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 35px;

    text-align: center;

    border: 2px solid ${colors.cinzaClaro};
    border-radius: 10px;

    background-color: ${colors.azulEscuro};

    h3 {
        color: ${colors.cinzaClaro}
    }
`