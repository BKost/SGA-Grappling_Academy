import Footer from "../Footer/Footer";
import "./Nonstop.css";

import { Link } from "react-router-dom";

function Nonstop() {
  return (
    <>
      <section className="fitness-container">
        <nav className="fitness-nav">
          <Link to="/">Späť na SGA</Link>
        </nav>
        <header className="fitness-header">
          <h1 className="fitness-heading">
            <span>JEDINÉ</span>NON STOP FITNESS
            <span>V BANSKEJ BYSTRICI</span>
          </h1>
        </header>
        <section className="fitness-about">
          <p>
            Naše <strong> Nonstop Fitness</strong> je prvou voľbou pre aktívny
            životný štýl a cvičenie kedykoľvek, kedy sa vám zachce. NON STOP
            FITNESS je otvorené 24/7, takže si kľudne môžete ísť zatrénovať
            <strong>aj o polnoci</strong>. Po zakúpení permanentky dostanete
            <strong>vlastné kľúče</strong>, čo vám umožňuje prístup k moderným a
            úplne novým priestorom počas celého dňa. S našimi bezkonkurenčne
            nízkymi cenami a možnosťou rôznych typov permanentiek - mesačných,
            trojmesačných, polročných a ročných, môžete prispôsobiť svoje
            členstvo svojim potrebám. S obmedzeným počtom permanentiek môžeme
            zaručiť súkromie a pokoj, ktorý potrebujete pri svojom cvičení.
          </p>
          <p>
            Priamo vo fitku sa nachádza samoobslužná chladnička s nápojmi, aby
            ste sa mohli osviežiť a doplniť energiu. K dispozícií je šatňa so
            sprchou a toaletou pre vaše pohodlie a čistotu po cvičení. Okrem
            toho, pre našich členov je k dispozícii bezplatné parkovisko pred
            budovou, aby ste mohli prísť a cvičiť bezstarostne. Pridajte sa k
            nám, zmeňte svoj životný štýl a žite zdravšie! Tešíme sa na vás.
          </p>
          <p>
            Ak ešte len začínate s cvičením, nemáte čas vymýšľať a pripravovať
            si tréningy, alebo len chcete čo najefektívnejšie využiť svoj čas a
            maximalizovať progres využite možnosť súkromných tréningov s jedným
            z našich profesionálnych trénerov.
          </p>
        </section>
        <section className="fitness-coach-card">
          <img
            className="coach-image"
            src="/images/nonstop-fitness/_MG_1822.jpg"
            alt="Radoslav Madoš"
          />
          <div className="coach-about">
            <h2>Trénujte pod dohľadom profíkov</h2>
            <h3>Osobný tréner Radoslav Madoš</h3>
            <p>
              O fitness som sa začal zaujímať v 16 rokoch počas štúdia na
              strednej škole. Chcel som sa tomu naplno venovať avšak vždy sa
              našlo niečo, čo to prerušilo. V roku 2022 som sa pevne rozhodol,
              že cvičenie je to, čo ma baví čo ma napĺňa a z toho dôvodu som sa
              prihlásil na kurz certifikovaného kondičného trénera a úspešne ho
              absolvoval. Od tej doby sa venujem cvičeniu naplno, každý deň sa
              vzdelávam, aby som vám, mojim klientom, poskytol to najlepšie čo
              sa dá. Váš cieľ je na prvom mieste. Či už chcete schudnúť,
              pribrať, vyformovať si postavu, zosilnieť, alebo ste športovec
              ktorý sa chce zamerať na špeciálnu kondičnú prípravu vo svojom
              športe, som tu pre vás. Mám rád pestré tréningy, rád vymýšlam
              nové, ale zároveň efektívne cvičenia pre dosiahnutie vášho cieľa.
              Neodkladajte to rovnako ako kedysi ja, ak vás cvičenie baví, alebo
              chcete vyzerať a cítiť sa lepšie, začnite teraz! Sľubujem vám, že
              budete mať zo seba skvelý pocit. :)
            </p>
          </div>
        </section>
        <section className="fitness-pricing">
          <h2>Cenník</h2>

          <div className="price-tags-wrapper">
            <div className="price-tag">
              <h3>Mesačná permanentka</h3>
              <p>25€</p>
            </div>
            <div className="price-tag">
              <h3>Trojmesačná permanentka</h3>
              <p>60€</p>
            </div>
            <div className="price-tag">
              <h3>Polročná permanentka</h3>
              <p>100€</p>
            </div>
            <div className="price-tag">
              <h3>Ročná permanentka</h3>
              <p>160€</p>
            </div>
          </div>
        </section>
        <section className="fitness-gallery">
          <h2>Ako to u nás vyzerá ?</h2>
          <div className="fitness-gallery-container">
            <div className="grid-item">
              <img
                className="fitness-gallery-image"
                src="/images/nonstop-fitness/_MG_8929-min.jpg"
                alt="Gym equipment"
              />
            </div>
            <div className="grid-item">
              <img
                className="fitness-gallery-image"
                src="/images/nonstop-fitness/_MG_8995-min.jpg"
                alt="Gym equipment"
              />
            </div>
            <div className="grid-item two-columns">
              <img
                className="fitness-gallery-image"
                src="/images/nonstop-fitness/_MG_9078-min.jpg"
                alt="Gym equipment"
              />
            </div>
            <div className="grid-item two-columns">
              <img
                className="fitness-gallery-image"
                src="/images/nonstop-fitness/_MG_9091-min.jpg"
                alt="Gym equipment"
              />
            </div>
            <div className="grid-item">
              <img
                className="fitness-gallery-image"
                src="/images/nonstop-fitness/_MG_9203-min.jpg"
                alt="Gym equipment"
              />
            </div>
            <div className="grid-item two-rows">
              <img
                className="fitness-gallery-image"
                src="/images/nonstop-fitness/_MG_9149-min.jpg"
                alt="Gym equipment"
              />
            </div>

            <div className="grid-item">
              <img
                className="fitness-gallery-image"
                src="/images/nonstop-fitness/_MG_9265-min.jpg"
                alt="Gym equipment"
              />
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
export default Nonstop;
