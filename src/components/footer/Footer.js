import React from 'react';
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";

export const Footer = () => {
    return (
        <footer className={'footer'}>
            <Fade bottom duration={1500} delay={1000}>
                <Link to={'/'} className={'btn linkTo'} >
                    go<span>Surf</span>
                </Link>
            </Fade>
            <div className={'footer__copy'}>
                © Go-Surf 2020. All Rights Reserved.
            </div>
        </footer>
    )
};