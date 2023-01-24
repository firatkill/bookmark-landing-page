import React from "react";
import FooterCSS from "./Footer.module.css";
import Container from "../../UI/Container/Container";
import Button from "../../UI/Button/Button";
function Footer() {
  const styled = FooterCSS;
  return (
    <Container className={styled.footerContainer}>
      <div className={styled.navLinks}>
        <img alt="logo" src="/images/logo-bookmark.svg" />
        <Button className={styled.button} type="navlink">
          FEATURES
        </Button>
        <Button className={styled.button} type="navlink">
          PRICING
        </Button>
        <Button className={styled.button} type="navlink">
          CONTACT
        </Button>
      </div>
      <div className={styled.socialLinks}>
        <img alt="facebook" src="/images/icon-facebook.svg" />
        <img alt="twitter" src="/images/icon-twitter.svg" />
      </div>
    </Container>
  );
}

export default Footer;
