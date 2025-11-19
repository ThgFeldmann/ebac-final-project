import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles";

export const UserSection = styled.div`
    width: 200px;
    height: 100px;
    margin: 18px auto 0;

    h3 {
        margin: 0 auto -2px;
        font-size: 22px;
        font-weight: bold;
        color: ${colors.branco};
    }

    p {
        font-size: 16px;
        color: ${colors.branco};
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
        width: 65%;

        h3 {
            padding: 2px;
            font-size: 38px;
        }

        p {
            font-size: 30px;
        }
    }

    @media (max-width: 767px) {
        width: 65%;
    }
`