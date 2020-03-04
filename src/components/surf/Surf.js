import React, {useEffect, useRef, useState} from 'react';
import {SliderDot} from './SliderDot';
import {LeftArrow} from '../assets/LeftArrow';
import {RightArrow} from '../assets/RightArrow';
import {Sliders} from './Sliders';
import {Title} from '../assets/Title';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Fade from "react-reveal/Fade";
import {Zoom} from "react-reveal";


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

    // const sliders = [
    //     {id: 1, slider: 'slider1', title: 'Malibu Beach', location: 'California', country: 'USA'},
    //     {id: 2, slider: 'slider2', title: 'Airlie Beach', location: 'Queensland', country: 'Australia'},
    //     {id: 3, slider: 'slider3', title: 'Cloud Nine', location: 'Siargao', country: 'Philippines'},
    //     {id: 4, slider: 'slider4', title: 'Vieux Boucau', location: 'Hossegor', country: 'France'},
    //     {id: 5, slider: 'slider1', title: 'Malibu Beach', location: 'California', country: 'USA'},
    //     {id: 6, slider: 'slider2', title: 'Airlie Beach', location: 'Queensland', country: 'Australia'},
    //     {id: 7, slider: 'slider3', title: 'Cloud Nine', location: 'Siargao', country: 'Philippines'},
    //     {id: 8, slider: 'slider4', title: 'Vieux Boucau', location: 'Hossegor', country: 'France'},
    // ];


    return (
        <section className={'serf'} id={'surf'}>
            <Title title={'surf'}/>
            <div className={'serf__subtitle'}>
                <div className={'subtitle'}>
                    <Fade right duration={1500}>
                        <div className={'headLine-left'}>Current location</div>
                    </Fade>
                    <Fade right duration={1500} delay={1000}>
                        <div className={'subtitle__head'}>California <span>|</span> USA</div>
                    </Fade>

                </div>
            </div>
            <Zoom bottom duration={2000} dalay={1000}>
                <div className={'slider-map'}>
                    <Slider dots={false}
                            slidesToShow={8}
                            slidesToScroll={1}
                            speed={1000}
                            arrows={false}
                            focusOnSelect={true}
                            asNavFor={nav2}
                            ref={slider => (slider1.current = slider)}
                            responsive={[
                                {
                                    breakpoint: 1103,
                                    settings: {
                                        slidesToShow: 3,
                                    }
                                },
                                {
                                    breakpoint: 900,
                                    settings: {
                                        slidesToShow: 2,
                                        centerMode: true
                                    }
                                },
                                {
                                    breakpoint: 720,
                                    settings: {
                                        slidesToShow: 1,
                                        centerMode: true
                                    }
                                },
                                {
                                    breakpoint: 100,
                                    settings: 'unslick'
                                }
                            ]}>
                        <Zoom bottom duration={2000} delay={1200}>
                            <SliderDot classForDot={'slider-dot1'}/>
                        </Zoom>
                        <Zoom bottom duration={2000} delay={1400}>
                            <SliderDot classForDot={'slider-dot2'}/>
                        </Zoom>
                        <Zoom bottom duration={2000} delay={1600}>
                            <SliderDot classForDot={'slider-dot3'}/>
                        </Zoom>
                        <Zoom bottom duration={2000} delay={1800}>
                            <SliderDot classForDot={'slider-dot4'}/>
                        </Zoom>
                        <Zoom bottom duration={2000} delay={2000}>
                            <SliderDot classForDot={'slider-dot5'}/>
                        </Zoom>
                        <Zoom bottom duration={2000} delay={2200}>
                            <SliderDot classForDot={'slider-dot6'}/>
                        </Zoom>
                        <Zoom bottom duration={2000} delay={2400}>
                            <SliderDot classForDot={'slider-dot7'}/>
                        </Zoom>
                        <Zoom bottom duration={2000} delay={2600}>
                            <SliderDot classForDot={'slider-dot8'}/>
                        </Zoom>

                    </Slider>
                </div>
            </Zoom>
            <div className={'serf-slider'}>
                <Slider dots={false}
                        infinite={true}
                        speed={1000}
                        slidesToShow={4}
                        slidesToScroll={1}
                        prevArrow={<LeftArrow/>}
                        nextArrow={<RightArrow/>}
                        asNavFor={nav1}
                        ref={slider => (slider2.current = slider)}
                        responsive={[
                            {
                                breakpoint: 1210,
                                settings: {
                                    slidesToShow: 3
                                }

                            },
                            {
                                breakpoint: 900,
                                settings: {
                                    slidesToShow: 2
                                }

                            },
                            {
                                breakpoint: 720,
                                settings: {
                                    slidesToShow: 1,
                                    centerMode: true
                                }
                            },
                            {
                                breakpoint: 426,
                                settings: {
                                    slidesToShow: 1,
                                    centerMode: false
                                }
                            }
                        ]}>
                    <Fade bottom duration={1500} delay={300}>
                        <Sliders
                            slider={'slider1'}
                            title={'Malibu Beach'}
                            location={'California'}
                            country={'USA'}/>
                    </Fade>
                    <Fade bottom duration={1500} delay={600}>
                        <Sliders
                            slider={'slider2'}
                            title={'Airlie Beach'}
                            location={'Queensland'}
                            country={'Australia'}/>
                    </Fade>
                    <Fade bottom duration={1500} delay={900}>
                        <Sliders
                            slider={'slider3'}
                            title={'Cloud Nine'}
                            location={'Siargao'}
                            country={'Philippines'}/>
                    </Fade>
                    <Fade bottom duration={1500} delay={1200}>
                        <Sliders
                            slider={'slider4'}
                            title={'Vieux Boucau'}
                            location={'Hossegor'}
                            country={'France'}/>
                    </Fade>
                    <Sliders
                        slider={'slider5'}
                        title={'Malibu Beach'}
                        location={'California'}
                        country={'USA'}/>
                    <Sliders
                        slider={'slider6'}
                        title={'Airlie Beach'}
                        location={'Queensland'}
                        country={'Australia'}/>
                    <Sliders
                        slider={'slider7'}
                        title={'Cloud Nine'}
                        location={'Siargao'}
                        country={'Philippines'}/>
                    <Sliders
                        slider={'slider8'}
                        title={'Vieux Boucau'}
                        location={'Hossegor'}
                        country={'France'}/>

                    {/*{sliders.map((s) => {*/}
                    {/*    return (*/}
                    {/*        <Fade bottom duration={1500} delay={500}>*/}
                    {/*            <Sliders*/}
                    {/*                key={s.id}*/}
                    {/*                id={s.id}*/}
                    {/*                slider={s.slider}*/}
                    {/*                title={s.title}*/}
                    {/*                location={s.location}*/}
                    {/*                country={s.country}/>*/}
                    {/*        </Fade>)*/}
                    {/*})}*/}
                </Slider>
            </div>
        </section>
    )
};