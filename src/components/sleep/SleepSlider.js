import React from 'react';
import {InfoItem} from './InfoItem';
import sliderBg from '../../images/sleep-slider-bg.png';
import hammock from '../../images/hammock.png';
import stars from '../../images/star.svg';
import Fade from "react-reveal/Fade";
import {Zoom} from "react-reveal";
import {Link} from "react-scroll";

export const SleepSlider = ({guests, nights, setNights, setGuests}) => {
    return (
        <div className={'holder__slider-item travel-slider'}>
            <div className={'holder-slider__head'}
                 style={{backgroundImage: `url(${sliderBg})`}}>
                <div className={'holder-slider__subtitle'}>

                    <div className={'subtitle'}>
                        <Fade right duration={1500}>
                            <div className={'headLine-left'}>Resorts</div>
                        </Fade>
                        <Fade right duration={1500} delay={1000}>
                            <div className={'subtitle__head'}>
                                Auberge <span>|</span> Australia
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>
            <Fade bottom duration={1500}>
                <div className={'holder-slider__descr'}
                     style={{backgroundImage: `url(${hammock})`}}>
                    <div className={'descr'}>
                        <div className={'headline-right'}>Rating</div>
                        <div className={'descr__head descr__head-sleep'}>Excellent
                            <Zoom bottom duration={3000} delay={900}>
                                <ul className={'holder__star-list star-list'}>
                                    <li><img src={stars} alt={'logo'}/></li>
                                    <li><img src={stars} alt={'logo'}/></li>
                                    <li><img src={stars} alt={'logo'}/></li>
                                    <li><img src={stars} alt={'logo'}/></li>
                                    <li><img src={stars} alt={'logo'}/></li>
                                </ul>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </Fade>
            <div className="holder-slider__info">
                <Fade bottom duration={1500} delay={300}>
                    <InfoItem subTitle={'Resort'}
                              infoTitle={'Auberge'}
                              infoTitleSecond={'Australia'}/>
                </Fade>
                <Fade bottom duration={1500} delay={600}>
                    <InfoItem subTitle={'# of Nights'}
                              infoTitle={'Nights'}
                              isNumber={true}
                              number={nights}
                              setNumber={setNights}/>
                </Fade>
                <Fade bottom duration={1500} delay={900}>
                    <InfoItem subTitle={'# of Guests'}
                              infoTitle={'Guests'}
                              infoTitleSecond={''}
                              isNumber={true}
                              number={guests}
                              setNumber={setGuests}/>
                </Fade>
                <Fade bottom duration={1500} delay={1200}>
                    <InfoItem subTitle={'Pricing'}
                              infoTitle={`$ ${nights * 55 + (guests - 1) * 25} USD`}
                              supTitle={'Per Night'}/>
                </Fade>
            </div>
            <Fade bottom duration={1500} delay={1200}>
            <div className={'holder-slider__btn'}>
                <Link className={'btn linkTo'} to={'/'}>
                    Book <span>Stay</span>
                </Link>
            </div>
            </Fade>
        </div>
    )
};