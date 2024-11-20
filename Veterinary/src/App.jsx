import React from "react";
import "./index.css";
import { Navbar } from "./components/NAVBAR/Navbar";
import { Hero } from "./components/HERO/Hero";
import { Best } from "./components/best/Best";
import { Featured } from "./components/FEATURED/Featured";
import { Footer } from "./components/FOOTER/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Define your routing structure */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/best" element={<Best />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;