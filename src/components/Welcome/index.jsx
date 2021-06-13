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
                    <a href="#about">
                        <ChevronWraper>
                            <Chevron />
                            <Chevron />
                            <Chevron />
                        </ChevronWraper>
                        <p style={{ color: "gray" }}>Scroll</p>
                    </a>
                </ContentCenter>
            </WelcomeContent>
        </WelcomeWrapper>
    );
}

export default WelCome;