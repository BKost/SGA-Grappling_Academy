import React, { useRef, useEffect, useState } from "react";
import "./Carousel.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useScreenWidth from "../../hooks/screenWidth";

function Carousel() {
  const carouselRef = useRef(null);

  const itemsRefs = useRef([]);

  const { screenWidth } = useScreenWidth();

  useEffect(() => {
    carouselRef.current.scrollLeft = 0;
  }, [screenWidth]);

  function swipe(direction) {
    let devider = 3;

    if (screenWidth < 1230) {
      devider = 2;
    }

    if (screenWidth < 685) {
      devider = 1;
    }

    const scroll = itemsRefs.current[0].offsetWidth * devider;

    carouselRef.current.scrollTo({
      left:
        direction === "right" ? centerSwipe() + scroll : centerSwipe() - scroll,
      behavior: "smooth",
    });
  }

  function centerSwipe() {
    const { scrollLeft, children, scrollWidth } = carouselRef.current;

    const buttonsInCHildrenArr = 2;

    const itemsWithoutButtons = children.length - buttonsInCHildrenArr;

    const carouselScrollLeft = scrollLeft;
    const itemWidth = scrollWidth / itemsWithoutButtons;

    const ratio = carouselScrollLeft / itemWidth;

    const ratioNoDecimal = Number(ratio.toFixed(0));

    return ratioNoDecimal * itemWidth;
  }

  const [btnLeftHovered, setBtnLeftHovered] = useState(false);
  const [btnRightHovered, setBtnRightHovered] = useState(false);

  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);

  useEffect(() => {
    function updateBtnLeft() {
      setBtnLeftHovered((prev) => !prev);
    }

    function updateBtnRight() {
      setBtnRightHovered((prev) => !prev);
    }

    btnLeftRef.current.addEventListener("mouseenter", updateBtnLeft);
    btnLeftRef.current.addEventListener("mouseleave", updateBtnLeft);

    btnRightRef.current.addEventListener("mouseenter", updateBtnRight);
    btnRightRef.current.addEventListener("mouseleave", updateBtnRight);

    return () => {
      btnLeftRef.current.removeEventListener("mouseenter", updateBtnLeft);
      btnLeftRef.current.removeEventListener("mouseleave", updateBtnLeft);

      btnRightRef.current.removeEventListener("mouseenter", updateBtnRight);
      btnRightRef.current.removeEventListener("mouseleave", updateBtnRight);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div ref={carouselRef} className="athletes-carousel">
        <div
          ref={btnLeftRef}
          onClick={() => swipe("left")}
          className="arrow-wrapper left"
        >
          <ArrowBackIosNewIcon
            fontSize="large"
            className={`carousel-btn left ${
              btnLeftHovered && "carousel-btn-hover"
            } `}
          />
        </div>
        <div
          ref={btnRightRef}
          onClick={() => swipe("right")}
          className="arrow-wrapper right"
        >
          <ArrowForwardIosIcon
            fontSize="large"
            className={`carousel-btn right ${
              btnRightHovered && "carousel-btn-hover"
            } `}
          />
        </div>

        <div
          ref={(el) => (itemsRefs.current[0] = el)}
          className="slider-item-spacing-wrapper  slider-item-spacing-wrapper-first"
        >
          <div className="slider-item">
            <img src="/images/Web-Final/_MG_9521.jpg" alt="" />
            <div className="about-slider-item">
              <div className="slider-item-text">
                <h2>MICHAL MARUŠKIN</h2>
                <h3>ZÁPASNÍK</h3>
                <a
                  target="_blank
                "
                  href="https://www.instagram.com/michal_maruskin/"
                >
                  <InstagramIcon
                    fontSize="large"
                    className="slider-item-insta-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (itemsRefs.current[1] = el)}
          className="slider-item-spacing-wrapper"
        >
          <div className="slider-item">
            <img src="/images/Web-Final/_MG_9868.jpg" alt="Adam Hank" />
            <div className="about-slider-item">
              <div className="slider-item-text">
                <h2>ADAM HANK</h2>
                <h3>ZÁPASNÍK</h3>
                <a
                  target="_blank
                "
                  href="https://www.instagram.com/adamhank/"
                >
                  <InstagramIcon
                    fontSize="large"
                    className="slider-item-insta-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={(el) => (itemsRefs.current[2] = el)}
          className="slider-item-spacing-wrapper"
        >
          <div className="slider-item">
            <img src="/images/Web-Final/_MG_9551.jpg" alt="Tomáš Ondriš" />
            <div className="about-slider-item">
              <div className="slider-item-text">
                <h2>TOMÁŠ ONDRIS</h2>
                <h3>ZÁPASNÍK A HLAVNÝ TRÉNER</h3>
                <a
                  target="_blank
                "
                  href="https://www.instagram.com/tomas_ondris/
                  "
                >
                  <InstagramIcon
                    fontSize="large"
                    className="slider-item-insta-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={(el) => (itemsRefs.current[3] = el)}
          className="slider-item-spacing-wrapper"
        >
          <div className="slider-item">
            <img src={"/images/_MG_9565.jpg"} alt="Nino Ondriš" />
            <div className="about-slider-item">
              <div className="slider-item-text">
                <h2>NINO ONDRIS</h2>
                <h3>ZÁPASNÍK A HLAVNÝ TRÉNER</h3>
                <a
                  target="_blank
                "
                  href="https://www.instagram.com/ninoondris/
                  "
                >
                  <InstagramIcon
                    fontSize="large"
                    className="slider-item-insta-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={(el) => (itemsRefs.current[4] = el)}
          className="slider-item-spacing-wrapper"
        >
          <div className="slider-item">
            <img src="/images/Web-Final/_MG_9530.jpg" alt="Michal Bušovský" />
            <div className="about-slider-item">
              <div className="slider-item-text">
                <h2>MICHAL BUŠOVSKÝ</h2>
                <h3>ZÁPASNÍK</h3>
                <a
                  target="_blank
                "
                  href="https://www.instagram.com/michal_busovsky/"
                >
                  <InstagramIcon
                    fontSize="large"
                    className="slider-item-insta-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={(el) => (itemsRefs.current[5] = el)}
          className="slider-item-spacing-wrapper  slider-item-spacing-wrapper-last"
        >
          <div className="slider-item">
            <img src="/images/Web-Final/_MG_9891.jpg" alt="Michal Žubor" />
            <div className="about-slider-item">
              <div className="slider-item-text">
                <h2>MICHAL ŽUBOR</h2>
                <h3>ZÁPASNÍK</h3>
                <a
                  target="_blank
                "
                  href="https://www.instagram.com/gnrlzubro/"
                >
                  <InstagramIcon
                    fontSize="large"
                    className="slider-item-insta-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (itemsRefs.current[6] = el)}
          className="slider-item-spacing-wrapper  slider-item-spacing-wrapper-last"
        >
          <div className="slider-item">
            <img src="/images/Web-Final/_MG_9504.jpg" alt="Peter Kováč" />
            <div className="about-slider-item">
              <div className="slider-item-text">
                <h2>PETER KOVÁČ</h2>
                <h3>ZÁPASNÍK A TRÉNER</h3>
                <a
                  target="_blank
                "
                  href="https://www.instagram.com/kpt.peter_kovac/"
                >
                  <InstagramIcon
                    fontSize="large"
                    className="slider-item-insta-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
