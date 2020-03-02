import React from 'react';
import {InfoItem} from './InfoItem';
import sliderBg from '../../images/sleep-slider-bg.png';
import hammock from '../../images/hammock.png';
import stars from '../../images/star.svg';


export const SleepSlider = ({guests, nights, setNights, setGuests}) => {
    return (
        <div className={'holder__slider-item travel-slider'}>
            <div className={'holder-slider__head'}
                 style={{backgroundImage: `url(${sliderBg})`}}>
                <div className={'holder-slider__subtitle'}>
                    <div className={'subtitle'}>
                        <div className={'headLine-left'}>Resorts</div>
                        <div className={'subtitle__head'}>
                            Auberge <span>|</span> Australia
                        </div>
                    </div>
                </div>
            </div>
            <div className={'holder-slider__descr'}
                 style={{backgroundImage: `url(${hammock})`}}>
                <div className={'descr'}>
                    <div className={'headline-right'}>Rating</div>
                    <div className={'descr__head descr__head-sleep'}>Excellent
                        <ul className={'holder__star-list star-list'}>
                            <li><img src={stars} alt={'logo'}/></li>
                            <li><img src={stars} alt={'logo'}/></li>
                            <li><img src={stars} alt={'logo'}/></li>
                            <li><img src={stars} alt={'logo'}/></li>
                            <li><img src={stars} alt={'logo'}/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="holder-slider__info">
                <InfoItem subTitle={'Resort'}
                          infoTitle={'Auberge'}
                          infoTitleSecond={'Australia'}/>
                <InfoItem subTitle={'# of Nights'}
                          infoTitle={'Nights'}
                          isNumber={true}
                          number={nights}
                          setNumber={setNights}/>
                <InfoItem subTitle={'# of Guests'}
                          infoTitle={'Guests'}
                          infoTitleSecond={''}
                          isNumber={true}
                          number={guests}
                          setNumber={setGuests}/>
                <InfoItem subTitle={'Pricing'}
                          infoTitle={`$ ${nights * 55 + (guests - 1) * 25} USD`}
                          supTitle={'Per Night'}/>
            </div>
            <div className={'holder-slider__btn'}>
                <a className={'btn'} href="#">
                    Book <span>Stay</span>
                </a>
            </div>
        </div>
    )
};