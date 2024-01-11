import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Nav from "./Nav";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

const updateTimes = (availableTimes, action) => {
  switch (action.type) {
    case "update_times": {
      return action.availableTimes;
    }
    default: {
      return action.availableTimes;
    }
  }
};

const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const initializeTimes = (date) => {
  initialState = ;
  return initialState;
};
<BookingForm availableTimes={availableTimes} dispatch={dispatch} />


const Home = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

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

export default Home;
