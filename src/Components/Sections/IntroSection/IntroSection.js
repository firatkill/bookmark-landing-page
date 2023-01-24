import React from "react";
import IntroSectionCSS from "./IntroSection.module.css";
import Container from "../../UI/Container/Container";
import Button from "../../UI/Button/Button";
import IntroSectionImage from "./IntroSectionImage/IntroSectionImage";
function IntroSection() {
  const styled = IntroSectionCSS;
  return (
    <Container width="width__80" className={styled.introSectionContainer}>
      <div className={styled.textContent}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clearn and simple interface to organize your favourite websites.
          Open a new browser tab and see your sites load instantly. Try it for
          free.
        </p>
        <div className={styled.browserButtons}>
          <Button className={styled.chromeButton} type="primary">
            Get it on Chrome
          </Button>
          <Button className={styled.firefoxButton} type="secondary">
            Get it on Firefox
          </Button>
        </div>
      </div>
      <IntroSectionImage className={styled.introSectionImage} />
    </Container>
  );
}

export default IntroSection;
