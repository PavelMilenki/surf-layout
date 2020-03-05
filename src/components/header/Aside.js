import React from "react";
import logo from '../../images/logo.svg'
import navIcon1 from '../../images/nav-ico-1.svg'
import navIcon2 from '../../images/nav-ico-2.svg'
import navIcon3 from '../../images/nav-ico-3.svg'
import navIcon4 from '../../images/nav-ico-4.svg'
import search from '../../images/search.svg'
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";


export const Aside = ({editMode}) => {
    return (
        <Fade left duration={1000} delay={1600}>
            <div className={'header__aside'}>
                <div className={'logo linkTo'}>
                    <Link to={'/'}>
                        <img src={logo} alt='logo'/>
                    </Link>
                </div>
                {editMode &&
                <Fade left duration={1000}>
                    <nav className={'menu'}>
                        <ul className={'menu__list'}>
                            <li>
                                <Link to="surf" spy={true} smooth={true} offset={0} duration={3000} className={'link'}>
                                    <span>Surf</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="travel" spy={true} smooth={true} offset={150} duration={3000}
                                      className={'link'}>
                                    <span>Travel</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="sleep" spy={true} smooth={true} offset={150} duration={3000}
                                      className={'link'}>
                                    <span>Sleep</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="shop" spy={true} smooth={true} offset={-10} duration={3000}
                                      className={'link'}>
                                    <span>Shop</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Fade>}
                <nav className={'menu notActive'}>
                    <ul className={'menu__list'}>
                        <li>
                            <Link to="surf" spy={true} smooth={true} offset={0} duration={3000} className={'link'}>
                                <img src={navIcon1} alt='icon'/>
                                <span>Surf</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="travel" spy={true} smooth={true} offset={150} duration={3000} className={'link'}>
                                <img src={navIcon2} alt='icon'/>
                                <span>Travel</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="sleep" spy={true} smooth={true} offset={150} duration={3000} className={'link'}>
                                <img src={navIcon3} alt='icon'/>
                                <span>Sleep</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="shop" spy={true} smooth={true} offset={-10} duration={3000} className={'link'}>
                                <img src={navIcon4} alt='icon'/>
                                <span>Shop</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={'header__search'}>
                    <img src={search} alt=""/>
                </div>
                <div className={'header__date'}>
                    02
                    <span>07 | 2020</span>
                </div>
                <div className={'header__location'}>
                    California
                </div>
            </div>
        </Fade>
    )
};