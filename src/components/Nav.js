import React, { useState } from "react";
import Logo from "../icons/Logo.svg";
import menu from "../icons/menu.svg";
import Dish from "../icons/Dish.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Little Lemon restaurant logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Log In</Link>
        </li>
      </ul>
      <div className="navbar-mobile_overlay">
        <img
          src={menu}
          alt="hamburger menu"
          className="hamburger"
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div>
            <button onClick={() => setToggleMenu(false)}></button>
            <ul className="navbar-mobile_links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
              <li>
                <Link to="/">Order Online</Link>
              </li>
              <li>
                <Link to="/">Log In</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
