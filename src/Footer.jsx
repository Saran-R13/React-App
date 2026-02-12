import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer(){
    return(
        <footer className="footer-container">
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
              </footer>
    )
}