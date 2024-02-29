import React from "react";
import "./Navbar.css";
import useScreenWidth from "../hooks/screenWidth";
import useScreenScroll from "../hooks/screenScroll";
import { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { AppContext } from "../AppContext";
import useHover from "../hooks/isHovered";
import { Link } from "react-router-dom";

function Navbar() {
  const { logoOnScreen } = useContext(AppContext);

  const { screenWidth } = useScreenWidth();
  const { scrollDirection, currentScrollPos } = useScreenScroll();

  const { isHovered, hoverRef } = useHover();

  const [menuOpened, setMenuOpened] = useState(false);
  const [navTime, setNavTime] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);

  useEffect(() => {
    screenWidth <= 995 && setNavTime(0);

    const navbarTimer = setInterval(() => {
      setNavTime((time) => {
        if (screenWidth <= 995) {
          clearInterval(navbarTimer);
          setNavTime(0);
          return time;
        }

        if (time !== 1) {
          return time + 1;
        }

        if (time === 1 && currentScrollPos > 700 && isHovered === false) {
          setNavbarHidden(true);
          setNavTime(0);
          clearInterval(navbarTimer);
          return time;
        }

        if (time === 1 && currentScrollPos > 700 && isHovered === true) {
          setNavTime(0);
          clearInterval(navbarTimer);
          return time;
        }

        if (time === 1 && currentScrollPos <= 700) {
          clearInterval(navbarTimer);
          return time;
        }
      });
    }, 1000);

    return () => {
      clearInterval(navbarTimer);
    };
  }, [currentScrollPos, isHovered]);

  useEffect(() => {
    if (scrollDirection === "down" && currentScrollPos > 700) {
      setNavbarHidden(true);
    }

    if (currentScrollPos > 700) {
      setNavbarHidden(false);
    }
  }, [currentScrollPos, scrollDirection]);

  function updateMobileMenu() {
    setMenuOpened(!menuOpened);
  }

  // function navigate(location, offset = 90) {
  //   const elementRectTop = location?.current.getBoundingClientRect().top;
  //   const bodyRectTop = document.body.getBoundingClientRect().top;

  //   window.scrollTo({
  //     behavior: "smooth",
  //     top: elementRectTop - bodyRectTop - offset,
  //   });
  // }

  return (
    <div
      ref={hoverRef}
      className={`nav-container  ${currentScrollPos > 10 && "add-shadow"} ${
        navbarHidden && "nav-container-hidden"
      } `}
    >
      {screenWidth > 995 && (
        <nav className="navigation">
          <img
            className={`navbar-logo-closed ${
              currentScrollPos > 10 && " navbar-logo-opened"
            }`}
            src="/images/Web-Final/SGA-Logo.png"
            alt=""
          />
          <ul className="navigation-ul">
            <a href="#about">
              <li
                // onClick={() => navigate(navigateSGARef)}
                className="nav-item"
              >
                O KLUBE
              </li>
            </a>
            <a href="#schedule">
              <li
                // onClick={() => navigate(navigateTrainingScheduleRef)}
                className="nav-item"
              >
                ROZPIS TRÉNINGOV
              </li>
            </a>
            <a href="#pricing">
              <li
                // onClick={() => navigate(navigatePricingRef)}
                className="nav-item"
              >
                CENNÍK
              </li>
            </a>
            <Link to="/nonstop">
              <li
                // onClick={() => navigate(navigateHomeRef)}
                className="nav-item"
              >
                NONSTOP FITNESS
              </li>
            </Link>
            <a href="#adcc">
              <li
                // onClick={() => {
                //   navigate(navigateADCCRef);
                // }}
                className="nav-item"
              >
                ADCC
              </li>
            </a>
            <a href="#gallery">
              <li
                // onClick={() => navigate(navigateGalleryRef)}
                className="nav-item"
              >
                GALÉRIA
              </li>
            </a>
            <a href="#contact">
              <li
                // onClick={() => navigate(navigateContactRef)}
                className="nav-item"
              >
                KONTAKT
              </li>
            </a>
          </ul>
        </nav>
      )}

      {screenWidth <= 995 && (
        <nav className="navigation">
          <img
            className={`navbar-logo-closed ${
              !logoOnScreen && " navbar-logo-opened"
            }`}
            src="/images/Web-Final/SGA-Logo.png"
            alt=""
          />

          {menuOpened ? (
            <CloseIcon
              onClick={updateMobileMenu}
              fontSize="large"
              className="mobile-menu-close-icon"
            />
          ) : (
            <MenuIcon
              onClick={updateMobileMenu}
              fontSize="large"
              className="mobile-menu-icon"
            />
          )}
        </nav>
      )}

      {screenWidth <= 995 && (
        <nav
          className={`mobile-navigation   ${
            !menuOpened && "mobile-navigation-closed"
          }`}
        >
          <div
            onClick={updateMobileMenu}
            className={`touch-to-close ${
              !menuOpened && "touch-to-close-closed"
            }`}
          ></div>

          <ul className="mobile-navigation-ul">
            <li
              // onClick={() => {
              //   navigate(navigateSGARef);
              // }}
              className="mobile-nav-item"
            >
              O KLUBE
            </li>
            <li
              // onClick={() => {
              //   navigate(navigateTrainingScheduleRef);
              // }}
              className="mobile-nav-item"
            >
              ROZPIS TRÉNINGOV
            </li>
            <li
              // onClick={() => {
              //   navigate(navigatePricingRef);
              // }}
              className="mobile-nav-item"
            >
              CENNÍK
            </li>
            <a href="/nonstop/fitness.html">
              <li className="mobile-nav-item">NONSTOP FITNESS</li>
            </a>
            <li
              // onClick={() => {
              //   navigate(navigateADCCRef);
              // }}
              className="mobile-nav-item"
            >
              ADCC
            </li>
            <li
              // onClick={() => {
              //   navigate(navigateGalleryRef);
              // }}
              className="mobile-nav-item"
            >
              GALÉRIA
            </li>
            <li
              // onClick={() => {
              //   navigate(navigateContactRef);
              // }}
              className="mobile-nav-item"
            >
              KONTAKT
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
