import React from "react";
import './travel.scss'


export const InfoItem = ({subTitle,infoTitle,supTitle,infoTitleSecond})=> {
    return(
        <div className="travel-slider__info-item">
            <div className="travel-slider__info-subtitle">{subTitle}</div>
            <div className="travel-slider__info-title">{infoTitle}<br/>{infoTitleSecond}
                <span> {supTitle}</span>
            </div>
        </div>
    )
};