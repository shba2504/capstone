import restaurantfood from "../images/restauranfood.jpg";

function Header() {
  return (
    <header>
      <div className="hero-section">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <br />
          <button>Reserve a Table</button>
        </article>
        <img src={restaurantfood} alt="man holding a tray of food" />
      </div>
    </header>
  );
}

export default Header;
