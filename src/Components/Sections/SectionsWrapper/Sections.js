import React from "react";
import SectionsCSS from "./Sections.module.css";
import IntroSection from "../IntroSection/IntroSection";
import FeaturesSection from "../FeaturesSection/FeaturesSectionWrapper/FeaturesSection";
import ExtensionsSection from "../ExtensionsSection/ExtensionsSection";
import FAQSection from "../FAQSection/FAQSectionWrapper/FAQSection";
import ContactSection from "../ContactSection/ContactSection";
function Sections() {
  const styled = SectionsCSS;
  return (
    <div className={styled.sectionsContainer}>
      <IntroSection />
      <FeaturesSection />
      <ExtensionsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

export default Sections;
