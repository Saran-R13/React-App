import { TbRouteScan } from "react-icons/tb";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import "./index.css";

export default function App() {
  // return <Home />;
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Login</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
