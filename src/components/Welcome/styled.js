import styled, { css, keyframes } from "styled-components";
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
    padding: 61px 0;
    text-align: center;`;

export const ContentCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);`;

export const ChevronWraper = styled.a`
    position: absolute;
    bottom: 15px;
    left: 50%;
    margin-left: -17px;
    height: 70px;
    width: 34px;
    `;

const base = .6;

const moveChevron = keyframes`
    25% {
        opacity: 1;
        }
    33.3% {
        opacity: 1;
        transform: translateY(${base * 3.8}rem);
    }
    66.6% {
        opacity: 1;
        transform: translateY(${base * 5.2}rem);
    }
    100% {
        opacity: 0;
        transform: translateY(${base * 8}rem) scale(0.5);
    }
`;

export const Chevron = styled.div`
    position: absolute;
    width: ${base * 3.5}rem;
    height: ${base * 0.8}rem;
    opacity: 0;
    transform: scale(0.3);
    animation: ${moveChevron} 3s ease-out infinite;

    &:first-child {
        animation: ${moveChevron} 3s ease-out 1s infinite;
    }
  
    &:nth-child(2) {
        animation: ${moveChevron} 3s ease-out 2s infinite;
    }
  
    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 0;
        height: 100%;
        width: 50%;
        background: #2c3e50;
    }
  
    &:before {
        left: 0;
        transform: skewY(30deg);
    }
  
    &:after {
        right: 0;
        width: 50%;
        transform: skewY(-30deg);
    }
`;

const blinkCaret = keyframes`
    from { opacity: 1 }
    to { opacity: 0}
`;

export const TypedCursur = styled.span`
    font-weight: bold;
    font-size: 80px;
    ${props => props.blink && css`
        animation: ${blinkCaret} .75s infinite;`
    }
`;