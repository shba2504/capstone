import woman1 from "../images/woman1.png";
import man1 from "../images/man1.jpg";
import woman2 from "../images/woman2.png";
import man2 from "../images/man2.png";

function Testimonials() {
  return (
    <div>
      <article className="testimonials">
        <section className="test1">
          <h2>Testimonials</h2>
        </section>
        <div className="review">
          <section className="test2">
            <h4>Name and Rating</h4>
            <img src={woman1} alt="older woman" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <section className="test2">
            <h4>Name and Rating</h4>
            <img src={man1} alt="young man smiling" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <section className="test2">
            <h4>Name and Rating</h4>
            <img src={woman2} alt="young woman" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <section className="test2">
            <h4>Name and Rating</h4>
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
  );
}

export default Testimonials;
