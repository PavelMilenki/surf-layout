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
                            speed={1500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            prevArrow={<LeftArrow/>}
                            nextArrow={<RightArrow/>}>
                        <TravelSlider slider={slider1}/>
                        <TravelSlider slider={slider2}/>
                        <TravelSlider slider={slider3}/>
                        <TravelSlider slider={slider4}/>
                        <TravelSlider slider={slider5}/>
                        <TravelSlider slider={slider6}/>
                        <TravelSlider slider={slider7}/>
                        <TravelSlider slider={slider8}/>
                    </Slider>
                </div>
            </div>
        </section>
    )
};