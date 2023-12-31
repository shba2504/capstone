import Logo from "../icons/Logo.svg";
import menu from "../icons/menu.svg";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Little Lemon logo" />
      <img src={menu} class="hamburger" alt="hamburger icon" />
    </header>
  );
}

export default Header;
