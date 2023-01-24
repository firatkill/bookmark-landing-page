import React from "react";
import FAQSectionCSS from "./FAQSection.module.css";
import Container from "../../../UI/Container/Container";
import Button from "../../../UI/Button/Button";
import FAQAccordion from "../FAQAccordion/FAQAccordion";
function FAQSection() {
  const styled = FAQSectionCSS;
  return (
    <Container className={styled.FAQSectionContainer} width="width__80">
      <div className={styled.textContent}>
        <h3>Frequently Asked Questions</h3>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered, please feel free to email us.
        </p>
      </div>
      <FAQAccordion />
      <Button className={styled.Button} type="primary">
        More Info
      </Button>
    </Container>
  );
}

export default FAQSection;
