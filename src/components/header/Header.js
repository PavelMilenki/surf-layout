import React from 'react';
import './header.scss'
import {SliderItems} from "./SliderItems";
import {Dots} from "./Dots";
import {Aside} from "./Aside";
import {Map} from "./Map";
import arrowsDown from '../../images/arrows-down.svg'
import 'animate.css/animate.css'

export function Header() {
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
                <SliderItems/>
                <Dots/>
            </div>
        </header>
    )
}