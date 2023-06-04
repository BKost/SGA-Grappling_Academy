import React from "react";
import "./App.css";
import Navbar from "./Navigation/Navbar";
import Home from "./Homepage/Home";
import Courses from "./Courses/Courses";
import Adcc from "./ADCC/Adcc";
import AboutSGA from "./AboutSGA/AboutSGA";
import Gallery from "./Gallery/Gallery";
import Sponsors from "./Sponsors/Sponsors";
import Questions from "./Questions/Questions";
import Header from "./Homepage/Header";

import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <main className="app-container">
        <Navbar />
        <Header />
        <Home />
        <Courses />
        <Adcc />
        <AboutSGA />
        <Gallery />
        <Sponsors />
        <Questions />
      </main>

      <Footer />
    </div>
  );
}

export default App;
