import React from "react";
import {Dot} from "./Dot";
import Slider from "react-slick";


export const Dots = ({nav1, slider2}) => {

    const dots = [
        {id: 1, number: '01', name: 'North Shore'},
        {id: 2, number: '02', name: 'South Shore'},
        {id: 3, number: '03', name: 'West Shore '},
        {id: 4, number: '04', name: 'East Shore'}];

    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };

    return (
        <div className={'slider-dots'}>
            <Slider {...settings} >
                {dots.map((d) => {
                    return (
                        <Dot
                            key={d.id}
                            id={d.id}
                            number={d.number}
                            name={d.name}/>)
                })}
            </Slider>
        </div>
    )
};