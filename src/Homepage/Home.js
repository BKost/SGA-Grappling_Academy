import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="boxes">
        <div className="box-picture-on-left">
          <img
            src="/images/Web-Final/_MG_0167.jpg"
            alt="Grappling Image"
            className="image-left"
          />
          <div className="about-right">
            <div className="about-wrapper">
              <h2 className="box-title">GRAPPLING</h2>
              <p className="about-text about-text-right">
                Grappling, alebo aj No-Gi BJJ (Brazílske Jiu Jitsu bez kimona)
                je bojový šport ktorého cieľom je donútiť súpera vzdať sa.
                Využívajú sa k tomu techniky označené anglickým výrazom
                submission, čo sú rôzne druhy škrtení a páčení. Ide primárne o
                techniku boja na zemi.
              </p>
            </div>
          </div>
        </div>

        <div className="box-picture-on-right">
          <img
            src="/images/290925330_560885832142554_9108560897003858919_n.jpg"
            alt=""
            className="image-right"
          />

          <div className="about-left">
            <div className="about-wrapper">
              <h2 className="box-title wrestling-h2">WRESTLING</h2>
              <p className="about-text">
                Hlavným cieľom je hodiť súpera a ukontrolovať ho na zemi.
                Kontrola súpera na jeho lopatkách vedie k víťazstvu. Wrestling
                patrí medzi olympijské športy.
              </p>
            </div>
          </div>
        </div>
        <div className="box-picture-on-left">
          <img
            src="/images/Web-Final/_MG_0288.jpg"
            alt="Grappling Image"
            className="image-left"
          />
          <div className="about-right">
            <div className="about-wrapper">
              <h2 className="box-title">MMA</h2>
              <p className="about-text about-text-right">
                MMA je kontaktný bojový šport umožňujúci údery, kopy, strhy
                súpera na zem a boj na zemi. Spája rôzne techniky zo všetkých
                bojových športov.
              </p>
            </div>
          </div>
        </div>

        <div className="box-picture-on-right">
          <img
            src="/images/Web-Final/_MG_9396.jpg"
            alt="Grappling Image"
            className="image-right"
          />

          <div className="about-left">
            <div className="about-wrapper">
              <h2 className="box-title">NONSTOP FITNESS</h2>
              <div className="text-wrapper">
                <p className="about-text">
                  <span className="span-fitness">
                    Jediné Nonstop Fitness v Banskej Bystrici a okolí!
                  </span>
                  Máme bezkonkurenčne najnižšie ceny v Banskej Bystrici a sme
                  otvorení 24/7. Zaručujeme súkromie a pohodlie pri cvičení,
                  kvôli obmedzenému počtu permanentiek. Vďaka vlastným kľúčom si
                  budete môcť prísť zacvičiť aj o polnoci. Vybavenie fitka je
                  úplne nové a moderné.
                </p>
                <a
                  className=""
                  // href="https://www.instagram.com/slovak_grappling_academy/"
                  target="_blank"
                >
                  <p className="fitness-sign-button ">ZISTIŤ VIAC</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
