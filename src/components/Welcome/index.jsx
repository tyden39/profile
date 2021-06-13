import React from 'react';
import { BackgroundImage, BackgroundOverlay, ContentCenter, WelcomeContent, WelcomeWrapper } from './styled';

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
            </WelcomeContent>
        </WelcomeWrapper>
    );
}

export default WelCome;