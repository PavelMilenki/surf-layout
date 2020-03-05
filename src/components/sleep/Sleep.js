import React, {useState} from 'react';
import {LeftArrow} from '../assets/LeftArrow';
import {RightArrow} from '../assets/RightArrow';
import {SleepSlider} from './SleepSlider';
import {Title} from '../assets/Title';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import slider1 from '../../images/sleep-slider-1.png';
import slider2 from '../../images/sleep-slider-2.png';
import slider3 from '../../images/sleep-slider-3.png';
import slider4 from '../../images/sleep-slider-4.png';
import slider5 from '../../images/sleep-slider-5.png';
import slider6 from '../../images/sleep-slider-6.png';
import slider7 from '../../images/sleep-slider-7.png';
import slider8 from '../../images/sleep-slider-8.png';


export const Sleep = () => {

    const [nights, setNights] = useState(5);
    const [guests, setGuests] = useState(4);

    return (
        <section className={'holder sleep'} id={'sleep'}>
            <div className={'container'}>
                <Title title={'sleep'}/>
                <div className={'holder__slider'}>
                    <Slider dots={false}
                            infinite={true}
                            fade={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                            prevArrow={<LeftArrow/>}
                            nextArrow={<RightArrow/>}>
                        <SleepSlider country={'USA'}
                                     town={'Hawaii'}
                                     price={40}
                                     nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}
                                     slide={slider1}/>
                        <SleepSlider country={'USA'}
                                     town={'California'}
                                     price={80}
                                     nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}
                                     slide={slider2}/>
                        <SleepSlider country={'Cuba'}
                                     town={'Havana'}
                                     price={25}
                                     nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}
                                     slide={slider3}/>
                        <SleepSlider country={'Brazil'}
                                     town={'Rio de Janeiro'}
                                     price={30}
                                     nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}
                                     slide={slider4}/>
                        <SleepSlider country={'France'}
                                     town={'Hossegor'}
                                     price={55}
                                     nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}
                                     slide={slider5}/>
                        <SleepSlider country={'South Africa'}
                                     town={'Cape Town'}
                                     price={45}
                                     nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}
                                     slide={slider6}/>
                        <SleepSlider country={'Philippines'}
                                     town={'Siargao'}
                                     price={30}
                                     nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}
                                     slide={slider7}/>
                        <SleepSlider country={'Australia'}
                                     town={'Queensland'}
                                     price={65}
                                     nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}
                                     slide={slider8}/>

                    </Slider>
                </div>
            </div>
        </section>
    )
};