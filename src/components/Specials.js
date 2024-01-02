import greeksalad from "../images/greeksalad.jpg";
import Bruschetta from "../images/Bruschetta.jpg";
import lemondessert from "../images/lemondessert.jpg";

function Specials() {
  return (
    <div className="specials">
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
              The famous Greek salad of crispy lettuce, peppers, olives, and our
              Chicago-style feta cheese, garnished with crunchy garlic and
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
  );
}

export default Specials;
