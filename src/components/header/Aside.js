import React from "react";
import logo from '../../images/logo.svg'
import navIcon1 from '../../images/nav-ico-1.svg'
import navIcon2 from '../../images/nav-ico-2.svg'
import navIcon3 from '../../images/nav-ico-3.svg'
import navIcon4 from '../../images/nav-ico-4.svg'
import search from '../../images/search.svg'
import Fade from "react-reveal/Fade";


export const Aside = ({editMode}) => {
    return (
        <div className={'header__aside'}>
            <div className={'logo'}>
                <a href="#">
                    <img src={logo} alt='logo'/>
                </a>
            </div>
            {editMode &&
            <Fade left duration={1500} opposite={false}>
                <nav className={'menu'}>
                    <ul className={'menu__list'}>
                        <li><a href="#"><img src={navIcon1} alt='icon'/><span>Surf</span></a></li>
                        <li><a href="#"><img src={navIcon2} alt='icon'/><span>Travel</span></a></li>
                        <li><a href="#"><img src={navIcon3} alt='icon'/><span>Sleep</span></a></li>
                        <li><a href="#"><img src={navIcon4} alt='icon'/><span>Shop</span></a></li>
                    </ul>
                </nav>
            </Fade>}
            <nav className={'menu notActive'}>
                <ul className={'menu__list'}>
                    <li><a href="#"><img src={navIcon1} alt='icon'/><span>Surf</span></a></li>
                    <li><a href="#"><img src={navIcon2} alt='icon'/><span>Travel</span></a></li>
                    <li><a href="#"><img src={navIcon3} alt='icon'/><span>Sleep</span></a></li>
                    <li><a href="#"><img src={navIcon4} alt='icon'/><span>Shop</span></a></li>
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
    )
};