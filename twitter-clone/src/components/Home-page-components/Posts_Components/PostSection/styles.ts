import styled from "styled-components";
import { colors } from "../../../../styles";

export const PostSectionContainer = styled.div`
    width: 650px;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    margin: 0 auto;
    padding-top: 8px;

    border-left: 2px solid ${colors.cinzaClaro};
    border-right: 2px solid ${colors.cinzaClaro};
`