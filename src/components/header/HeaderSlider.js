import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import {LeftArrow} from "../assets/LeftArrow";
import {RightArrow} from "../assets/RightArrow";
import {SliderItemInfo} from "./SliderItemInfo";
import {Dot} from "./Dot";
import Fade from "react-reveal/Fade";
import backGroundImageHeaderOne from '../../images/backGroundImageHeaderOne.jpg'
import backGroundImageHeaderTwo from '../../images/backGroundImageHeaderTwo.jpg'
import backGroundImageHeaderThree from '../../images/backGroundImageHeaderThree.jpg'
import backGroundImageHeaderFour from '../../images/backGroundImageHeaderFour.jpg'

export const HeaderSlider = () => {

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

    const titles = [
        {
            id: 1,
            title: 'North Shore',
            backGroundImage:backGroundImageHeaderOne
        },
        {
            id: 2,
            title: 'South Shore',
            backGroundImage:backGroundImageHeaderTwo
        },
        {
            id: 3,
            title: 'West Shore',
            backGroundImage:backGroundImageHeaderThree
        },
        {
            id: 4,
            title: 'East Shore',
            backGroundImage:backGroundImageHeaderFour
        }];

    const dots = [
        {id: 1, number: '01', name: 'North Shore'},
        {id: 2, number: '02', name: 'South Shore'},
        {id: 3, number: '03', name: 'West Shore '},
        {id: 4, number: '04', name: 'East Shore'}];
    return (
        <div className={'header__slider'}>
            <Slider dots={false}
                    fade={true}
                    infinite={true}
                    speed={1000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    prevArrow={<LeftArrow/>}
                    nextArrow={<RightArrow/>}
                    asNavFor={nav2}
                    ref={slider => (slider1.current = slider)}>
                {titles.map((t) => {
                    return (
                        <SliderItemInfo
                            key={t.id}
                            id={t.id}
                            title={t.title}
                            backGroundImage={t.backGroundImage}/>)
                })}
            </Slider>
            <div className={'slider-dotshead'}>
                <Slider dots={false}
                        slidesToShow={4}
                        slidesToScroll={4}
                        adaptiveHeight={true}
                        focusOnSelect={true}
                        asNavFor={nav1}
                        ref={slider => (slider2.current = slider)}>
                    {dots.map((d) => {
                        return (
                            <Fade bottom duration={1500} delay={3000} key={d.id}>
                                <Dot
                                    key={d.id}
                                    id={d.id}
                                    number={d.number}
                                    name={d.name}/>
                            </Fade>)
                    })}
                </Slider>
            </div>
        </div>
    )
};