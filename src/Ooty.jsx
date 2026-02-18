import { useNavigate } from "react-router-dom";

export function Ooty() {
  const navigate = useNavigate();
  return (
    <section className="ooty-propertie-table">
      <h2>Property Rates in Villupuram, Tamil Nadu</h2>
      <table className="ooty-table">
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
            <td>Ooty Town</td>
            <td>₹5,500</td>
            <td>₹4,000 - ₹8,500</td>
            <td>
              <button>See 58 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Ketti</td>
            <td>₹3,700</td>
            <td>₹2,600 - ₹5,500</td>
            <td>
              <button>See 33 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Lovedale</td>
            <td>₹4,500</td>
            <td>₹3,200 - ₹6,500</td>
            <td>
              <button>See 28 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Fern Hill</td>
            <td>₹6,200</td>
            <td>₹4,500 - ₹9,000</td>
            <td>
              <button>See 34 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Elk Hill</td>
            <td>₹5,800</td>
            <td>₹4,200 - ₹8,800</td>
            <td>
              <button>See 29 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Fingerpost</td>
            <td>₹3,700</td>
            <td>₹2,500 - ₹5,200</td>
            <td>
              <button>See 22 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Thalayathimund</td>
            <td>₹4,100</td>
            <td>₹3,000 - ₹6,200</td>
            <td>
              <button>See 23 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Doddabetta Foothills</td>
            <td>₹4,800</td>
            <td>₹3,500 - ₹7,200</td>
            <td>
              <button>See 27 Lands</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
