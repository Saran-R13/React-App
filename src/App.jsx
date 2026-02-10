import { TbRouteScan } from "react-icons/tb";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import "./index.css";
import { Properties } from "./Properties";

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
      </Routes>
    </BrowserRouter>
  );
}
