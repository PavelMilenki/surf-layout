import React from 'react';
import './header.scss'
import {SliderItems} from "./SliderItems";
import {Dots} from "./Dots";


export function Header() {
    return (
        <header className={'header'}>
            <div className={'header__slider'}>
                <SliderItems/>
                <Dots/>
            </div>
        </header>
    )
}