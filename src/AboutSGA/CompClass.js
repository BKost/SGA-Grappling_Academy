import React from "react";
import Carousel from "./Carousel/Carousel";
import "./CompClass.css";

function CompClass() {
  return (
    <div className="about-sga-lower">
      <div className="competition-class">
        <h2>COMPETITION TEAM</h2>
        <p className="competition-text">
          Športovci, ktorí sa aktívne zúčastňujú na národných a medzinárodných
          súťažiach. Reprezentujú klub Slovak Grappling Academy a ich cieľom je
          vybudovať úspešnú kariéru v Grapplingu a MMA.
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
  );
}

export default CompClass;
