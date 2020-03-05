import React from 'react';
import {Title} from '../assets/Title';
import {TravelSlider} from './TravelSlider';
import {LeftArrow} from '../assets/LeftArrow';
import {RightArrow} from '../assets/RightArrow';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import slider1 from "../../images/travel-slider-1.png";
import slider2 from "../../images/travel-slider-2.png";
import slider3 from "../../images/travel-slider-3.png";
import slider4 from "../../images/travel-slider-4.png";
import slider5 from "../../images/travel-slider-5.png";
import slider6 from "../../images/travel-slider-6.png";
import slider7 from "../../images/travel-slider-7.png";
import slider8 from "../../images/travel-slider-8.png";


export const Travel = () => {
    return (
        <section className={'holder'} id={'travel'}>
            <div className={'container'}>
                <Title title={'travel'}/>
                <div className={'holder__slider'}>
                    <Slider dots={false}
                            infinite={true}
                            fade={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                            prevArrow={<LeftArrow/>}
                            nextArrow={<RightArrow/>}>
                        <TravelSlider slider={slider1}
                                      country={'USA'}
                                      town={'Hawaii'}
                                      beach={'Oahu Beach'}
                                      distance={'2,479 Miles'}
                                      hours={'1 Hour'}
                                      minutes={'35 Minutes'}
                                      price={'$490 USD'}/>
                        <TravelSlider slider={slider2}
                                      country={'USA'}
                                      town={'California'}
                                      beach={'Malibu Beach'}
                                      distance={'150 Miles'}
                                      hours={'1 Hour'}
                                      minutes={'5 Minutes'}
                                      price={'$150 USD'}/>
                        <TravelSlider slider={slider3}
                                      country={'Cuba'}
                                      town={'Havana'}
                                      beach={'La Setenta'}
                                      distance={'2,600 Miles'}
                                      hours={'5 Hours'}
                                      minutes={'25 Minutes'}
                                      price={'$625 USD'}/>
                        <TravelSlider slider={slider4}
                                      country={'Brazil'}
                                      town={'Rio de Janeiro'}
                                      beach={'Barra da Tijuca'}
                                      distance={'5,480 Miles'}
                                      hours={'14 Hours'}
                                      minutes={'5 Minutes'}
                                      price={'$925 USD'}/>
                        <TravelSlider slider={slider5}
                                      country={'France'}
                                      town={'Hossegor'}
                                      beach={'Vieux Boucau'}
                                      distance={'5,765 Miles'}
                                      hours={'10 Hours'}
                                      minutes={'25 Minutes'}
                                      price={'$985 USD'}/>
                        <TravelSlider slider={slider6}
                                      country={'South Africa'}
                                      town={'Cape Town'}
                                      beach={'Durban'}
                                      distance={'10,165 Miles'}
                                      hours={'22 Hours'}
                                      minutes={'50 Minutes'}
                                      price={'$2,135 USD'}/>
                        <TravelSlider slider={slider7}
                                      country={'Philippines'}
                                      town={'Siargao'}
                                      beach={'Cloud Nine'}
                                      distance={'7,332 Miles'}
                                      hours={'18 Hours'}
                                      minutes={'55 Minutes'}
                                      price={'$1,877 USD'}/>
                        <TravelSlider slider={slider8}
                                      country={'Australia'}
                                      town={'Queensland'}
                                      beach={'Airlie Beach'}
                                      distance={'7,065 Miles'}
                                      hours={'23 Hours'}
                                      minutes={'5 Minutes'}
                                      price={'$1,976 USD'}/>
                    </Slider>
                </div>
            </div>
        </section>
    )
};