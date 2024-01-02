import Logo from "../icons/Logo.svg";
import menu from "../icons/menu.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <nav>
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
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
