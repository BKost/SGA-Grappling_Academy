import React from "react";

import Navbar from "./Navigation/Navbar";
import Home from "./Homepage/Home";
import Courses from "./Courses/Courses";
import Adcc from "./ADCC/Adcc";
import AboutSGA from "./AboutSGA/AboutSGA";
import Gallery from "./Gallery/Gallery";
import Sponsors from "./Sponsors/Sponsors";
import Questions from "./Questions/Questions";
import Header from "./Homepage/Header";
import CompClass from "./AboutSGA/CompClass";
import Carousel from "./AboutSGA/Carousel/Carousel";
import Footer from "./Footer/Footer";
import Schedule from "./AboutSGA/Schedule/Schedule";
import Pricing from "./Pricing/Pricing";

function AppContent() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutSGA />
      <CompClass />
      <Carousel />
      <Courses />
      <Schedule />
      <Pricing />
      <Adcc />
      <Gallery />
      <Sponsors />
      <Questions />
    </>
  );
}

export default AppContent;
