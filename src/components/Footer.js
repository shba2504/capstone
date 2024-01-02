import monologo from "../icons/monologo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <img src={monologo} alt="monochrome logo for Little Lemon" />
          <section>
            <h4>Site Nav</h4>
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
          </section>
          <section>
            <h4>Contact</h4>
            <ul>
              <li>2045 Jackson Str.</li>
              <li>Chicago, Illinois, 60612</li>
              <li>(312) 421-3161</li>
              <br />
              <li>lemon@gmail.com</li>
            </ul>
          </section>
          <section>
            <h4>Social Media</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
