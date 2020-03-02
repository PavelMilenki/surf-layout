import React, {useEffect, useRef, useState} from "react";
import '../../app.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {SliderDot} from "./SliderDot";
import {LeftArrow} from "../assets/LeftArrow";
import {RightArrow} from "../assets/RightArrow";
import {Sliders} from "./Sliders";
import {Title} from "../assets/Title";


export const Surf = () => {

    const [state, setState] = useState({nav1: null, nav2: null});
    const slider1 = useRef();
    const slider2 = useRef();

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        });
    }, []);

    const {nav1, nav2} = state;

    const sliders = [
        {id: 1, slider: 'slider1', title: 'Malibu Beach', location: 'California', country: 'USA'},
        {id: 2, slider: 'slider2', title: 'Airlie Beach', location: 'Queensland', country: 'Australia'},
        {id: 3, slider: 'slider3', title: 'Cloud Nine', location: 'Siargao', country: 'Philippines'},
        {id: 4, slider: 'slider4', title: 'Vieux Boucau', location: 'Hossegor', country: 'France'},
        {id: 5, slider: 'slider1', title: 'Malibu Beach', location: 'California', country: 'USA'},
        {id: 6, slider: 'slider2', title: 'Airlie Beach', location: 'Queensland', country: 'Australia'},
        {id: 7, slider: 'slider3', title: 'Cloud Nine', location: 'Siargao', country: 'Philippines'},
        {id: 8, slider: 'slider4', title: 'Vieux Boucau', location: 'Hossegor', country: 'France'},
    ];


    return (
        <section className={'serf'}>
            <Title title={'surf'}/>
            <div className={'serf__subtitle'}>
                <div className={'subtitle'}>
                    <div className={'headLine-left'}>Current location</div>
                    <div className={'subtitle__head'}>California <span>|</span> USA</div>
                </div>
            </div>
            <div className={'slider-map'}>
                <Slider dots={false}
                        slidesToShow={8}
                        slidesToScroll={1}
                        arrows={false}
                        focusOnSelect={true}
                        asNavFor={nav2}
                        ref={slider => (slider1.current = slider)}>
                    <SliderDot classForDot={'slider-dot1'}/>
                    <SliderDot classForDot={'slider-dot2'}/>
                    <SliderDot classForDot={'slider-dot3'}/>
                    <SliderDot classForDot={'slider-dot4'}/>
                    <SliderDot classForDot={'slider-dot5'}/>
                    <SliderDot classForDot={'slider-dot6'}/>
                    <SliderDot classForDot={'slider-dot7'}/>
                    <SliderDot classForDot={'slider-dot8'}/>
                </Slider>
            </div>
            <div className={'serf-slider'}>
                <Slider dots={false}
                        infinite={true}
                        speed={1500}
                        slidesToShow={4}
                        slidesToScroll={1}
                        prevArrow={<LeftArrow/>}
                        nextArrow={<RightArrow/>}
                        asNavFor={nav1}
                        ref={slider => (slider2.current = slider)}>
                    {sliders.map((s) => {
                        return (
                            <Sliders
                                key={s.id}
                                id={s.id}
                                slider={s.slider}
                                title={s.title}
                                location={s.location}
                                country={s.country}/>)
                    })}
                </Slider>
            </div>
        </section>
    )
};