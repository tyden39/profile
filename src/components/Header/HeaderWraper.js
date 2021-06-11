import styled, { css } from "styled-components";

export const HeaderWraper = styled.div`
    background-color: black;
    padding: 30px;

    ${props => props.stickyOn && css`
        position: fixed;
        top: 0;
        width: 100%;

        + #welcome {
            padding-top: 81px;
        }
    `}
`;