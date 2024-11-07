import React from "react";
import "./index.css";
import { Navbar } from "./components/NAVBAR/Navbar";
import { Hero } from "./components/HERO/Hero";
import { Best } from "./components/best/Best";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
    </>
  );
}

export default App;
