import MarioandAdrianA from "../images/MarioandAdrianA.jpg";
import MarioandAdrianb from "../images/MarioandAdrianb.jpg";

const About = () => {
  return (
    <div>
      <article>
        <section className="about">
          <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Little Lemon is a charming neighborhood bistro that serves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials.
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
  );
};

export default About;
