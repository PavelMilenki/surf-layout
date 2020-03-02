import React from "react";
import '../../app.scss'
import stars from "../../images/star.svg";
import surfBoard from "../../images/surf-board.png";
import wax from "../../images/wax.png";
import bracelet from "../../images/bracelet.png";


export const ShopSliderItem = ({changeActiveClass,active})=> {

    return (
        <div className={'shop__slider-item'}>
            <div className={'shop__slider-inner'}>
                <div className={'shop__slider-info'}>
                    <div className={'descr'}>
                        <div className={'headline-right'}>Style</div>
                        <div className={'descr__head descr__head-shop'}>
                            North Nugget TT Surfboard
                        </div>
                    </div>
                    <div className={'shop__slider-price'}>
                        <ul className={'shop__star-list star-list'}>
                            <li><img src={stars} alt={'logo'}/></li>
                            <li><img src={stars} alt={'logo'}/></li>
                            <li><img src={stars} alt={'logo'}/></li>
                            <li><img src={stars} alt={'logo'}/></li>
                            <li><img src={stars} alt={'logo'}/></li>
                        </ul>
                        $799<sup>99</sup>
                    </div>
                    <div className={'shop__slider-btn'}>
                        <a className={'btn'} href="#">
                            Drop<span>In</span>
                        </a>
                    </div>
                </div>
                <div className={'shop__slider-content'}>
                    <div className={'surfboard'}>
                        <img src={surfBoard} alt='surf-board'/>
                        <div className={'surfboard-box surfboard__position--1'}>
                            <div className={`surfboard-box__circle ${active}`}
                                 onClick={changeActiveClass}>
                                <div className={'circle-row'}></div>
                                <div className={'circle-row'}></div>
                            </div>
                            <div className={'surfboard-box__content'}>
                                Double Concave with Vee Shape low point
                            </div>
                        </div>
                        <div className={'surfboard-box surfboard__position--2'}>
                            <div className={`surfboard-box__circle ${active}`}
                                 onClick={changeActiveClass}>
                                <div className={'circle-row'}></div>
                                <div className={'circle-row'}></div>
                            </div>
                            <div className={'surfboard-box__content'}>
                                Double Concave with Vee Shape low point
                            </div>
                        </div>
                        <div className={'surfboard-box surfboard__position--3'}>
                            <div className={`surfboard-box__circle ${active}`}
                                 onClick={changeActiveClass}>
                                <div className={'circle-row'}></div>
                                <div className={'circle-row'}></div>
                            </div>
                            <div className={'surfboard-box__content'}>
                                Double Concave with Vee Shape low point
                            </div>
                        </div>
                    </div>
                    <div className={'shop__extras'}>
                        <div className={'shop__extras-title'}>
                            Extras
                        </div>
                        <div className={'shop__extras-inner'}>
                            <div className={'shop__extras-box'}>
                                <div className={'shop__extras-img'}>
                                    <img src={wax} alt='wax'/>
                                </div>
                                <div className={'shop__extras-name'}>Sex Wax</div>
                                <div className={'shop__extras-price'}>$24.99</div>
                            </div>
                            <div className={'shop__extras-box'}>
                                <div className={'shop__extras-img'}>
                                    <img src={bracelet} alt="bracelet"/>
                                </div>
                                <div className={'shop__extras-name'}>Pura Vida</div>
                                <div className={'shop__extras-price'}>$27.99</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};