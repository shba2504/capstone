import React from "react";
import { Routes, Route } from "react-router-dom";
import Specials from "./components/Specials";
import About from "./components/About";
import Home from "./components/Home";
import "./App.css";
import BookingPage from "./components/BookingPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </>
  );
};

export default App;
