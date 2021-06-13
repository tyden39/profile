import React from 'react';
import { BackgroundImage, BackgroundOverlay, Chevron, ChevronWraper, ContentCenter, WelcomeContent, WelcomeWrapper } from './styled';

function WelCome(props) {
    return (
        <WelcomeWrapper id="welcome">
            <BackgroundImage />
            <BackgroundOverlay />
            <WelcomeContent>
                <ContentCenter>
                    <h1>Welcome</h1>
                    <p>I'm a Web Developer.</p>
                    <p>from Binh Chanh, HCM city.</p>
                </ContentCenter>
                <ChevronWraper href="#about">
                    <Chevron />
                    <Chevron />
                    <Chevron />
                </ChevronWraper>
            </WelcomeContent>
        </WelcomeWrapper>
    );
}

export default WelCome;