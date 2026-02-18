import { useNavigate } from "react-router-dom";

export function Yercaud() {
  const navigate = useNavigate();
  return (
    <section className="yercaud-propertie-table">
      <h2>Property Rates in Villupuram, Tamil Nadu</h2>
      <table className="yercaud-table">
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
            <td>Yercaud Town</td>
            <td>₹3,800</td>
            <td>₹2,800 - ₹5,500</td>
            <td>
              <button>See 44 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Ondikadai</td>
            <td>₹3,200</td>
            <td>₹2,300 - ₹4,800</td>
            <td>
              <button>See 29 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Lake Area</td>
            <td>₹4,200</td>
            <td>₹3,000 - ₹6,200</td>
            <td>
              <button>See 26 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Pagoda Point</td>
            <td>₹3,600</td>
            <td>₹2,700 - ₹5,300</td>
            <td>
              <button>See 22 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Shevaroy Hills</td>
            <td>₹3,000</td>
            <td>₹2,200 - ₹4,500</td>
            <td>
              <button>See 31 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Nagloor</td>
            <td>₹2,700</td>
            <td>₹1,900 - ₹4,000</td>
            <td>
              <button>See 18 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Semmanatham</td>
            <td>₹2,500</td>
            <td>₹1,800 - ₹3,800</td>
            <td>
              <button>See 16 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Manjakuttai</td>
            <td>₹2,900</td>
            <td>₹2,100 - ₹4,300</td>
            <td>
              <button>See 20 Lands</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
