import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <footer className="footer-container">
      <h2 className="footer-main-h2">DARUJTE NÁM 2% Z DANÍ</h2>
      <p className="two-percent-paragraph">
        Pomôžete na ceste mladím a nádejním športovcom a nebude vás to stáť ani
        cent. Poukázať 2% z vašich daní neznamená pre vás platbu či príspevok
        navyše. Ak si túto možnosť neuplatníte, podiel z vašich daní pripadne do
        štátneho rozpočtu. Budeme veľmi radi ak podporíte svojimi 2% náš klub.
        Financie používame na materiálne zabezpečenie klubu a vytvorenie lepších
        podmienok pre našich zverencov.
      </p>
      <div className="oz-info">
        <h3>Údaje o občianskom združení</h3>
        <p>Názov - Slovak Grappling Academy</p>
        <p>Adresa - M.R. Štefánika 1397/54B, 960 01 Zvolen</p>
        <p>IČO - 53486269</p>
      </div>
      <img
        className="footer-img"
        src="/images/290360163_560885645475906_8692948988504378136_n.jpg"
        alt=""
      />

      <div className="contact-info-wrapper">
        <div className="contact-info-container">
          <h3>Kontaktné info:</h3>

          <p>Slovak Grappling Academy</p>
          <p>M.R. Štefánika 1397/54B, 960 01 Zvolen</p>
          <p>Email: slovakgrapplingacademy@gmail.com</p>
          <p>Telefónny kontakt: +421 915 452 310 / +421 915 452 290</p>
        </div>

        <div className="adcc-moto-container">
          <img src="/images/ADCC_logo.png" alt="" />
          <p>
            "Fight hard, fair, and
            <br /> always for the win"
          </p>
        </div>
      </div>
      <div className="footer-icons-container">
        <InstagramIcon className="footer-icon" fontSize="large" />
        <WhatsAppIcon className="footer-icon" fontSize="large" />
        <FacebookIcon className="footer-icon" fontSize="large" />
      </div>
    </footer>
  );
}

export default Footer;
