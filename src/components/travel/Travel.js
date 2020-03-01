import React from "react";
import './travel.scss'
import {Title} from "../assets/Title";
import {TravelSlider} from "./TravelSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {LeftArrow} from "../assets/LeftArrow";
import {RightArrow} from "../assets/RightArrow";

export const Travel = () => {
    return (
        <section className={'travel'}>
            <div className={'container'}>
                <Title title={'travel'}/>
                <div className={'travel__slider'}>
                    <Slider dots={false}
                            infinite={true}
                            fade={true}
                            speed={1500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            prevArrow={<LeftArrow/>}
                            nextArrow={<RightArrow/>}>
                        <TravelSlider/>
                        <TravelSlider/>
                        <TravelSlider/>
                        <TravelSlider/>
                        <TravelSlider/>
                        <TravelSlider/>
                        <TravelSlider/>
                        <TravelSlider/>
                    </Slider>
                </div>
            </div>
        </section>
    )
};