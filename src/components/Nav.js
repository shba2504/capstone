import React, { useState } from "react";
import Logo from "../icons/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
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
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Log In</Link>
        </li>
      </ul>
      <div className="navbar-mobile">
        <GiHamburgerMenu
          color="#000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="navbar-mobile_overlay flex_center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />
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
                <Link to="/booking">Reservations</Link>
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
