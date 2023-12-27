import restaurantfood from "../images/restauranfood.jpg";

function Main() {
  return (
    <main>
      <div className="hero-section">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </article>
        <img />
      </div>
      <div className="highlights">
        <article>
          <div className="container1">
            <section>
              <h2>This Week's Specials!</h2>
            </section>
            <section>
              <button>Online Menu</button>
            </section>
          </div>
          <div className="container2">
            <section className="item">
              <h4>Greek Salad $12.99</h4>
              <p>
                The famous Greek salad of crispy lettuce, peppers, olives, and
                our Chicago-style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a>Order delivery</a>
            </section>
            <section className="item">
              <img />
              <h4>Bruschetta $5.99</h4>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <a>Order delivery</a>
            </section>
            <section className="item">
              <img />
              <h4>Lemon Dessert $5.00</h4>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <a>Order delivery</a>
            </section>
          </div>
        </article>
      </div>
      <div className="testimonials">
        <article>
          <h2>Testimonials</h2>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
        </article>
      </div>
      <div className="about">
        <article>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p></p>
          <img />
          <img />
        </article>
      </div>
    </main>
  );
}

export default Main;
