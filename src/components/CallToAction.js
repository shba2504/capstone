import React from "react";
import restaurantfood from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="hero-section">
      <header>
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <br />
          <Link to="/booking">
            <button aria-label="On Click">Reserve a Table</button>
          </Link>
        </article>
        <img src={restaurantfood} alt="man holding a tray of food" />
      </header>
    </div>
  );
};

export default CallToAction;
