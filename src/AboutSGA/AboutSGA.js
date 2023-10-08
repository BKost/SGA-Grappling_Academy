import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "./AboutSGA.css";
import Carousel from "./Carousel/Carousel.js";
import StatsPoster from "./StatsPoster/StatsPoster.js";
import Schedule from "./Schedule/Schedule";

function AboutSGA() {
  const { navigateSGARef } = useContext(AppContext);

  return (
    <div ref={navigateSGARef} className="about-sga-container">
      <div className="about-sga-upper">
        <div className="about-sga-text-container">
          <h2>O KLUBE SGA</h2>
          <div className="about-sga-text">
            <p>
              Sme najúspešnejší klub v BJJ a Grapplingu v Banskej Bystrici a
              jeden z najlepších a najaktívnejších klubov na Slovensku so
              širokou zápasníckou základňou.
              <br />
              Stali sme sa prvým oficiálnym ADCC klubom na Slovensku.
            </p>
            <p>
              Hlavným cieľom klubu je vychovávať profesionálnych športovcov a
              pomôcť im na ich ceste na vrchol.
              <br /> Zabezpečujeme najlepšie podmienky pre ich rozvoj vo
              všetkých oblastiach. Či uz chceš trénovať pre radosť, dostať sa do
              formy alebo sa stať profesionálnym zápasníkom, naša akadémia je tu
              pre teba.
            </p>
          </div>
        </div>
      </div>
      <StatsPoster />
      {/* <div className="about-sga-lower">
        <div className="competition-class">
          <h2>COMPETITION TEAM</h2>
          <p className="competition-text">
            Športovci,ktorý sa aktívne zúčastňujú na národných a medzinárodných
            súťažiach. Reprezentujú klub Slovak Grappling Academy a ich cieľom
            je vybudovať úspešnú kariéru v Grapplingu a MMA.
          </p>
        </div>
        <div className="competition-team">
          <h3>COMPETITION CLASS</h3>
          <p className="competition-text">
            Tréningy zamerané na sparing, pokročilé techniky a ich detailný
            rozbor. Cieľom Competition class je príprava zápasníkov na súťaže.
            Tieto hodiny sú len pre aktívnych zápasníkov reprezentujúcich klub a
            sú len na pozvánku jedného z hlavných inštruktorov. Všetky hodiny
            Competition class sú zadarmo.
          </p>
        </div>
      </div> */}

      {/* <Carousel />

      <Schedule /> */}
    </div>
  );
}

export default AboutSGA;
