import { useNavigate } from "react-router-dom";

export function HillStations() {
  const navigate = useNavigate();
  return (
    <section className="hillStation-properties">
      <div className="hillstation-fst-container">
        <h2>Premium Hill View Investment Destinations</h2>

        <p>
          Explore scenic hill locations offering serene environments, natural
          beauty, and high-value land investment opportunities ideal for
          resorts, villas, and future development.
        </p>
      </div>
      <div className="hillstation-snd-container">
        <button onClick={() => navigate("/ooty")}>Ooty (Udhagamandalam)</button>
        <button onClick={() => navigate("/kodaikanal")}>Kodaikanal</button>
        <button onClick={() => navigate("/yercaud")}>Yercaud</button>
        <button onClick={() => navigate("/coonoor")}>Coonoor</button>

        {/* <ul>
        <li>
          <a href="#">Ooty (Udhagamandalam)</a>
        </li>
        <li>
          <a href="#">Kodaikanal</a>
        </li>
        <li>
          <a href="#">Yercaud</a>
        </li>
        <li>
          <a href="#">Coonoor</a>
        </li>
      </ul> */}
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
