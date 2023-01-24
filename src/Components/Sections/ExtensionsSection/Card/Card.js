import React from "react";
import CardCSS from "./Card.module.css";
import Button from "../../../UI/Button/Button";
function Card(props) {
  const styled = CardCSS;
  return (
    <div className={`${styled.cardContainer} ${props.className} `}>
      {props.content === "Chrome" && (
        <>
          <img alt="Chrome" src="/images/logo-chrome.svg" />
          <h5>Add to Chrome</h5>
          <p>Minimum version 62</p>
        </>
      )}
      {props.content === "Firefox" && (
        <>
          <img alt="Firefox" src="/images/logo-firefox.svg" />
          <h5>Add to Firefox</h5>
          <p>Minimum version 55</p>
        </>
      )}
      {props.content === "Opera" && (
        <>
          <img alt="Opera" src="/images/logo-opera.svg" />
          <h5>Add to Opera</h5>
          <p>Minimum version 46</p>
        </>
      )}
      <img alt="line" src="/images/bg-dots.svg" />
      <Button type="primary">Add & Install Extension</Button>
    </div>
  );
}

export default Card;
