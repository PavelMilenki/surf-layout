import React, {useState} from 'react';
import {Title} from '../assets/Title';
import {ShopSliderItem} from './ShopSliderItem';
import {LeftArrow} from '../assets/LeftArrow';
import {RightArrow} from '../assets/RightArrow';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';


export const Shop = () => {

    const [active1, setActive1] = useState('');
    const [active2, setActive2] = useState('');
    const [active3, setActive3] = useState('');

     const changeActiveClass1 = () => {
        if (!active1) {
            setActive1('active1')
        }
        if (!!active1) {
            setActive1('')
        }
    };

    const changeActiveClass2 = () => {
        if (!active2) {
            setActive2('active2')
        }
        if (!!active2) {
            setActive2('')
        }
    };

    const changeActiveClass3 = () => {
        if (!active3) {
            setActive3('active3')
        }
        if (!!active3) {
            setActive3('')
        }
    };

    return (
        <section className={'shop'} id={'shop'}>
            <Title title={'shop'}/>
            <div className={'shop__slider'}>
                <Slider dots={false}
                        infinite={true}
                        fade={true}
                        speed={1500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        prevArrow={<LeftArrow/>}
                        nextArrow={<RightArrow/>}>

                    <ShopSliderItem changeActiveClass1={changeActiveClass1} active1={active1}
                                    changeActiveClass2={changeActiveClass2} active2={active2}
                                    changeActiveClass3={changeActiveClass3} active3={active3}/>
                    <ShopSliderItem changeActiveClass1={changeActiveClass1} active1={active1}
                                    changeActiveClass2={changeActiveClass2} active2={active2}
                                    changeActiveClass3={changeActiveClass3} active3={active3}/>
                    <ShopSliderItem changeActiveClass1={changeActiveClass1} active1={active1}
                                    changeActiveClass2={changeActiveClass2} active2={active2}
                                    changeActiveClass3={changeActiveClass3} active3={active3}/>
                    <ShopSliderItem changeActiveClass1={changeActiveClass1} active1={active1}
                                    changeActiveClass2={changeActiveClass2} active2={active2}
                                    changeActiveClass3={changeActiveClass3} active3={active3}/>

                </Slider>
            </div>
        </section>
    )
};