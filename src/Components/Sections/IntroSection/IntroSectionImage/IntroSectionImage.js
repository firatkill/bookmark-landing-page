import React from "react";
import IntroSectionImageCSS from "./IntroSectionImage.module.css";
function IntroSectionImage() {
  const styled = IntroSectionImageCSS;
  return (
    <div className={styled.introSectionImageContainer}>
      <div className={styled.bgLine}></div>
      <img alt="introSection" src="/images/illustration-hero.svg" />
    </div>
  );
}

export default IntroSectionImage;
