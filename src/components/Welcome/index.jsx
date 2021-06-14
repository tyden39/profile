import React, { useEffect } from 'react';
import { useState } from 'react';
import { BackgroundImage, BackgroundOverlay, Chevron, ChevronWraper, ContentCenter, TypedCursur, WelcomeContent, WelcomeWrapper } from './styled';

function WelCome(props) {
    const [text, setText] = useState("");
    const [blink, setBlink] = useState(false);

    useEffect(() => {

        const textArray = [
            "I'm Nguyen Tan Duc.",
            "I'm a Developer.",
            "I Love to Develop."
        ];

        let timeout = 0;

        const typeWriter = () => {

            for (let i = 0; i < textArray.length; i++) {
                for (let j = 0; j <= textArray[i].length; j++) {
                    timeout += 200;
                    const fullText = textArray[i];
                    setTimeout(() => {
                        const currText = fullText.substring(0, j);
                        setText(currText);
                        if (j === fullText.length - 1) {
                            setBlink(true);
                        };
                    }, timeout);
                }
                timeout += 500;
                for (let j = 0; j <= textArray[i].length; j++) {
                    timeout += 100;
                    const fullText = textArray[i];
                    setTimeout(() => {
                        const currText = fullText.substring(0, fullText.length - j);
                        setText(currText);
                        setBlink(false);
                    }, timeout);
                }
            };

            setTimeout(() => {
                timeout = 0;
                typeWriter();
            }, timeout);
        }

        typeWriter();

    }, []);

    return (
        <WelcomeWrapper id="welcome">
            <BackgroundImage />
            <BackgroundOverlay />
            <WelcomeContent>
                <ContentCenter>
                    <h2>Welcome</h2>
                    <p style={{ fontSize: "72px", minHeight: "115px" }}>{text}<TypedCursur blink={blink}>|</TypedCursur></p>
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