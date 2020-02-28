import React from "react";
import "./header.scss";
import arrowsLeft from "../../images/arrowsLeft.svg";


export const LeftArrow = (props) => {
    const {onClick } = props;
    return (
        <>
            <img className={'slider-arrows slider-arrows__left'}
                 src={arrowsLeft} alt='arrow' onClick={onClick}/>
        </>
    )
};
