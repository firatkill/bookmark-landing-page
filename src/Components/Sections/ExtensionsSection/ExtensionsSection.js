import React from "react";
import ExtensionsSectionCSS from "./ExtensionsSection.module.css";
import Container from "../../UI/Container/Container";
import Card from "./Card/Card";
function ExtensionsSection() {
  const styled = ExtensionsSectionCSS;
  return (
    <Container width="width__80">
      <div className={styled.ExtensionsSectionContainer}>
        <div className={styled.textContent}>
          <h3>Download the extension</h3>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div className={styled.cardContainer}>
          <Card className={styled.cardChrome} content="Chrome"></Card>
          <Card className={styled.cardFirefox} content="Firefox"></Card>
          <Card className={styled.cardOpera} content="Opera"></Card>
        </div>
      </div>
    </Container>
  );
}

export default ExtensionsSection;
