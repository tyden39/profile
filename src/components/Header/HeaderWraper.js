import styled, { css } from "styled-components";

export const HeaderWraper = styled.div`
    text-align: center;
    padding: 30px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    background: rgba(0, 0, 0, 0) /* Green background with 30% opacity */

    a {
        opacity: 1 ;
        color: white;
    }

    ${props => props.stickyOn && css`
        background-color: black;
        position: fixed;
        top: 0;
        opacity: 1;
    `}
`;