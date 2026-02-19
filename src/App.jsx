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
import { HillStations } from "./HillStations";
import { ChennaiPage } from "./Chennai";
import { CoimbatorePage } from "./Coimbatore";
import { MaduraiPage } from "./Madurai";
import { TrichyPage } from "./Trichy";
import { VillupuramPage } from "./Villupuram";
import { KallakurichiPage } from "./Kallakurichi";
import { Tiruvannamalai } from "./Tiruvannamalai";
import { Salem } from "./Salem";
import { Ariyalur } from "./Ariyalur";
import { Ooty } from "./Ooty";
import { Kodaikanal } from "./Kodaikanal";
import { Yercaud } from "./Yercaud";
import { Coonoor } from "./Coonoor";
import { CityPlots } from "./CityPlots";

export default function App() {
  return (
    <>
      <div>
        <section className="first-container-box1">
          <img src="./src/photos/companylogo.png" alt="" />
          <h1 className="fstline">Rayora Land Developers</h1>

          <div className="tags">
            <nav>
              {/* <Link to="/header"></Link> */}
              {/* <Link to="/footer"></Link> */}
              <Link to="/">Home</Link>
              <Link to="/properties">Properties</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </section>
      </div>

      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cityAreas" element={<CityAreas />} />
        <Route path="/chennaiPage" element={<ChennaiPage />} />
        <Route path="/cityplots/:area" element={<CityPlots />} />
        <Route path="/coimbatorePage" element={<CoimbatorePage />} />
        <Route path="/maduraiPage" element={<MaduraiPage />} />
        <Route path="trichyPage" element={<TrichyPage />} />
        <Route path="/villages" element={<Villages />} />
        <Route path="/villupurampage" element={<VillupuramPage />} />
        <Route path="/kallakurichipage" element={<KallakurichiPage />} />
        <Route path="/tiruvannamalai" element={<Tiruvannamalai />} />
        <Route path="/salem" element={<Salem />} />
        <Route path="/ariyalur" element={<Ariyalur />} />
        <Route path="/hillStations" element={<HillStations />} />
        <Route path="/ooty" element={<Ooty />} />
        <Route path="/kodaikanal" element={<Kodaikanal />} />
        <Route path="/yercaud" element={<Yercaud />} />
        <Route path="/coonoor" element={<Coonoor />} />
      </Routes>
    </>
  );
}
