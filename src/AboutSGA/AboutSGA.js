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
      <div className="about-sga-lower">
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
      </div>

      {/* Carousel */}

      <Carousel />

      {/* Schedule */}
      <Schedule />

      {/* <div className="training-schedule-container">
        <h2 className="training-schedule-h2">ROZPIS TRÉNINGOV</h2>
        <div className="training-schedule-grid">
          <div className="schedule-column column-1">
            <div className="day">PONDELOK</div>

            <div className="comp-class class-div">
              <p>COMPETITION CLASS</p>
              <p>8:00 - 10:30</p>
            </div>

            <div className="comp-class class-div">
              <p>COMPETITION CLASS</p>
              <p>17:00 - 18:00</p>
            </div>

            <div className="grappling-class class-div">
              <p>GRAPPLING</p>
              <p>18:00 - 10:30</p>
            </div>
            <div className="mma-class class-div">
              <p>MMA</p>
              <p>8:00 - 10:30</p>
            </div>
          </div>
          <div className="schedule-column column-2">
            <div className="day">UTOROK</div>

            <div className="comp-class class-div">
              <p>COMPETITION CLASS</p>
              <p>8:00 - 10:30</p>
            </div>

            <div className="comp-class class-div">
              <p>COMPETITION CLASS</p>
              <p>8:00 - 10:30</p>
            </div>

            <div className="wrestling-class class-div">
              <p>WRESTLING</p>
              <p>8:00 - 10:30</p>
            </div>
            <div className="grappling-class class-div">
              <p>Grappling</p>
              <p>8:00 - 10:30</p>
            </div>
          </div>
          <div className="schedule-column column-3">
            {" "}
            <div className="day">STREDA</div>
            <div className="comp-class class-div">
              <p>COMPETITION CLASS</p>
              <p>8:00 - 10:30</p>
            </div>
            <div className="comp-class class-div">
              <p>COMPETITION CLASS</p>
              <p>8:00 - 10:30</p>
            </div>
            <div className="grappling-class class-div">
              <p>GRAPPLING</p>
              <p>8:00 - 10:30</p>
            </div>
            <div className="mma-class class-div">
              <p>MMA</p>
              <p>8:00 - 10:30</p>
            </div>
          </div>
          <div className="schedule-column column-4">
            {" "}
            <div className="day">ŠTVRTOK</div>
            <div className="comp-class class-div">
              <p>COMPETITION CLASS</p>
              <p>8:00 - 10:30</p>
            </div>
            <div className="comp-class class-div">
              <p>COMPETITION CLASS</p>
              <p>8:00 - 10:30</p>
            </div>
            <div className="wrestling-class  class-div">
              <p>WRESTLING</p>
              <p>8:00 - 10:30</p>
            </div>
            <div className="grappling-class class-div">
              <p>Grappling</p>
              <p>8:00 - 10:30</p>
            </div>
          </div>
          <div className="schedule-column column-5">
            {" "}
            <div className="day">PIATOK</div>
            <div className="comp-class class-div">
              <p>COMPETITION CLASS</p>
              <p>8:00 - 10:30</p>
            </div>
            <div className="comp-class class-div">
              <p>COMPETITION CLASS</p>
              <p>8:00 - 10:30</p>
            </div>
            <div className="sparring-class class-div">
              <p>SPARINGY</p>
              <p>8:00 - 10:30</p>
            </div>
            <div className="sparring-class class-div">
              <p>SPARINGY</p>
              <p>8:00 - 10:30</p>
            </div>
          </div>
        </div>
      </div> */}
      {/*  */}
    </div>
  );
}

export default AboutSGA;
