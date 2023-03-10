import React from "react";
import ContainerCSS from "./Container.module.css";
function Container(props) {
  const styled = ContainerCSS;
  return (
    <div
      className={`${styled.Container}  ${styled[props.width]} ${
        props.className
      }`}
    >
      {props.children}
    </div>
  );
}

export default Container;
