import React from "react";
import style from "./button.module.css";

const Button = (props) => {
  return (
    <div>
      <button className={ props.isOutline? style.button1:style.button}>
        {props.icon}
        {props.text}
      </button>
    </div>
  );
};

export default Button;
