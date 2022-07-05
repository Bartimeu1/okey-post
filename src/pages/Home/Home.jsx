import React from "react";
import './Home.scss';

import Button from "../../components/button/button";

import bannerBg from "../../assets/images/banner.png";

function Home() {
    return (
      <>
        <section className="banner">
          <div className="banner__container">
            <div className="banner__text">
              <h1 className="banner-title">Доставка товаров  из Великобритании в Россию</h1>
              <p className="banner-subtitle">Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.</p>
              <Button text={'Получить адрес в UK'}></Button>
            </div>
            <div className="banner-img" style={{ backgroundImage: `url(${bannerBg})` }}></div>
          </div>
        </section>
      </>
    );
}

export default Home;