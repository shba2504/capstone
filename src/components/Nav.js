import Logo from "../icons/Logo.svg";
import menu from "../icons/menu.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Little Lemon logo" />
      </div>
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
    </nav>
  );
}

export default Nav;
