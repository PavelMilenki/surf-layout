import React from 'react';
import arrowsRight from '../../images/arrows-right.svg';
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";

export const SliderItemInfo = ({title,backGroundImage}) => {
    return (
        <div className={'header__slider-item slider-item'} style={{backgroundImage: `url(${ backGroundImage })`}}>
            <div className={'slider-item__info'}>
                <div className={'slider-item__info-supTitle headLine-left'}>Surf</div>
                <Fade left duration={1500} delay={1000}>
                    <div className={'slider-item__info-title'}>{title}</div>
                </Fade>
                <div className={'slider-item__info-supText headLine-left'}>Condition</div>
                <Fade right duration={1500} delay={2000}>
                    <div className={'slider-item__info-text'}>Radical</div>
                </Fade>
                <Link to={'/'} className={'slider-item__info-link linkTo'}>
                    <img src={arrowsRight} alt=''/>
                </Link>
            </div>
        </div>
    )
};