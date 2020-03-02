import React from "react";
import '../../app.scss'


export const InfoItem = ({subTitle,infoTitle,supTitle,infoTitleSecond})=> {
    return(
        <div className="holder-slider__info-item">
            <div className="holder-slider__info-subtitle">{subTitle}</div>
            <div className="holder-slider__info-title">{infoTitle}<br/>{infoTitleSecond}
                <span> {supTitle}</span>
            </div>
        </div>
    )
};