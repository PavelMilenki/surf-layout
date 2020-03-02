import React from "react";
import '../../app.scss'
import arrowsRight from "../../images/arrows-right.svg";


export const RightArrow = (props) => {
    const {onClick } = props;
    return (
        <>
            <img className={'slider-arrows slider-arrows__right'}
                 src={arrowsRight} alt='arrow' onClick={onClick}/>
        </>
    )
};
