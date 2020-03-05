import React from 'react';
import minus from '../../images/minus.svg'
import plus from '../../images/plus.svg'


export const InfoItem = (
    {subTitle, infoTitle, supTitle, infoTitleSecond, isNumber = false, number, setNumber}
) => {
    return (
        <>
            {isNumber
                ? <div className="holder-slider__info-item">
                    <div className="holder-slider__info-subtitle">{subTitle}</div>
                    <div className="holder-slider__info-title">
                        {number}&#160;{infoTitle}{infoTitleSecond}
                        <div className={'holder-slider__info-btn'}>
                            <button onClick={() => {
                                setNumber(number - 1)
                            }}><img src={minus} alt={'minus'}/></button>
                            <button onClick={() => {
                                setNumber(number + 1)
                            }}><img src={plus} alt={'minus'}/></button>
                        </div>
                    </div>
                </div>
                : <div className="holder-slider__info-item">
                    <div className="holder-slider__info-subtitle">{subTitle}</div>
                    <div className="holder-slider__info-title">{infoTitle}<br/>{infoTitleSecond}
                        <span> {supTitle}</span>
                    </div>
                </div>
            }
        </>
    )
};