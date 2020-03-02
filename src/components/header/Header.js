import React, {useState} from 'react';
import {Aside} from './Aside';
import {Map} from './Map';
import arrowsDown from '../../images/arrows-down.svg'
import 'animate.css/animate.css'
import {HeaderSlider} from "./HeaderSlider";
import {Slider} from "react-burgers";

export const Header = () => {
    const [editMode, setEditMode] = useState(false);

    const changeEditMode = () => {
        if (editMode === false) {
            setEditMode(true);
        }
        if (editMode === true) {
            setEditMode(false);
        }
    };

    return (
        <header className={'header'}>
            <div className={'header__title'}>
                go surf
            </div>
            <div className={'header__arrows'}>
                <a href="#" className={'animated fadeInDown infinite slow'}><img src={arrowsDown} alt='arrow'/></a>
            </div>
            <Map/>
            <div className={'menu-btn'}>
                <Slider color='#4AF6CD'
                        active={editMode}
                        onClick={changeEditMode}
                        lineSpacing={7}
                        lineHeight={3}
                        width={35}/>
            </div>
            <Aside editMode={editMode}/>
            <HeaderSlider/>
        </header>
    )
};