import React, {useState} from "react";
import '../../app.scss'
import {Title} from "../assets/Title";
import {ShopSliderItem} from "./ShopSliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {LeftArrow} from "../assets/LeftArrow";
import {RightArrow} from "../assets/RightArrow";


export const Shop = () => {
    const [active, setActive] = useState('');

    const changeActiveClass = () => {
        if (!active) {
            setActive('active')
        }
        if (!!active) {
            setActive('')
        }
    };
    return (
        <section className={'shop'}>
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
                    <ShopSliderItem changeActiveClass={changeActiveClass} active={active}/>
                    <ShopSliderItem changeActiveClass={changeActiveClass} active={active}/>
                    <ShopSliderItem changeActiveClass={changeActiveClass} active={active}/>
                    <ShopSliderItem changeActiveClass={changeActiveClass} active={active}/>
                </Slider>
            </div>
        </section>
    )
};