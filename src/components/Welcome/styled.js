import styled from "styled-components";
import background from "./background.jpg";

export const WelcomeWrapper = styled.div`
    position: relative;
    height: 100%;
`;

export const Background = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;`;

export const BackgroundImage = styled(Background)`
    background: url(${background}) no-repeat fixed center 0px;
    background-size: cover;`;

export const BackgroundOverlay = styled(Background)`
    background-color: black;
    opacity: .5;`;

export const WelcomeContent = styled.div`
    position: relative;
    z-index: 1;
    color: white;
    height: 100%;
    padding: 81px 0;`;

export const ContentCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);`;
