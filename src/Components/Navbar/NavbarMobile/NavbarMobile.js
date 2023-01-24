import React from "react";
import { ImCross } from "react-icons/im";
import NavbarMobileCSS from "./NavbarMobile.module.css";
import { uiActions } from "../../../Redux/ui-Slice";
import { useSelector, useDispatch } from "react-redux";
function NavbarMobile(props) {
  const styled = NavbarMobileCSS;
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.isShowNavbarMobile);
  if (!show) {
    return null;
  }
  const closeHandler = () => {
    dispatch(uiActions.toggleNavbarMobile());
  };
  return (
    <div className={styled.NavbarMobileContainer} onClick={closeHandler}>
      <div
        className={styled.NavbarMobileContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styled.NavbarMain}>
          <div className={styled.logo}>
            <img alt="logo" src="/images/logo-bookmark.svg" />
            <ImCross className={styled.closeIcon} onClick={closeHandler} />
          </div>
          <div className={styled.navLinks}>
            <h2>FEATURES</h2>
            <h2>PRICING</h2>
            <h2>CONTACT</h2>
            <button className={styled.loginButton}>LOGIN</button>
          </div>
        </div>
        <div className={styled.socialLinks}>
          <img alt="facebook" src="/images/icon-facebook.svg" />
          <img alt="twitter" src="/images/icon-twitter.svg" />
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
