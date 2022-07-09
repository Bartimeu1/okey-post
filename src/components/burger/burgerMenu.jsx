import React from "react";
import { Link } from "react-router-dom";
import './burgerMenu.scss';

function BurgerMenu({active, setActive}) {
    return(
        <div className={active ? 'burger__menu' : 'burger__menu--inactive'}>
            <div className="blur"/>
            <ul className="burger__menu-list">
                <li><Link to="" className="burger__menu-link">Как покупать</Link></li>
                <li><Link to="" className="burger__menu-link">Распродажи</Link></li>
                <li><Link to="" className="burger__menu-link">Цены</Link></li>
                <li><Link to="" className="burger__menu-link">Помощь</Link></li>
                <li><Link to="" className="burger__menu-link">Бонусы</Link></li>
                <li><Link to="" className="burger__menu-link">Блог</Link></li>
                <li><Link to="" className="burger__menu-link">Магазины</Link></li>
                <li className="burger__menu-profile"><Link to="" className="burger__menu-link">Вход</Link></li>
                <li className="burger__menu-connection"><Link to="" className="burger__menu-link">Связаться с нами</Link></li>
            </ul>
        </div>
    )
};

export default BurgerMenu;