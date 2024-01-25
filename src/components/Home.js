import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Nav from "./Nav";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";
import { ConfirmedBooking } from "./ConfirmedBooking";

const Home = () => {
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
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
};

export default Home;
