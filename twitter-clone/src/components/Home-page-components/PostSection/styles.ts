import styled from "styled-components";
import { colors } from "../../../styles";

export const PostSectionContainer = styled.div`
    width: 650px;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    margin: 0 auto;

    // overflow-y: hidden;
    // scrollbar-gutter: stable both-edges;

    border-left: 2px solid ${colors.cinzaClaro};
    border-right: 2px solid ${colors.cinzaClaro};


    h4 {
        text-align: center;
        color: ${colors.branco};
    }

    // &: :-webkit-scrollbar {
    //     width: 12px;
    // }

    // &: :-webkit-scrollbar-track {
    //     -webkit-box-shadow: inset 0 0 6px ${colors.branco};
    //     border-radius: 10px;
    // }

    // &: :-webkit-scrollbar-thumb {
    //     -webkit-box-shadow: inset 0 0 6px ${colors.cinzaClaro};
    //     border-radius: 10px;
    // }

    // &:hover {
    //     overflow-y: auto;
    // }
`