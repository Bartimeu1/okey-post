import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.scss';

import BurgerMenu from "../burger/burgerMenu";

import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';

function Header() {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className="header">
            <div className="container header__container">
                <img src={logo} alt='logo' className="header__logo"></img>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li><Link to="" className="header__nav-link">Как покупать</Link></li>
                        <li><Link to="" className="header__nav-link">Распродажи</Link></li>
                        <li><Link to="" className="header__nav-link">Цены</Link></li>
                        <li><Link to="" className="header__nav-link">Помощь</Link></li>
                        <li><Link to="" className="header__nav-link">Бонусы</Link></li>
                        <li><Link to="" className="header__nav-link">Блог</Link></li>
                        <li><Link to="" className="header__nav-link">Магазины</Link></li>
                    </ul>
                </nav>
                <div className="header__menu">
                    <div className="header__profile">
                        <img src={user} alt='user' className="header__profile-img"></img>
                        <p className="header__profile-text">Вход</p>
                    </div>
                    <a href="#" className="header__connection">Связаться с нами</a>
                </div>
                <div className={menuActive ? 'burger--active' : 'burger'}>
                    <div className="burger-content" onClick={() => {
                        setMenuActive(!menuActive);
                        document.body.style.overflow = "hidden";
                        }}>
                        <span></span>
                    </div>
                </div>
            </div>
            <BurgerMenu active={menuActive} setActive={setMenuActive}></BurgerMenu>
        </div>
    );
}

export default Header;