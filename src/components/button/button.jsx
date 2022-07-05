import React from 'react';
import './button.scss';

const Button = ({text}) => {
    return (
        <a href="#" className="button">{text}</a>
    )
}

export default Button;