import React from "react";
import '../../app.scss'
import arrowsLeft from "../../images/arrows-left.svg";


export const LeftArrow = (props) => {
    const {onClick } = props;
    return (
        <>
            <img className={'slider-arrows slider-arrows__left'}
                 src={arrowsLeft} alt='arrow' onClick={onClick}/>
        </>
    )
};
