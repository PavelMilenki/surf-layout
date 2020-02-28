import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {SliderItemInfo} from "./SliderItemInfo";
import {LeftArrow} from "./LeftArrow";
import {RightArrow} from "./RightArrow";

export const SliderItems = ({nav2, slider1}) => {

    const titles = [
        {
            id: 1,
            title: 'North Shore'
        },
        {
            id: 2,
            title: 'South Shore'
        },
        {
            id: 3,
            title: 'West Shore'
        },
        {
            id: 4,
            title: 'East Shore'
        }];


    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: <LeftArrow/>,
        nextArrow: <RightArrow/>
    };


    return (

        <Slider {...settings} >
            {titles.map((t) => {
                return (
                    <SliderItemInfo
                        key={t.id}
                        id={t.id}
                        title={t.title}/>)
            })}
        </Slider>
    )
};