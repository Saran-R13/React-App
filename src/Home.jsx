import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";

export function Home() {
  return (
    <>
      <Header />
      {/* <section className="first-container">
        <section className="first-container-box1">
          <img src="./src/photos/companylogo.png" alt="" />
          <h1 className="fstline">Rayora Land Developers</h1>
        </section>
        <ul class="tags">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Link to="/Properties" a href="#">
              Properties
            </Link>
          </li>
          <li>
            <Link to="/About" a href="#">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" a href="#">
              Contact
            </Link>
          </li>
        </ul>
      </section> */}
      <section>
        <p className="flat-container">
          Live Where Your Heart Belongs Modern Homes & Premium Flats
          <br />
          <button>Click Here...</button>
        </p>
      </section>
      <section>
        <p className="land-container">
          Buy Land. Build Tomorrow. Smart Investment Starts Here
          <br />
          <button>Click Here...</button>
        </p>
      </section>
      {/* <footer className="footer-container">
        <section className="foot-box1">
          <img src="./src/photos/companylogo.png" alt="" />
          <p>
            <span className="span">Rayora </span>is a trusted real estate
            platform specializing in verified land and residential plots. We
            ensure transparent, secure, and smooth property transactions.
          </p>
        </section>
        <section className="foot-box2">
          <h3>Media</h3>
          <ul className="social-icons">
            <li>
              <FaInstagram /> Instagram
            </li>
            <li>
              <FaFacebook /> Facebook
            </li>
            <li>
              <FaTwitter /> X
            </li>
          </ul>
        </section>
        <section className="foot-box3">
          <h3>Work hours</h3>
          <p>Mon-Fri: 09:00 AM– 18:00 PM</p>
          <p>Sat: 10:00 AM– 15:00 PM</p>
          <p>Sun(2nd 4th): day off</p>
        </section>
        <section className="foot-box4">
          <h3>Contant</h3>
          <h4>📞 +91 73585 29050</h4>
          <h4>📧 saran@gmail.com</h4>
        </section>
      </footer> */}
      <Footer />
    </>
  );
}
