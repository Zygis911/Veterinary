import React from "react";
import "./index.css";
import { Navbar } from "./components/NAVBAR/Navbar";
import { Hero } from "./components/HERO/Hero";
import { Best } from "./components/best/Best";
import { Featured } from "./components/FEATURED/Featured";
import { Footer } from "./components/FOOTER/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
