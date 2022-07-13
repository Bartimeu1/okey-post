import React from "react";
import './Home.scss';

// Swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

// Components
import Button from "../../components/button/button";
import Title from "../../components/title/title";

// Images
import bannerBg from "../../assets/images/banner.png";
import profit1 from "../../assets/images/profit-1.svg";
import profit2 from "../../assets/images/profit-2.svg";
import profit3 from "../../assets/images/profit-3.svg";
import profit4 from "../../assets/images/profit-4.svg";
import profit5 from "../../assets/images/profit-5.svg";
import profit6 from "../../assets/images/profit-6.svg";
import profitAdvantages1 from "../../assets/images/profitAdvantages1.svg";
import profitAdvantages2 from "../../assets/images/profitAdvantages2.svg";
import profitAdvantages3 from "../../assets/images/profitAdvantages3.svg";
import profitAdvantages4 from "../../assets/images/profitAdvantages4.svg";
import flag1 from "../../assets/images/flag1.png";
import flag2 from "../../assets/images/flag2.png";
import jacket from "../../assets/images/jacket.png";

SwiperCore.use([ Navigation ]);

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
        <section className="profit">
          <div className="container profit__container">
            <Title text={'Насколько выгодно покупать?'} classes={'title profit-title'}></Title>
            <div className="profit__filter">
              <Swiper
                modules={[ Navigation ]}
                navigation={{
                  nextEl: '.next-button',
                  prevEl: '.prev-button',
                }}
                slidesPerView={1}
                loop
                className="profit__slider"
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                  },
                  780: {
                    slidesPerView: 3,
                  },
                  1110: {
                    slidesPerView: 4,
                  },
                }}
              >
                  <div className="next-button"></div>
                  <div className="prev-button"></div>
                  <SwiperSlide className="profit__filter-item">
                    <img src={profit1} className="profit__filter-img"/>
                    <h3 className="profit__filter-title">Одежда</h3>
                  </SwiperSlide>
                  <SwiperSlide className="profit__filter-item">
                    <img src={profit2} className="profit__filter-img"/>
                    <h3 className="profit__filter-title">Электроника</h3>
                  </SwiperSlide>
                  <SwiperSlide className="profit__filter-item">
                    <img src={profit3} className="profit__filter-img"/>
                    <h3 className="profit__filter-title">Аксессуары</h3>
                  </SwiperSlide>
                  <SwiperSlide className="profit__filter-item">
                    <img src={profit4} className="profit__filter-img"/>
                    <h3 className="profit__filter-title">Для детей</h3>
                  </SwiperSlide>
                  <SwiperSlide className="profit__filter-item">
                    <img src={profit5} className="profit__filter-img"/>
                    <h3 className="profit__filter-title">Для спорта</h3>
                  </SwiperSlide>
                  <SwiperSlide className="profit__filter-item">
                    <img src={profit6} className="profit__filter-img"/>
                    <h3 className="profit__filter-title">Косметика</h3>
                  </SwiperSlide>
              </Swiper>
            </div>
            <div className="profit__product product">
              <Swiper
              modules={[ Navigation ]}
              navigation={{
                nextEl: '.product-next-button',
                prevEl: '.product-prev-button',
              }}
              spaceBetween={400}
              slidesPerView={1}
              loop
               className="product__slider"
              >
                <div className="product-next-button"></div>
                <div className="product-prev-button"></div>
                <SwiperSlide className="product__slide">
                  <div className="product__slide--left">
                    <h4 className="product-title product-title--top">Columbia Barlow Pass 550 Turbodown Jacket</h4>
                    <div className="product__price">
                      <img src={flag1} alt="flag" className="product__price-flag"/>
                      <div className="product__price-text">
                        <h5 className="product__price-title">Цена в России</h5>
                        <p className="product__price-num">7891,46₽</p>
                      </div>
                    </div>
                  </div>
                  <div className="product__slide--middle">
                    <img src={jacket} alt="" className="product-img"/>
                    <p className="product-time">Срок доставки примерно 10 дней</p>
                    <h4 className="product-economy">Вы экономите до <span>$119.56</span></h4>
                  </div>
                  <div className="product__slide--right">
                    <h4 className="product-title">Доставка одежды из Великобритании  от <span>£7.79</span></h4>
                    <div className="product__price">
                      <img src={flag2} alt="flag" className="product__price-flag"/>
                      <div className="product__price-text">
                        <h5 className="product__price-title">Цена в UK</h5>
                        <p className="product__price-num product__price-num--green">£80.62</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="profit__advantages">
              <div className="profit__advantages-item">
                <img src={profitAdvantages1} className="profit__advantages-img"/>
                <h3 className="profit__advantages-title">Экономия <br /> до 70%</h3>
              </div>
              <div className="profit__advantages-item profit__advantages-item--adapt">
                <img src={profitAdvantages2} className="profit__advantages-img"/>
                <h3 className="profit__advantages-title">Только подлинная <br /> продукция</h3>
              </div>
              <div className="profit__advantages-item">
                <img src={profitAdvantages3} className="profit__advantages-img"/>
                <h3 className="profit__advantages-title">Оперативная <br /> доставка</h3>
              </div>
              <div className="profit__advantages-item profit__advantages-item--last">
                <img src={profitAdvantages4} className="profit__advantages-img"/>
                <h3 className="profit__advantages-title">Огромный <br /> выбор товаров</h3>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Home;