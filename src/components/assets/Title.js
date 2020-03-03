import React from "react";
import Fade from "react-reveal/Fade";

export const Title = ({title}) => {
    return (
        <div className={'title'}>
            <div>
                <Fade left duration={1500}>
                    <span>{title}</span>
                </Fade>
                <h3>{title}</h3>

            </div>
        </div>
    )
};