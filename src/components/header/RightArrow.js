import React from "react";
import "./header.scss";
import arrowsRight from "../../images/arrowsRight.svg";


export const RightArrow = (props) => {
    const {onClick } = props;
    return (
        <>
            <img className={'slider-arrows slider-arrows__right'}
                 src={arrowsRight} alt='arrow' onClick={onClick}/>
        </>
    )
};
