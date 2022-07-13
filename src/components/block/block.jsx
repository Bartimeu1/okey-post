import React from "react";
import './block.scss';

import Button from "../button/button";

function Block({ img, title, subtitle, titleClasses }) {
  return (
    <section className="block">
        <div className="block__container">
            <img src={img} alt="img" className="block-img" />
            <div className="block__text">
                <h3 className={titleClasses}>{title}</h3>
                <p className="block-subtitle">{subtitle}</p>
                <Button text='Попробовать' className="block__button"></Button>
            </div>
        </div>
    </section>
  );
}

export default Block;
