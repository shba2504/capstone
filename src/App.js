import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CallToAction from "./components/CallToAction";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Specials />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </>
  );
};

export default App;
