import { useNavigate } from "react-router-dom";

export function Kodaikanal() {
  const navigate = useNavigate();
  return (
    <section className="kodaikanal-propertie-table">
      <h2>Property Rates in Villupuram, Tamil Nadu</h2>
      <table className="kodaikanal-table">
        <thead>
          <tr>
            <th>Locality</th>
            <th>Avg.Price/Sqft</th>
            <th>Price Range/Sqft</th>
            <th>View Properties </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kodaikanal Town</td>
            <td>₹4,800</td>
            <td>₹3,500 - ₹7,500</td>
            <td>
              <button>See 52 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Vilpatti</td>
            <td>₹3,900</td>
            <td>₹2,800 - ₹6,000</td>
            <td>
              <button>See 36 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Shenbaganur</td>
            <td>₹3,700</td>
            <td>₹2,600 - ₹5,800</td>
            <td>
              <button>See 29 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Vattakanal</td>
            <td>₹4,200</td>
            <td>₹3,000 - ₹6,800</td>
            <td>
              <button>See 31 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Poomparai</td>
            <td>₹2,800</td>
            <td>₹2,000 - ₹4,200</td>
            <td>
              <button>See 24 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Perumalmalai</td>
            <td>₹3,200</td>
            <td>₹2,300 - ₹5,000</td>
            <td>
              <button>See 27 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Kookal</td>
            <td>₹2,400</td>
            <td>₹1,700 - ₹3,800</td>
            <td>
              <button>See 19 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Mannavanur</td>
            <td>₹2,600</td>
            <td>₹1,900 - ₹4,000</td>
            <td>
              <button>See 21 Lands</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
