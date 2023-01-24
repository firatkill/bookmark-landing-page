import React, { useState, useRef } from "react";
import ContactSectionCSS from "./ContactSection.module.css";
import Container from "../../UI/Container/Container";
import Button from "../../UI/Button/Button";
import { BsCheckCircleFill } from "react-icons/bs";
function ContactSection() {
  const styled = ContactSectionCSS;
  const inputref = useRef();
  const [isShowIcon, setIsShowIcon] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputref.current.value !== "") {
      setIsShowIcon(true);
      setTimeout(() => {
        setIsShowIcon(false);
      }, 2000);
    }
  };
  return (
    <Container className={styled.contactSectionContainer} width="width__100">
      <div className={styled.wrapper}>
        <h6>35.000+ ALREADY JOINED</h6>
        <h2>Stay up-to-date with what we're doing</h2>
        <form
          status={isShowIcon ? "success" : "error"}
          onSubmit={submitHandler}
          className={styled.inputGroup}
        >
          <input ref={inputref} type="email" />
          <BsCheckCircleFill
            className={styled.icon}
            status={isShowIcon ? "show" : "hide"}
          />
          <Button
            className={
              isShowIcon ? `${styled.successButton}` : `${styled.Button}`
            }
            buttonType={"submit"}
            type="login"
          >
            Contact Us
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default ContactSection;
