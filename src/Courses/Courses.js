import React from "react";
import "./Courses.css";

function Courses() {
  return (
    <section className="courses-container">
      <div className="courses-wrapper">
        <h2 className="courses-heading courses-heading-before-fix">
          KURZY PRE ZAČIATOČNÍKOV
        </h2>
        <p className="courses-text">
          Výborný štart do bojových športov, kde sa naučíš základné techniky z
          MMA, Grapplingu a Wrestlingu. Naokolo teba budú len začiatočníci,
          ktorí takisto ako ty majú radi bojové športy, takže spolu s novými
          skúsenosťami budeš aj v super partii, kde je vždy o čom pokecať. Takže
          ak máš záujem skúsiť bojové športy, tieto kurzy sú práve pre teba.
        </p>
        <a
          className="courses-sign-btn-a"
          href="https://www.instagram.com/slovak_grappling_academy/"
          target="_blank"
        >
          <p className="sign-button">PRIHLÁSIŤ SA</p>
        </a>
      </div>
      <img
        className="courses-img"
        src="/images/289268031_560886225475848_7356325068166042758_n.jpg"
        alt="Grappling image"
      />
    </section>
  );
}

export default Courses;
