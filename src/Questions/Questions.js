import React from "react";

import "./Questions.css";

function Questions() {
  // const answerRef = useRef([]);

  // useEffect(() => {
  //   const answerOptions = {
  //     rootMargin: "1000% 0px -20% 0px",
  //   };

  //   const answerObserver = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       const entryClassList = entry.target.classList;

  //       if (entry.isIntersecting) {
  //         entryClassList.remove("answer-closed");
  //         // console.log("is observed");
  //         // console.log(entry);
  //       }

  //       if (!entry.isIntersecting) {
  //         // entryClassList.add("answer-closed");
  //         entryClassList.remove("answer-closed");
  //         // console.log("not observed");
  //       }
  //     });
  //   }, answerOptions);

  //   answerRef.current.forEach((ref) => {
  //     if (ref) {
  //       answerObserver.observe(ref);
  //     }
  //   });
  // }, []);

  return (
    <div className="questions-container">
      <h2 className="questions-heading">ČASTO KLADENÉ OTÁZKY</h2>
      <div className="question-tabs">
        <div className="question-wrapper">
          {" "}
          <h2 className="question">
            Hrozí mi na tréningu, že ma niekto zbije?
          </h2>
          <div
            // ref={(el) => (answerRef.current[0] = el)}
            // className="answer answer-closed"
            className="answer"
          >
            <p>
              Určite nie. :) Sme výborný kolektív a dbáme nato, aby sa u nás
              každý cítil dobre a aby napredoval čo najrýchlejšie. Ako
              začiatočník si môžeš zatrénovať aj s profesionálnym zápasníkom,
              ktorý ti rád poradí, ukáže a odovzdá cenné skúsenosti, vďaka
              ktorým sa budeš zlepšovať ešte rýchlejšie.
            </p>
          </div>
        </div>

        <div className="question-wrapper">
          {" "}
          <h2 className="question">Ako sa prihlásiť na tréning? </h2>
          <div
            // ref={(el) => (answerRef.current[1] = el)}
            // className="answer answer-closed"
            className="answer"
          >
            <p>
              Prihlasovanie na tréning u nás nie je povinné. Pred prvým
              tréningom nám môžeš napísať a opýtať sa ak ti niečo nie je jasné.
            </p>
          </div>
        </div>

        <div className="question-wrapper">
          {" "}
          <h2 className="question">Kde vás nájdem?</h2>
          <div
            // ref={(el) => (answerRef.current[2] = el)}
            // className="answer answer-closed"
            className="answer"
          >
            <p>
              Nachádzame sa na konci Kráľovohoľskej ulici v Sásovej, Banskej
              Bystrici. Presnú mapku nájdeš na tejto stránke v sekcií..... Z
              parkoviska to už je len pár krokov do krátkeho kopca a po drevenom
              chodníku k hlavným dverám kde uvidíš našu reklamu. V budove nás
              nájdeš na 1. poschodí.
            </p>
          </div>
        </div>

        <div className="question-wrapper">
          <h2 className="question">Čo si mám doniesť na tréning?</h2>
          <div
            // ref={(el) => (answerRef.current[3] = el)}
            // className="answer answer-closed"
            className="answer"
          >
            <p>
              Na tréning nepotrebuješ nič špeciálne. Na začiatok ti úplne
              postačí tričko a krátke nohavice na šport alebo tepláky. Šlapky na
              prechod zo šatne do gymu a fľašu na vodu.
            </p>
          </div>
        </div>

        <div className="question-wrapper">
          <h2 className="question">Je k dispozícií šatňa, sprchy a wc?</h2>
          <div
            // ref={(el) => (answerRef.current[4] = el)}
            // className="answer answer-closed"
            className="answer"
          >
            <p>
              Áno, k dispozícií sú aj sprchy a wc. Šatňa je hneď vedľa gymu,
              svoje veci si môžeš odložiť do zamykateľných skriniek.
            </p>
          </div>
        </div>
        <div className="question-wrapper">
          <h2 className="question">Čo ak nebudem vládať?</h2>
          <div
            // ref={(el) => (answerRef.current[4] = el)}
            // className="answer answer-closed"
            className="answer"
          >
            <p>
              Na trénovanie nepotrebuješ kondíciu, ani žiadne skúsenosti so
              športom. Práve tým, že budeš chodiť pravidelne na tréningy,
              nadobudneš kondíciu a vyformuješ si postavu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
