import React from "react";
import { Routes, Route } from "react-router-dom";
import Specials from "./Specials";
import About from "./About";
import BookingPage from "./BookingPage";

const Main = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Specials />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
