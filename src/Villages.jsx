import { useNavigate } from "react-router-dom";

export function Villages() {
  const navigate = useNavigate();
  return (
    <section className="village-properties">
      <div className="village-fst-container">
        <h2>Emerging Rural Investment Destinations</h2>

        <p>
          Discover high-potential land opportunities in rapidly developing rural
          regions, offering long-term growth and secure property investments.
        </p>
      </div>
      <div className="village-snd-container">
        <button onClick={() => navigate("/villupurampage")}>Villupuram</button>
        <button onClick={() => navigate("/kallakurichipage")}>
          Kallakurichi
        </button>
        <button onClick={() => navigate("/tiruvannamalai")}>
          Tiruvannamalai
        </button>
        <button onClick={() => navigate("/salem")}>Salam</button>
        <button>Ariyalur</button>
      </div>
      {/* <ul>
        <li>
          <a href="#">Villupuram</a>
        </li>
        <li>
          <a href="#">Kallakurichi </a>
        </li>
        <li>
          <a href="#">Tiruvannamalai </a>
        </li>
        <li>
          <a href="#">Salem </a>
        </li>
        <li>
          <a href="#">Ariyalur </a>
        </li>
      </ul> */}
    </section>
  );
}
