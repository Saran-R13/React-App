import { TbRouteScan } from "react-icons/tb";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import "./index.css";
import { Properties } from "./Properties";
import { About } from "./About";
import { Contact } from "./Contact";

export default function App() {
  // return <Home />;
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Login</Link>
        {/* <Link to="/properties">Properties</Link> */}
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
