import React, { useEffect } from "react";
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
import CompClass from "./AboutSGA/CompClass";
import Carousel from "./AboutSGA/Carousel/Carousel";
import Footer from "./Footer/Footer";
import Schedule from "./AboutSGA/Schedule/Schedule";
import Pricing from "./Pricing/Pricing";

function App() {
  return (
    <main className="app">
      <Header />
      <div className="app-container">
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

        {/* <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/fitness" element={<Fitness />} />
        </Routes> */}
      </div>
      <Footer />
    </main>
  );
}

export default App;
