import React, { useEffect, useState } from 'react';
import { HeaderWraper } from './HeaderWraper';
import { MenuItem } from './MenuIcon';

function Header(props) {
    const [stickyOn, setStickyOn] = useState(false);

    useEffect(() => {
        const searchElement = document.getElementById("header");
        const searchPosition = searchElement.offsetTop;

        const handleScrollDown = () => {
            if (window.pageYOffset > searchPosition) {
                searchElement.classList.add("sticky");
                setStickyOn(true);
            } else {
                searchElement.classList.remove("sticky");
                setStickyOn(false);
            }
        }

        window.addEventListener('scroll', handleScrollDown);
        return () => window.removeEventListener('scroll', handleScrollDown);
    }, []);

    return (
        <HeaderWraper id="header" stickyOn={stickyOn}>
            <MenuItem href="#welcome">Welcome</MenuItem>
            <MenuItem href="#about">About</MenuItem>
            <MenuItem href="#myskill">My Skills</MenuItem>
            <MenuItem href="#contact">Contact</MenuItem>
        </HeaderWraper>
    );
}

export default Header;