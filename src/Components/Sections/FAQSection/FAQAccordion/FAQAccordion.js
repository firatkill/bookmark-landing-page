import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FAQAccordionCSS from "./FAQAccordion.module.css";
function FAQAccordion() {
  const styled = FAQAccordionCSS;
  const [activeQ, setActiveQ] = useState("");
  const toggleStateHandler = (e) => {
    if (activeQ === e.currentTarget.id) {
      setActiveQ("");
    } else {
      setActiveQ(e.currentTarget.id);
    }
  };
  return (
    <div className={styled.container}>
      <div
        onClick={toggleStateHandler}
        className={styled.QSection}
        status={activeQ === "section1" ? "active" : "disabled"}
        id="section1"
      >
        <div className={styled.QTitle}>
          <h4>What is Bookmark?</h4>
          {activeQ === "section1" ? (
            <IoIosArrowUp className={styled.upIcon} />
          ) : (
            <IoIosArrowDown className={styled.downIcon} />
          )}
        </div>
        <div
          className={styled.QAnswer}
          status={activeQ === "section1" ? "active" : "disabled"}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
      </div>
      <div
        onClick={toggleStateHandler}
        className={styled.QSection}
        status={activeQ === "section2" ? "active" : "disabled"}
        id="section2"
      >
        <div className={styled.QTitle}>
          <h4>How can i request a new browser?</h4>
          {activeQ === "section2" ? (
            <IoIosArrowUp className={styled.upIcon} />
          ) : (
            <IoIosArrowDown className={styled.downIcon} />
          )}
        </div>
        <div
          className={styled.QAnswer}
          status={activeQ === "section2" ? "active" : "disabled"}
        >
          <p>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
      </div>
      <div
        onClick={toggleStateHandler}
        className={styled.QSection}
        status={activeQ === "section3" ? "active" : "disabled"}
        id="section3"
      >
        <div className={styled.QTitle}>
          <h4>Is there a mobile app?</h4>
          {activeQ === "section3" ? (
            <IoIosArrowUp className={styled.upIcon} />
          ) : (
            <IoIosArrowDown className={styled.downIcon} />
          )}
        </div>
        <div
          className={styled.QAnswer}
          status={activeQ === "section3" ? "active" : "disabled"}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </div>
      </div>
      <div
        onClick={toggleStateHandler}
        className={styled.QSection}
        status={activeQ === "section4" ? "active" : "disabled"}
        id="section4"
      >
        <div className={styled.QTitle}>
          <h4>What about other Chromium browsers?</h4>
          {activeQ === "section4" ? (
            <IoIosArrowUp className={styled.upIcon} />
          ) : (
            <IoIosArrowDown className={styled.downIcon} />
          )}
        </div>
        <div
          className={styled.QAnswer}
          status={activeQ === "section4" ? "active" : "disabled"}
        >
          <p>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQAccordion;
