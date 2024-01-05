import React from "react";
import Nav from "./components/Nav";
import CallToAction from "./components/CallToAction";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
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
    </>
  );
};

export default App;
