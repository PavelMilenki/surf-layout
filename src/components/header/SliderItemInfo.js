import React from "react";
import '../../app.scss'
import arrowsRight from "../../images/arrows-right.svg";


export const SliderItemInfo = ({title}) => {
    return (
        <div className={'header__slider-item slider-item'}>
            <div className={'slider-item__info'}>
                <div className={'slider-item__info-supTitle headLine-left'}>Surf</div>
                <div className={'slider-item__info-title'}>{title}</div>
                <div className={'slider-item__info-supText headLine-left'}>Condition</div>
                <div className={'slider-item__info-text'}>Radical</div>
                <a href="#" className={'slider-item__info-link'}>
                    <img src={arrowsRight} alt=''/>
                </a>
            </div>
        </div>

    )
};