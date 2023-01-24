import React from "react";
import ButtonCSS from "./Button.module.css";
function Button(props) {
  const styled = ButtonCSS;
  return (
    <button
      className={`${styled.button} ${styled[props.type]} ${props.className}`}
      type={props.buttonType}
    >
      {props.children}
    </button>
  );
}

export default Button;
