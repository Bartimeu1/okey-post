import React from "react";
import './title.scss';

function Title({text, classes}) {
    return (
        <h1 className={classes}>{text}</h1>
    );
};

export default Title;