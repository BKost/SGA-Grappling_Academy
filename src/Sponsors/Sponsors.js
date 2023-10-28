import React from "react";
import "./Sponsors.css";

function Sponsors() {
  return (
    <div className="sponsors-container">
      <h2>SPONZORI</h2>
      <div className="sponsors">
        <a target="_blank" href="https://ememejtalenty.sk/">
          <img
            loading="lazy"
            src="/images/Sponsors-images/ememej-talenty-logo-final-(1).png"
            alt=""
            className="sponsors-img"
          />
        </a>
        <a target="_blank" href="https://fightportal.eu/">
          <img
            loading="lazy"
            src="/images/Sponsors-images/fightportal.png"
            alt=""
            className="sponsors-img"
          />
        </a>
        <a target="_blank" href="https://www.barnys.sk/">
          <img
            loading="lazy"
            src="/images/Sponsors-images/Logotyp-Barny_s-R2.png"
            alt=""
            className="sponsors-img"
          />
        </a>
        <a target="_blank" href="https://www.parketfam.sk/">
          <img
            loading="lazy"
            src="/images/Sponsors-images/parketfam_logo.png"
            alt=""
            className="sponsors-img"
          />
        </a>
        <a target="_blank" href="https://pitbullstore.eu/">
          <img
            loading="lazy"
            src="/images/Sponsors-images/pitbull-black.png"
            alt=""
            className="sponsors-img"
          />
        </a>
        <a target="_blank" href="https://www.timberwoodsk.com/">
          <img
            loading="lazy"
            src="/images/Sponsors-images/Timberwood_logo.png"
            alt=""
            className="sponsors-img"
          />
        </a>
        <a target="_blank" href="https://www.tryenough.work/">
          <img
            loading="lazy"
            src="/images/Sponsors-images/try enough logo biele(1).png"
            alt=""
            className="sponsors-img"
          />
        </a>
        <a target="_blank" href="https://fitlineobchod.sk/">
          <img
            loading="lazy"
            src="/images/Sponsors-images/wwwfitline-(1).png"
            alt=""
            className="sponsors-img"
          />
        </a>
      </div>
      <div className="space-for-sponsors">
        <h2>PRIESTOR PRE NOVÝCH SPONZOROV</h2>
        <p>
          Cieľom klubu je zabezpečiť pre našich zverencov čo najlepšie
          podmienky, a keďže šport na Slovensku nie je dotovaný dostatočnou
          mierou, budeme veľmi radi ak sa pridáte s nami na cestu bojových
          športov. Sme otvorení novým spoluprácam. Prostredníctvom nášho klubu a
          zápasníkov sa tvoje logo firmy, prípadne meno objaví po celej Európe
          na prestížnych turnajoch, v článkoch a príspevkoch na soc. sieťach.
        </p>
      </div>
    </div>
  );
}

export default Sponsors;
