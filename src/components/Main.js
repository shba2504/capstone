import restaurantfood from "../images/restauranfood.jpg";
import greeksalad from "../images/greeksalad.jpg";
import Bruschetta from "../images/Bruschetta.jpg";
import lemondessert from "../images/lemondessert.jpg";
import MarioandAdrianA from "../images/MarioandAdrianA.jpg";
import MarioandAdrianb from "../images/MarioandAdrianb.jpg";
import woman1 from "../images/woman1.png";
import man1 from "../images/man1.jpg";
import woman2 from "../images/woman2.png";
import man2 from "../images/man2.png";

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
          <br />
          <button>Reserve a Table</button>
        </article>
        <img src={restaurantfood} alt="man holding a tray of food" />
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
              <img src={greeksalad} alt="greek salad with fork" />
              <h4>
                Greek Salad <span>$12.99</span>
              </h4>
              <p>
                The famous Greek salad of crispy lettuce, peppers, olives, and
                our Chicago-style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <a href="#">Order Delivery</a>
            </section>
            <section className="item">
              <img src={Bruschetta} alt="bruschetta on a wooden platter" />
              <h4>Bruschetta $5.99</h4>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <a href="#">Order Delivery</a>
            </section>
            <section className="item">
              <img src={lemondessert} alt="lemon cake with a fork" />
              <h4>Lemon Dessert $5.00</h4>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <a href="#">Order Delivery</a>
            </section>
          </div>
        </article>
      </div>
      <div>
        <article className="testimonials">
          <section className="test1">
            <h2>Testimonials</h2>
          </section>
          <div className="review">
            <section className="test2">
              <p>Rating</p>
              <img src={woman1} alt="older woman" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>
            <section className="test2">
              <p>Rating</p>
              <img src={man1} alt="young man smiling" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>
            <section className="test2">
              <p>Rating</p>
              <img src={woman2} alt="young woman" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>
            <section className="test2">
              <p>Rating</p>
              <img src={man2} alt="teenage boy" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>
          </div>
        </article>
      </div>
      <div>
        <article>
          <section className="about">
            <div>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img
              src={MarioandAdrianA}
              alt="two chefs in a kitchen"
              className="under"
            />
            <img
              src={MarioandAdrianb}
              alt="two chefs smiling in a kitchen"
              className="over"
            />
          </section>
        </article>
      </div>
    </main>
  );
}

export default Main;
