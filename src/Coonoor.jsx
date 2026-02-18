import { useNavigate } from "react-router-dom";

export function Coonoor() {
  const navigate = useNavigate();
  return (
    <section className="coonoor-propertie-table">
      <h2>Property Rates in Villupuram, Tamil Nadu</h2>
      <table className="coonoor-table">
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
            <td>Coonoor Town</td>
            <td>₹4,200</td>
            <td>₹3,000 - ₹6,500</td>
            <td>
              <button>See 48 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Wellington</td>
            <td>₹3,800</td>
            <td>₹2,700 - ₹5,800</td>
            <td>
              <button>See 33 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Sim’s Park Area</td>
            <td>₹4,500</td>
            <td>₹3,200 - ₹6,800</td>
            <td>
              <button>See 26 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Upper Coonoor</td>
            <td>₹3,600</td>
            <td>₹2,600 - ₹5,400</td>
            <td>
              <button>See 29 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Lower Coonoor</td>
            <td>₹3,200</td>
            <td>₹2,300 - ₹4,800</td>
            <td>
              <button>See 24 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Kattery</td>
            <td>₹3,000</td>
            <td>₹2,100 - ₹4,500</td>
            <td>
              <button>See 21 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Aravenu</td>
            <td>₹2,900</td>
            <td>₹2,000 - ₹4,200</td>
            <td>
              <button>See 18 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Burliyar</td>
            <td>₹2,700</td>
            <td>₹1,900 - ₹3,900</td>
            <td>
              <button>See 16 Lands</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
