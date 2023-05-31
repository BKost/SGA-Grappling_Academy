import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="donate">
        <h2>DARUJTE NÁM 2%</h2>
        <p>
          Pomôžete na ceste mladím a nádejním športovcom a nebude vás to stáť
          ani cent. Poukázať 2% z vašich daní neznamená pre vás platbu či
          príspevok navyše. Ak si túto možnosť neuplatníte podiel z vašich daní
          pripadne do štátneho rozpočtu. Budeme veľmi radi ak podporíte svojimi
          2% náš klub. Financie používame na materiálne zabezpečenie klubu a
          vytvorenie lepších
        </p>
      </div>
      <p className="made-by">Vytvoril @bohdan_kosturik</p>
      <div className="contact-info">
        <p>Kontakt</p>
        <p>Email - slovakgrapplingacademy@gmail.com</p>
        <p>Telefón - 0915452310 / 0915452290</p>
        <div>
          <p>Údaje o občianskom združení</p>
          <p>Názov: SLOVAK GRAPPLING ACADEMY</p>
          <p>Adresa: Adresa: M.R. Štefánika 1397/54B, 960 01 Zvolen</p>
          <p>IČO: 53486269</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
