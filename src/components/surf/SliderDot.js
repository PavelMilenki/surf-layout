import React from 'react';
import arrowsRight from '../../images/arrows-right.svg';
import surfIcon from '../../images/surf-icon.svg';
import waterIcon from '../../images/water-icon.svg';
import windIcon from '../../images/wind-icon.svg';
import {Link} from "react-scroll";


export const SliderDot = ({classForDot, title, subTitle, surf, tide, wind}) => {
    return (
        <div className={`slider-dots ${classForDot}`}>
            <div className={'slider-dots__circle'}></div>
            <div className={'slider-dots__content'}>
                <div className={'slider-dots__content-row'}>
                    <div className={'slider-dots__content-head'}>
                        <div className={'slider-dots__content-title'}>{title}</div>
                        <div className={'slider-dots__content-subtitle'}>{subTitle}</div>
                    </div>
                    <Link className={'slider-dots__content-link linkTo'} to={'/'}>
                        <img src={arrowsRight} alt="arrow"/>
                    </Link>
                </div>
                <div className={'slider-dots__content-row'}>
                    <div className={'slider-dots__content-item'}>
                        <img src={surfIcon} alt="surf"/>
                        <div className={'slider-dots__content-number'}>{surf}</div>
                        <div className={'slider-dots__content-name'}>Surf (FT)</div>
                    </div>
                    <div className={'slider-dots__content-item'}>
                        <img src={waterIcon} alt="water"/>
                        <div className={'slider-dots__content-number'}>{tide}</div>
                        <div className={'slider-dots__content-name'}>Tide (FT)</div>
                    </div>
                    <div className={'slider-dots__content-item'}>
                        <img src={windIcon} alt="wind"/>
                        <div className={'slider-dots__content-number'}>{wind}</div>
                        <div className={'slider-dots__content-name'}>Wind (KTS)</div>
                    </div>
                </div>
            </div>

        </div>
    )
};
