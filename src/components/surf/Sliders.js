import React from 'react';


export const Sliders = ({slider, title, location, country}) => {

    return (
        <div className={`serf-box ${slider}`} >
            <div className={'serf-box__inner'}>
                <div className={'serf-box__inner-title'}>{title}</div>
                <div className={'serf-box__inner-location'}>{location}
                    <span> | </span>{country}
                </div>
                <div className={'sef-box__inner-btn'}>
                    <a className={'btn'} href="#">
                        view <span>surf</span>
                    </a>
                </div>
            </div>
        </div>
    )
};