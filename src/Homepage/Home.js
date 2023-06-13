import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="boxes">
        <div className="box-picture-on-left">
          <img
            src="/images/Web-Final/_MG_0167.jpg"
            alt=""
            className="image-left"
          />
          <div className="about-right">
            <div className="about-wrapper">
              <h2 className="box-title">GRAPPLING</h2>
              <p className="about-text about-text-right">
                Grappling, alebo aj No-Gi BJJ (Brazílske JiuJitsubez kimona) je
                bojový šport ktorého cieľom je donútiť súpera vzdať sa.
                Využívajú sa k tomu techniky označené anglickým výrazom
                submission, čo sú rôzne druhy škrtení a páčení. Ide primárne
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
                Hlavným cieľom jehodiť súpera aukontrolovaťhona zemi. Kontrola
                súperana jeholopatkáchvedie k víťazstvu. Wrestling patrí
                medziolympijske športy.
              </p>
            </div>
          </div>
        </div>
        <div className="box-picture-on-left">
          <img
            src="/images/Web-Final/_MG_0288.jpg"
            alt=""
            className="image-left"
          />
          <div className="about-right">
            <div className="about-wrapper">
              <h2 className="box-title">MMA</h2>
              <p className="about-text about-text-right">
                MMAjekontaktnýbojovýšport, umožňujúciúdery, kopy
                strhysúperanazem abojnazemi. Spájarôznetechnikyz ovšetkýchboj
                ovýchšportov.
              </p>
            </div>
          </div>
        </div>

        <div className="box-picture-on-right">
          <img
            src="/images/Web-Final/_MG_9396.jpg"
            alt=""
            className="image-right"
          />

          <div className="about-left">
            <div className="about-wrapper">
              <h2 className="box-title">FITNESS</h2>
              <div className="text-wrapper">
                <p className="about-text">
                  <span className="span-fitness">
                    Jediné Nonstop Fitness v Banskej Bystrici a okolí!
                  </span>
                  Obmedzený počet permanentiek zaručuje kľud a súkromie takže
                  naši klienti si môžu užiť fitko len pre seba kde nikto nebude
                  vzdychať a kričať a nemusia čakať kým sa im uvoľní pár
                  kotúčov, aby si mohli zacvičiť.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
