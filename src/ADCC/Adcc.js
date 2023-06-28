import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "./Adcc.css";

function Adcc() {
  const { navigateADCCRef } = useContext(AppContext);

  return (
    <div ref={navigateADCCRef} className="adcc-container">
      <div className="about-adcc">
        <div className="adcc-headings-wrapper">
          <img
            className="logo-adcc"
            src="/images/ADCC_logo.png"
            alt="ADCC logo"
          />
          <h2 className="adcc-heading">ADCC SLOVAKIA</h2>
        </div>
        <p className="adcc-text">
          Najväčšia svetová organizácia v Grapplingu je konečne aj na Slovensku
          a sme hrdí nato, že práve my máme tú česť organizovať pre Vás nadupané
          turnaje, za ktorými nemusíte cestovať stovky kilometrov! Sleduj
          instagram ADCC Slovakia, kde sa dozvieš všetko o nás, o turnajoch,
          rozhodcovských seminárov, atď...
        </p>
      </div>
      <div className="adcc-photos-container">
        <div className="adcc-photos-column adcc-photos-column-1">
          <div className="adcc-image-wrapper">
            <img
              src={
                "/images/adcc-grid/315956845_143382781785089_7945903929798288806_n.jpg"
              }
              alt="Photo 1"
              className="grid-img grid-img-2"
            />
          </div>
          <div className="adcc-image-wrapper">
            <img
              src={
                "/images/adcc-grid/316104535_143998311723536_8283454690020400950_n.jpg"
              }
              alt="Photo 2"
              className="grid-img grid-img-3 "
            />
          </div>
          <div className="adcc-image-wrapper">
            <img
              src={
                "/images/adcc-grid/314966486_140676925389008_7435392260590340910_n.jpg"
              }
              alt="Photo 3"
              className="grid-img grid-img-1 "
            />
          </div>
        </div>

        <div className="adcc-photos-column adcc-photos-column-2">
          <div className="adcc-image-wrapper">
            <img
              src="/images/289268031_560886225475848_7356325068166042758_n.jpg"
              alt="Photo 4"
              className="grid-img"
            />
          </div>
          <div className="adcc-image-wrapper">
            <img
              src={
                "/images/adcc-grid/316131300_144001198389914_4552423858117053979_n.jpg"
              }
              alt="Photo 5"
              className="grid-img grid-img-4 "
            />
          </div>
          <div className="adcc-image-wrapper">
            <img
              src="/images/288844552_560559398841864_1914012904678492250_n.jpg"
              alt="Photo 6"
              className="grid-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adcc;
