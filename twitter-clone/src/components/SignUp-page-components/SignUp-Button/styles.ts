import styled from "styled-components";
import { colors } from "../../../styles";

export const SignUpButtonStyles = styled.button`
    display: block;
    width: 400px;
    height: 38px;
    margin: 0 auto;
    
    background-color: ${colors.verdeClaro};
    color: ${colors.preto};
    
    border: 2px solid ${colors.preto};
    border-radius: 12px;

    font-size: 30px;
    font-weight: bold;
`