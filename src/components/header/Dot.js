import React from 'react';

export const Dot = ({number,name}) => {
    return (
        <div className={'slider-dots__item'}>
            <div className={'dots-box'}>
                <div className={'dots-box__number'}>{number}</div>
                <div className={'dots-box__name'}>{name}</div>
            </div>
        </div>
    )
};