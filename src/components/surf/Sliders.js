import React from 'react';
import {Link} from "react-scroll";


export const Sliders = ({slider, title, location, country}) => {

    return (
        <div className={`serf-box ${slider}`} >
            <div className={'serf-box__inner'}>
                <div className={'serf-box__inner-title'}>{title}</div>
                <div className={'serf-box__inner-location'}>{location}
                    <span> | </span>{country}
                </div>
                <div className={'sef-box__inner-btn'}>
                    <Link to={'/'} className={'btn linkTo'}>
                        view <span>surf</span>
                    </Link>
                </div>
            </div>
        </div>
    )
};