import styled from "styled-components";
import { colors } from "../../../styles";

export const ButtonContainer = styled.div`
    a.CreateUserButton {
        display: block;
        width: 400px;
        height: 38px;
        margin: 0 auto;
        
        border: 2px solid ${colors.preto};
        border-radius: 12px;
        
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: ${colors.preto};

        background-color: ${colors.verdeClaro};
    }

    a.GoBackButton {
        padding: 4px;
    
        position: absolute;
        top: 32px;
        left: 32px;
    
        border: 2px solid ${colors.preto};
        border-radius: 12px;
    
        font-size: 20px;
        font-weight: bold;
    
        background-color: ${colors.vermelho};
    }
`