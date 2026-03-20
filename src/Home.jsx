// import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import { Footer } from "./Footer";
// import { HeroSlider } from "./HeroSlider";
// export function Home() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <Header />

//       <section>
//         <p className="flat-container">
//           Live Where Your Heart Belongs Modern Homes & Premium Flats
//           <br />
//           <button className="clickhere" onClick={() => navigate("/properties")}>
//             Click Here...
//           </button>
//         </p>
//       </section>

//       {/* * <section>
//         <p className="land-container">
//           Buy Land. Build Tomorrow. Smart Investment Starts Here
//           <br />
//           <button onClick={() => navigate("/properties")}>Click Here...</button>
//         </p>
//       </section>  */}

//       <Footer />
//     </>
//   );
// }
import { useNavigate } from "react-router-dom";
import  Header  from "./Header";
import { Footer } from "./Footer";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <section className="hero">
        <div className="slider">
          <div className="slides">
            <div className="slide slide1"></div>
            <div className="slide slide2"></div>
            <div className="slide slide3"></div>
          </div>

          <div className="content">
            Live Where Your Heart Belongs Modern Homes & Premium Flats
            <br />
            <button
              className="clickhere"
              onClick={() => navigate("/properties")}
            >
              Click Here...
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
