import React from "react";
import Nav from "./Nav";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
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
