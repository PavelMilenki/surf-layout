import React, {useEffect, useRef, useState} from 'react';
import '../../app.scss'
import {Aside} from "./Aside";
import {Map} from "./Map";
import arrowsDown from '../../images/arrows-down.svg'
import 'animate.css/animate.css'
import {LeftArrow} from "../assets/LeftArrow";
import {RightArrow} from "../assets/RightArrow";
import {SliderItemInfo} from "./SliderItemInfo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {Dot} from "./Dot";


export function Header() {

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

    const dots = [
        {id: 1, number: '01', name: 'North Shore'},
        {id: 2, number: '02', name: 'South Shore'},
        {id: 3, number: '03', name: 'West Shore '},
        {id: 4, number: '04', name: 'East Shore'}];

    return (
        <header className={'header'}>
            <div className={'header__title'}>
                go surf
            </div>
            <div className={'header__arrows'}>
                <a href="#" className={'animated fadeInDown infinite slow'}><img src={arrowsDown} alt='arrow'/></a>
            </div>
            <Map/>
            <Aside/>
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
                                title={t.title}/>)
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
                                <Dot
                                    key={d.id}
                                    id={d.id}
                                    number={d.number}
                                    name={d.name}/>)
                        })}
                    </Slider>
                </div>
            </div>
        </header>
    )
}