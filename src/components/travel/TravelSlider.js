import React from "react";
import '../../app.scss'
import sliderBg from "../../images/travel-slider-bg.png";
import virginAir from "../../images/virgin.png";
import aviaLogo from "../../images/avia-logo.svg";
import {InfoItem} from "./InfoItem";


export const TravelSlider = () => {
    return (
        <div className={'holder__slider-item travel-slider'}>
            <div className={'holder-slider__head'}
                 style={{backgroundImage: `url(${sliderBg})`}}>
                <div className={'holder-slider__subtitle'}>
                    <div className={'subtitle'}>
                        <div className={'headLine-left'}>Shore</div>
                        <div className={'subtitle__head'}>
                            Airlie Beach <span>|</span> Australia
                        </div>
                    </div>
                </div>
            </div>
            <div className={'holder-slider__descr'}
                 style={{backgroundImage: `url(${virginAir})`}}>
                <div className={'descr'}>
                    <div className="headline-right">Airline</div>
                    <div className="descr__head">Virgin Australia
                        <img src={aviaLogo} alt={'logo'}/></div>
                </div>
            </div>
            <div className="holder-slider__info">
                <InfoItem subTitle={'Destination'}
                          infoTitle={'Queensland'}
                          infoTitleSecond={'Australia'}/>
                <InfoItem subTitle={'Distance'}
                          infoTitle={'7,065 Miles'}/>
                <InfoItem subTitle={'Travel Time'}
                          infoTitle={'23 Hours'}
                          infoTitleSecond={'5 Minutes'}/>
                <InfoItem subTitle={'Pricing'}
                          infoTitle={'$1,976 USD'}
                          supTitle={'Round Trip'}/>
            </div>
            <div className={'holder-slider__btn'}>
                <a className={'btn'} href="#">
                    Book <span>Flight</span>
                </a>
            </div>
        </div>

    )
};