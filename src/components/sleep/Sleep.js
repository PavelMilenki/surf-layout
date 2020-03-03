import React, {useState} from 'react';
import {LeftArrow} from '../assets/LeftArrow';
import {RightArrow} from '../assets/RightArrow';
import {SleepSlider} from './SleepSlider';
import {Title} from '../assets/Title';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';


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
                            speed={1500}
                            slidesToShow={1}
                            slidesToScroll={1}
                            prevArrow={<LeftArrow/>}
                            nextArrow={<RightArrow/>}>
                        <SleepSlider nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}/>
                        <SleepSlider nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}/>
                        <SleepSlider nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}/>
                        <SleepSlider nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}/>
                        <SleepSlider nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}/>
                        <SleepSlider nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}/>
                        <SleepSlider nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}/>
                        <SleepSlider nights={nights}
                                     guests={guests}
                                     setNights={setNights}
                                     setGuests={setGuests}/>

                    </Slider>
                </div>
            </div>
        </section>
    )
};