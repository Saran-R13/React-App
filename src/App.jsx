import { TbRouteScan } from "react-icons/tb";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import "./index.css";
import { Properties } from "./Properties";
import { About } from "./About";
import { Contact } from "./Contact";
import { CityAreas } from "./CityAreas";
import { Villages } from "./Villages";

export default function App() {
  return (
    <>
      <div>
        <section className="first-container-box1">
          <img src="./src/photos/companylogo.png" alt="" />
          <h1 className="fstline">Rayora Land Developers</h1>

          <div className="tags">
            <nav>
              <Link to="/Header"></Link>
              <Link to="/Footer"></Link>
              <Link to="/Home">Home</Link>
              <Link to="/Properties">Properties</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
            </nav>
          </div>
        </section>
      </div>

      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CityAreas" element={<CityAreas />} />
        <Route path="/Villa/>
      </Routes>
    </>
  );
}
