// import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Header from "./Header";
// import { Footer } from "./Footer";
// // import { CardType } from "./CardType";

// export function Home() {
//   return (
//     <>
//       <Header />
//       <section>
//         <p className="flat-container">
//           Live Where Your Heart Belongs Modern Homes & Premium Flats
//           <br />
//           <button>Click Here...</button>
//         </p>
//       </section>
//       <section>
//         <p className="land-container">
//           Buy Land. Build Tomorrow. Smart Investment Starts Here
//           <br />
//           <button>Click Here...</button>
//         </p>
//       </section>

//       <Footer />
//     </>
//   );
// }

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section>
        <p className="flat-container">
          Live Where Your Heart Belongs Modern Homes & Premium Flats
          <br />
          <button onClick={() => navigate("/properties")}>Click Here...</button>
        </p>
      </section>

      <section>
        <p className="land-container">
          Buy Land. Build Tomorrow. Smart Investment Starts Here
          <br />
          <button onClick={() => navigate("/properties")}>Click Here...</button>
        </p>
      </section>

      <Footer />
    </>
  );
}
