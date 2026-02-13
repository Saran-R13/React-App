import { Footer } from "./Footer";
import Header from "./Header";
// import { Footer } from "./Footer";

export function Contact() {
  return (
    <>
      {/* <Headers /> */}
      <section class="contact-container">
        <h1>Contact Rayora</h1>

        <form class="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      {/* <Footer /> */}
    </>
  );
}
