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
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
