import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export function Home() {
  return (
    <>
      <header className="first-container">
        <h1 className="fstline">Rayora Land Developers</h1>
        <ul class="tags">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Properties</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
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
      <footer>
        <section>
          <h1>Help</h1>
          <p>Questions? Reach out anytime.</p>

          <ul className="social-icons">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </section>
        <section>
          <h3>Contant</h3>
          <h4>📞 +91 73585 29050</h4>
          <h4>📧 saran@gmail.com</h4>
        </section>
      </footer>
    </>
  );
}
