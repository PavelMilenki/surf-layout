import React from 'react';
import arrowsRight from '../../images/arrows-right.svg';
import surfIcon from '../../images/surf-icon.svg';
import waterIcon from '../../images/water-icon.svg';
import windIcon from '../../images/wind-icon.svg';
import {Zoom} from "react-reveal";
import {Link} from "react-scroll";



export const SliderDot = ({classForDot}) => {
    return (
        <div className={`slider-dots ${classForDot}`}>
            <div className={'slider-dots__circle'}></div>
            <Zoom bottom duration={2000} delay={2800}>
                <div className={'slider-dots__content'}>
                    <div className={'slider-dots__content-row'}>
                        <div className={'slider-dots__content-head'}>
                            <div className={'slider-dots__content-title'}>Airlie Beach</div>
                            <div className={'slider-dots__content-subtitle'}>Australia</div>
                        </div>
                        <Link className={'slider-dots__content-link linkTo'} to={'/'}>
                            <img src={arrowsRight} alt="arrow"/>
                        </Link>
                    </div>
                    <div className={'slider-dots__content-row'}>
                        <div className={'slider-dots__content-item'}>
                            <img src={surfIcon} alt="surf"/>
                            <div className={'slider-dots__content-number'}>9 - 13</div>
                            <div className={'slider-dots__content-name'}>Surf (FT)</div>
                        </div>
                        <div className={'slider-dots__content-item'}>
                            <img src={waterIcon} alt="water"/>
                            <div className={'slider-dots__content-number'}>+2.3</div>
                            <div className={'slider-dots__content-name'}>Tide (FT)</div>
                        </div>
                        <div className={'slider-dots__content-item'}>
                            <img src={windIcon} alt="wind"/>
                            <div className={'slider-dots__content-number'}>4 SE</div>
                            <div className={'slider-dots__content-name'}>Wind (KTS)</div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    )
};