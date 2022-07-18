import React, { useState } from "react";
import './footer.scss';

import logo from '../../assets/images/logo.svg';
import social1 from '../../assets/images/social1.svg';
import social2 from '../../assets/images/social2.svg';
import social3 from '../../assets/images/social3.svg';
import line from '../../assets/images/line.svg';

function Footer() {
    const [menuActive1, setMenuActive1] = useState(false);
    const [menuActive2, setMenuActive2] = useState(false);
    const [menuActive3, setMenuActive3] = useState(false);
  return (
    <footer className="footer">
        <div className="container footer__container">
            <div className="footer__images">
                <a href="#" className="footer__logo"><img src={logo} alt="logo" className="footer__logo-img"/></a>
                <div className="footer__social">
                    <a href="#" className="footer__social-link"><img src={social1} alt="social1" /></a>
                    <a href="#" className="footer__social-link"><img src={social2} alt="social2" /></a>
                    <a href="#" className="footer__social-link"><img src={social3} alt="social3" /></a>
                </div>
            </div>
            <div className="footer__links">
                <div className={menuActive1 ? 'footer__links-item--active' : 'footer__links-item'}>
                    <h5 className="footer__links-title" onClick={() => {
                        setMenuActive1(!menuActive1);
                        document.body.style.overflow = "hidden";
                        }}>О компании</h5>
                    <div className={menuActive1 ? 'footer__links__menu--active' : 'footer__links__menu'}>
                        <a href="#" className="footer__links-link">Услуги</a>
                        <a href="#" className="footer__links-link">Цены</a>
                        <a href="#" className="footer__links-link">Отзывы</a>
                        <a href="#" className="footer__links-link">Контакты</a>
                        <a href="#" className="footer__links-link">Вакансии</a>
                        <a href="#" className="footer__links-link">Соглашение о персональных данных</a>
                        <a href="#" className="footer__links-link">Условия использования</a>
                    </div>
                </div>
                <div className={menuActive2 ? 'footer__links-item--active' : 'footer__links-item'}>
                    <h5 className="footer__links-title" onClick={() => {
                        setMenuActive2(!menuActive2);
                        document.body.style.overflow = "hidden";
                        }}>Полезное</h5>
                    <div className={menuActive2 ? 'footer__links__menu--active' : 'footer__links__menu'}>
                        <a href="#" className="footer__links-link">Как работает наш сервис</a>
                        <a href="#" className="footer__links-link">Как покупать с оператором</a>
                        <a href="#" className="footer__links-link">Ответы на частые вопросы</a>
                        <a href="#" className="footer__links-link">Популярные магазины</a>
                        <a href="#" className="footer__links-link">Черный список магазинов</a>
                        <a href="#" className="footer__links-link">Актуальные распродажи</a>
                    </div>
                </div>
                <div className={menuActive3 ? 'footer__links-item--active' : 'footer__links-item'}>
                    <h5 className="footer__links-title" onClick={() => {
                        setMenuActive3(!menuActive3);
                        document.body.style.overflow = "hidden";
                        }}>Спецпроекты</h5>
                    <div className={menuActive3 ? 'footer__links__menu--active' : 'footer__links__menu'}>
                        <a href="#" className="footer__links-link">50% на первую доставку</a>
                        <a href="#" className="footer__links-link">Скидки для постоянных клиентов</a>
                        <a href="#" className="footer__links-link">Реферальная программа</a>
                        <a href="#" className="footer__links-link">Кэшбек Mr. Rebates и Rakuten</a>
                        <a href="#" className="footer__links-link">Stop Fraud</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__law">
            <p className="footer__law-text">© 2021 Okeypost . Все права защищены.</p>
        </div>
    </footer>
  );
}
export default Footer;
