import React, { useReducer } from "react";
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
      throw Error("No available times for the date selected." + action.type);
    }
  }
};

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const Home = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Nav />
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};

export default Home;
