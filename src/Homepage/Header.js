import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "./Header.css";

function Header() {
  const { navigateHomeRef } = useContext(AppContext);

  return (
    <header ref={navigateHomeRef} className="home-header">
      <div className="header-content-wrapper">
        <div className="main-sign-container">
          <h1 className="main-sign-h1">
            <span className="main-sign-span main-sign-span-first"> SLOVAK</span>{" "}
            <br />
            <span className="main-sign-span-second ">GRAPPLING</span> <br />
            <span className="main-sign-span main-sign-span-third">
              - ACADEMY -
            </span>
          </h1>
        </div>
        <img
          className="home-main-image"
          src="/images/Web-Final/main2.png"
          alt="Main image"
        />
      </div>
      <div className="overlay"></div>
    </header>
  );
}

export default Header;
