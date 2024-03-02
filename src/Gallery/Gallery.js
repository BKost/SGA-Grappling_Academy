import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <div id="gallery" className="gallery-container">
      <h2>GALÉRIA</h2>
      <div className="gallery-image-container">
        <div className="gallery-column gallery-column-first">
          <div className="gallery-image-wrapper">
            <img
              loading="lazy"
              src="/images/Web-Final/_MG_0119.jpg"
              alt="Grappling image"
            />
          </div>
          <div className="gallery-image-wrapper">
            <img
              loading="lazy"
              src="/images/Web-Final/288871589_560557992175338_7579320411222049849_n.jpg"
              alt="Grappling image"
            />
          </div>
          <div className="gallery-image-wrapper">
            <img loading="lazy" src="/images/sga.jpg" alt="Grappling image" />
          </div>
          <div className="gallery-image-wrapper">
            <img
              loading="lazy"
              src="/images/288707717_560559355508535_4496249360274897512_n.jpg"
              alt="Grappling image"
            />
          </div>
        </div>
        <div className="gallery-column gallery-column-second">
          <div className="gallery-image-wrapper">
            <img
              loading="lazy"
              src="/images/Web-Final/_MG_0298.jpg"
              alt="Grappling image"
            />
          </div>
          <div className="gallery-image-wrapper">
            <img
              loading="lazy"
              src="/images/Web-Final/_MG_9841.jpg"
              alt="Grappling image"
            />
          </div>
          <div className="gallery-image-wrapper">
            <img
              loading="lazy"
              src="/images/Web-Final/_MG_0052.jpg"
              alt="Grappling image"
            />
          </div>
          <div className="gallery-image-wrapper">
            <img
              loading="lazy"
              src="/images/289328445_560885608809243_2704188894120921463_n.jpg"
              alt="Grappling image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
