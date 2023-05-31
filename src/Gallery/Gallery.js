import React, { useContext } from "react";
import "./Gallery.css";
import { AppContext } from "../AppContext";

function Gallery() {
  const { navigateGalleryRef } = useContext(AppContext);

  return (
    <div ref={navigateGalleryRef} className="gallery-container">
      <h2>GALÉRIA</h2>
      <div className="gallery-image-container">
        <div className="gallery-column gallery-column-first">
          <div className="gallery-image-wrapper">
            <img src="/images/Web-Final/_MG_0119.jpg" alt="" />
          </div>
          <div className="gallery-image-wrapper">
            {" "}
            <img
              src="/images/Web-Final/288871589_560557992175338_7579320411222049849_n.jpg"
              alt=""
            />
          </div>
          <div className="gallery-image-wrapper">
            <img src="/images/sga.jpeg" alt="" />
          </div>
          <div className="gallery-image-wrapper">
            {" "}
            <img
              src="/images/Web-Final/288761355_560559318841872_5044857905237968695_n.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="gallery-column gallery-column-second">
          <div className="gallery-image-wrapper">
            <img src="/images/Web-Final/_MG_0298.jpg" alt="" />
          </div>
          <div className="gallery-image-wrapper">
            <img src="/images/Web-Final/_MG_9841.jpg" alt="" />
          </div>
          <div className="gallery-image-wrapper">
            <img src="/images/Web-Final/_MG_0052.jpg" alt="" />
          </div>
          <div className="gallery-image-wrapper">
            <img src="/images/Web-Final/_MG_0154.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
