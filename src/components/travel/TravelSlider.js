import React from "react";
import '../../app.scss'
import virginAir from "../../images/virgin.png";
import aviaLogo from "../../images/avia-logo.svg";
import {InfoItem} from "./InfoItem";
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";


export const TravelSlider = ({slider}) => {
    return (
        <div className={'holder__slider-item travel-slider'}>
            <div className={'holder-slider__head'}
                 style={{backgroundImage: `url(${slider})`}}>
                <div className={'holder-slider__subtitle'}>
                    <div className={'subtitle'}>
                        <Fade right duration={1500}>
                            <div className={'headLine-left'}>Shore</div>
                        </Fade>
                        <Fade right duration={1500} delay={1000}>
                            <div className={'subtitle__head'}>
                                Airlie Beach <span>|</span> Australia
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <Fade bottom duration={1500}>
                <div className={'holder-slider__descr'}
                     style={{backgroundImage: `url(${virginAir})`}}>
                    <div className={'descr'}>
                        <div className="headline-right">Airline</div>
                        <div className="descr__head">Virgin Australia
                            <img src={aviaLogo} alt={'logo'}/></div>
                    </div>
                </div>
            </Fade>
            <div className="holder-slider__info">
                <Fade bottom duration={1500} delay={300}>
                    <InfoItem subTitle={'Destination'}
                              infoTitle={'Queensland'}
                              infoTitleSecond={'Australia'}/>
                </Fade>
                <Fade bottom duration={1500} delay={600}>
                    <InfoItem subTitle={'Distance'}
                              infoTitle={'7,065 Miles'}/>
                </Fade>
                <Fade bottom duration={1500} delay={900}>
                    <InfoItem subTitle={'Travel Time'}
                              infoTitle={'23 Hours'}
                              infoTitleSecond={'5 Minutes'}/>
                </Fade>
                <Fade bottom duration={1500} delay={1200}>
                    <InfoItem subTitle={'Pricing'}
                              infoTitle={'$1,976 USD'}
                              supTitle={'Round Trip'}/>
                </Fade>
            </div>
            <Fade bottom duration={1500} delay={1200}>
                <div className={'holder-slider__btn'}>
                    <Link to={'/'} className={'btn linkTo'}>
                        Book <span>Flight</span>
                    </Link>
                </div>
            </Fade>
        </div>

    )
};