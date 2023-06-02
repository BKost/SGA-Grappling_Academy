import React from "react";
import "./Navbar.css";
import useScreenWidth from "../hooks/screenWidth";
import useScreenScroll from "../hooks/screenScroll";
import { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { AppContext } from "../AppContext";
import useHover from "../hooks/isHovered";

function Navbar() {
  const {
    logoOnScreen,
    // navbarHidden,
    // setNavbarHidden,
    navigateHomeRef,
    navigateADCCRef,
    navigateSGARef,
    navigateGalleryRef,
  } = useContext(AppContext);

  const { screenWidth } = useScreenWidth();
  const { scrollDirection, currentScrollPos } = useScreenScroll();

  const { isHovered, hoverRef } = useHover();

  const [menuOpened, setMenuOpened] = useState(false);
  const [navTime, setNavTime] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);

  console.log(navigateADCCRef.current);

  useEffect(() => {
    screenWidth <= 655 && setNavTime(0);

    const navbarTimer = setInterval(() => {
      setNavTime((time) => {
        if (screenWidth <= 655) {
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
          // setNavTime(0);
          clearInterval(navbarTimer);
          return time;
        }
      });
    }, 1000);

    return () => {
      clearInterval(navbarTimer);
    };
  }, [currentScrollPos, isHovered]);

  //
  //
  //

  useEffect(() => {
    if (scrollDirection === "down" && currentScrollPos > 700) {
      setNavbarHidden(true);
    }

    if (
      // scrollDirection === "up" &&
      currentScrollPos > 700
    ) {
      setNavbarHidden(false);
    }
  }, [currentScrollPos, scrollDirection]);

  function updateMobileMenu() {
    setMenuOpened(!menuOpened);
  }

  function navigate(location, offset = 90) {
    const elementRectTop = location.current.getBoundingClientRect().top;
    const bodyRectTop = document.body.getBoundingClientRect().top;

    // const chooseOffset = scrollDirection === "down" ? 0 : offset;

    window.scrollTo({
      behavior: "smooth",
      top: elementRectTop - bodyRectTop - offset,
    });

    // console.log(elementRectTop - bodyRectTop - offset);
    // console.log(bodyRectTop);
    // console.log(elementRectTop);
  }

  return (
    <div
      ref={hoverRef}
      className={`nav-container  ${!logoOnScreen && "add-shadow"} ${
        navbarHidden && "nav-container-hidden"
      } `}
    >
      {screenWidth > 655 && (
        <nav className="navigation">
          <img
            className={`navbar-logo-closed ${
              !logoOnScreen && " navbar-logo-opened"
            }`}
            src="/images\Web-Final\SGA-Logo.png"
            alt=""
          />
          <ul className="navigation-ul">
            <li onClick={() => navigate(navigateHomeRef)} className="nav-item">
              DOMOV
            </li>
            <li
              onClick={() => {
                navigate(navigateADCCRef);
              }}
              className="nav-item"
            >
              ADCC
            </li>
            <li onClick={() => navigate(navigateSGARef)} className="nav-item">
              SGA
            </li>
            <li
              onClick={() => navigate(navigateGalleryRef)}
              className="nav-item"
            >
              GALÉRIA
            </li>
            <li
              // onClick={() => navigate(navigateContactRef)}
              className="nav-item"
            >
              KONTAKT
            </li>
          </ul>
        </nav>
      )}

      {screenWidth <= 655 && (
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

      {screenWidth <= 655 && (
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
              onClick={() => {
                navigate(navigateHomeRef);
                // setMenuOpened(false);
              }}
              className="mobile-nav-item"
            >
              DOMOV
            </li>
            <li
              onClick={() => {
                navigate(navigateADCCRef);
                // setMenuOpened(false);
              }}
              className="mobile-nav-item"
            >
              ADCC
            </li>
            <li
              onClick={() => {
                navigate(navigateSGARef);
                // setMenuOpened(false);
              }}
              className="mobile-nav-item"
            >
              SGA
            </li>
            <li
              onClick={() => {
                navigate(navigateGalleryRef);
                // setMenuOpened(false);
              }}
              className="mobile-nav-item"
            >
              GALÉRIA
            </li>
            <li
              onClick={() => {
                // navigate(navigateContactRef);
                // setMenuOpened(false);
              }}
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
