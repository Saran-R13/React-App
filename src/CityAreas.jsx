// export function CityAreas() {
//   return (
//     <section>
//       <ul>
//         <li><a href="#">Chennai</a></li>
//         <li><a href="#">Coimbatore</a></li>
//         <li><a href="#">Madurai</a></li>
//         <li><a href="#">Tiruchirappalli</a></li>
//         <li><a href="#">Salem</a></li>
//         <li><a href="#">Tirunelveli</a></li>
//         <li><a href="#">Erode</a></li>
//         <li><a href="#">Vellore</a></li>
//         <li><a href="#">Thoothukudi</a></li>
//         <li><a href="#">Thanjavur</a></li>
//       </ul>
//     </section>
//   );

import { useNavigate } from "react-router-dom";

// }
export function CityAreas() {
  const navigate = useNavigate();
  return (
    <section className="city-properties">
      <div className="city-fst-container">
        <h2>Strategic Locations Across Tamil Nadu</h2>

        <p>
          Unlock premium land assets in rapidly developing urban hubs with
          long-term value and growth potential.
        </p>
      </div>
      <div className="city-snd-container">
        <button onClick={() => navigate("/chennaiPage")}>Chennai</button>
        <button onClick={() => navigate("/coimbatorePage")}>Coimbatore</button>
        <button onClick={() => navigate("/maduraiPage")}>Madurai</button>
        <button onClick={() => navigate("/trichyPage")}>Trichy</button>

        {/* <ul>
          <li>
            <a href="#">Chennai</a>
          </li>
          <li>
            <a href="#">Coimbatore</a>
          </li>
          <li>
            <a href="#">Madurai</a>
          </li>
          <li>
            <a href="#">Tiruchirappalli</a>
          </li>
          <li>
            <a href="#">Salem</a>
          </li>
          <li>
            <a href="#">Tirunelveli</a>
          </li>
          <li>
            <a href="#">Erode</a>
          </li>
          <li>
            <a href="#">Vellore</a>
          </li>
          <li>
            <a href="#">Thoothukudi</a>
          </li>
          <li>
            <a href="#">Thanjavur</a>
          </li>
        </ul> */}
      </div>
    </section>
  );
}
