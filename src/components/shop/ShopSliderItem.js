import React from 'react';
import stars from '../../images/star.svg';
import surfBoard from '../../images/surf-board.png';
import wax from '../../images/wax.png';
import bracelet from '../../images/bracelet.png';
import {Rotate, Zoom} from "react-reveal";
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";


export const ShopSliderItem = (
    {changeActiveClass1, changeActiveClass2, changeActiveClass3, active1, active2, active3}
) => {
    return (
        <div className={'shop__slider-item'}>
            <div className={'shop__slider-inner'}>
                <div className={'shop__slider-info'}>
                    <div className={'descr'}>
                        <Fade left duration={1500} delay={1000}>
                            <div className={'headline-right'}>Style</div>
                        </Fade>
                        <Fade left duration={1500} delay={2000}>
                            <div className={'descr__head descr__head-shop'}>
                                North Nugget TT Surfboard
                            </div>
                        </Fade>
                    </div>
                    <div className={'shop__slider-price'}>
                        <Zoom bottom duration={3000} delay={900}>
                            <ul className={'shop__star-list star-list'}>
                                <li><img src={stars} alt={'logo'}/></li>
                                <li><img src={stars} alt={'logo'}/></li>
                                <li><img src={stars} alt={'logo'}/></li>
                                <li><img src={stars} alt={'logo'}/></li>
                                <li><img src={stars} alt={'logo'}/></li>
                            </ul>
                        </Zoom>
                        $799<sup>99</sup>
                    </div>
                    <Fade left duration={1500} delay={3000}>
                        <div className={'shop__slider-btn'}>
                            <Link to={'/'} className={'btn linkTo'}>
                                Drop<span>In</span>
                            </Link>
                        </div>
                    </Fade>
                </div>
                <div className={'shop__slider-content'}>
                    <Rotate bottom right duration={1500} delay={1000}>
                        <div className={'surfboard'}>
                            <img src={surfBoard} alt='surf-board'/>
                            <div className={'surfboard-box surfboard__position--1'}>
                                <div className={`surfboard-box__circle ${active1}`}
                                     onClick={changeActiveClass1}>
                                    <div className={'circle-row'}></div>
                                    <div className={'circle-row'}></div>
                                </div>
                                <div className={'surfboard-box__content'}>
                                    Double Concave with Vee Shape low point
                                </div>
                            </div>
                            <div className={'surfboard-box surfboard__position--2'}>
                                <div className={`surfboard-box__circle ${active2}`}
                                     onClick={changeActiveClass2}>
                                    <div className={'circle-row'}></div>
                                    <div className={'circle-row'}></div>
                                </div>
                                <div className={'surfboard-box__content'}>
                                    Double Concave with Vee Shape low point
                                </div>
                            </div>
                            <div className={'surfboard-box surfboard__position--3'}>
                                <div className={`surfboard-box__circle ${active3}`}
                                     onClick={changeActiveClass3}>
                                    <div className={'circle-row'}></div>
                                    <div className={'circle-row'}></div>
                                </div>
                                <div className={'surfboard-box__content'}>
                                    Double Concave with Vee Shape low point
                                </div>
                            </div>
                        </div>
                    </Rotate>

                    <div className={'shop__extras'}>
                        <div className={'shop__extras-title'}>
                            Extras
                        </div>
                        <div className={'shop__extras-inner'}>
                            <Fade bottom duration={1500} delay={1500}>
                                <div className={'shop__extras-box'}>
                                    <div className={'shop__extras-img'}>
                                        <img src={wax} alt='wax'/>
                                    </div>
                                    <div className={'shop__extras-name'}>Sex Wax</div>
                                    <div className={'shop__extras-price'}>$24.99</div>
                                </div>
                            </Fade>
                            <Fade bottom duration={1500} delay={2000}>
                                <div className={'shop__extras-box'}>
                                    <div className={'shop__extras-img'}>
                                        <img src={bracelet} alt="bracelet"/>
                                    </div>
                                    <div className={'shop__extras-name'}>Pura Vida</div>
                                    <div className={'shop__extras-price'}>$27.99</div>
                                </div>
                            </Fade>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};