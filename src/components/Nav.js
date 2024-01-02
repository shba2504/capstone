import Logo from "../icons/Logo.svg";
import menu from "../icons/menu.svg";
import Link from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Little Lemon logo" />
      <img src={menu} class="hamburger" alt="hamburger icon" />
      <ul>
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
          <Link to="/order">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
