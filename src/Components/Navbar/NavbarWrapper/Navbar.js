import React, { useState } from "react";
import NavbarCSS from "./Navbar.module.css";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Redux/ui-Slice";
function Navbar() {
  const styled = NavbarCSS;

  const [width, setWidth] = useState(
    window.innerWidth < 600 ? "small" : "wide"
  );
  const dispatch = useDispatch();
  const handleResize = () => {
    if (window.innerWidth < 600 && width !== "small") {
      setWidth("small");
    } else if (window.innerWidth >= 600 && width !== "wide") {
      setWidth("wide");
    }
  };
  window.addEventListener("resize", handleResize);

  if (width === "wide") {
    return (
      <div className={styled.navbarContainer}>
        <div className={styled.logo}>
          <img src="/images/logo-bookmark.svg" />
        </div>
        <div className={styled.navLinks}>
          <Button type="navlink">FEATURES</Button>
          <Button type="navlink">PRICING</Button>
          <Button type="navlink">CONTACT</Button>
          <Button className={styled.loginButton} type="login">
            LOGIN
          </Button>
        </div>
      </div>
    );
  }

  const showModal = () => {
    dispatch(uiActions.toggleNavbarMobile());
  };

  return (
    <div className={styled.navbarContainer}>
      <div className={styled.logo}>
        <img src="/images/logo-bookmark.svg" />
      </div>
      <div className={styled.hamburger}>
        <img
          onClick={showModal}
          alt="hamburger"
          src="/images/icon-hamburger.svg"
        />
      </div>
    </div>
  );
}

export default Navbar;
