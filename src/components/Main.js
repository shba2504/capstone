import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Specials from "./Specials";
import About from "./About";
import App from "../App";
import BookingForm from "./BookingForm";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </main>
  );
};

export default Main;
