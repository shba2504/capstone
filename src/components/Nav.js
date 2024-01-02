import React, { useState } from "react";
import Logo from "../icons/Logo.svg";
import menu from "../icons/menu.svg";
import Dish from "../icons/Dish.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
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
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Log In</a>
        </li>
      </ul>
      <div className="navbar-mobile">
        <img
          src={menu}
          alt="hamburger menu"
          onClick={() => {
            setToggleMenu(false);
          }}
        />
        <img
          src={Dish}
          className="overlay-close"
          alt="serving platter icon"
          onClick={() => {}}
        />
        <ul className="nav-links">
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
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
