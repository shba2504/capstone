import React from "react";
import { Routes, Route } from "react-router-dom";
import Specials from "./Specials";
import About from "./About";
import Reservations from "./Reservations";
import Home from "./Home";

function Main() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Specials />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </main>
    </div>
  );
}

export default Main;
