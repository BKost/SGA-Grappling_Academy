import React, { useRef, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";
import "./Header.css";
import Smoke from "../Effects/Smoke";

function Header() {
  const homeRefs = useRef([]);
  // const homeContainerRef = useRef();

  // const homeRef = useRef(null);

  const { setLogoOnScreen, setNavbarHidden, navigateHomeRef } =
    useContext(AppContext);

  useEffect(() => {
    const homeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.className === "home-header") {
          setNavbarHidden(false);
        } else if (
          !entry.isIntersecting &&
          entry.target.className === "home-header"
        ) {
          setNavbarHidden(true);
        }

        if (entry.isIntersecting && entry.target.className === "logo") {
          setLogoOnScreen(true);
        } else {
          setLogoOnScreen(false);
        }
      });
    });

    homeRefs.current.forEach((ref) => {
      if (ref) {
        homeObserver.observe(ref);
      }
    });

    return () => {
      homeObserver.disconnect();
    };
  }, []);

  return (
    <header ref={navigateHomeRef} className="home-header">
      <div ref={(el) => (homeRefs.current[0] = el)} className="logo">
        <img src="/images/Web-Final/SGA-Logo.png" alt="" />
      </div>

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
      <Smoke />
    </header>
  );
}

export default Header;
