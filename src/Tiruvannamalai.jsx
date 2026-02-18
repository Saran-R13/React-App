import { useNavigate } from "react-router-dom";

export function Tiruvannamalai() {
  const navigate = useNavigate();
  return (
    <section className="tiruvannamalai-propertie-table">
      <h2>Property Rates in Villupuram, Tamil Nadu</h2>
      <table className="tiruvannamalai-table">
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
            <td>Tiruvannamalai Town</td>
            <td>₹2,400</td>
            <td>₹1,800 - ₹3,500</td>
            <td>
              <button>See 68 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Chengam</td>
            <td>₹1,600</td>
            <td>₹1,000 - ₹2,300</td>
            <td>
              <button>See 37 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Polur</td>
            <td>₹1,700</td>
            <td>₹1,100 - ₹2,400</td>
            <td>
              <button>See 42 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Arani</td>
            <td>₹1,950</td>
            <td>₹1,300 - ₹2,800</td>
            <td>
              <button>See 51 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Vandavasi</td>
            <td>₹1,850</td>
            <td>₹1,200 - ₹2,700</td>
            <td>
              <button>See 46 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Kalasapakkam</td>
            <td>₹1,400</td>
            <td>₹850 - ₹2,000</td>
            <td>
              <button>See 29 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Chetpet</td>
            <td>₹1,550</td>
            <td>₹950 - ₹2,200</td>
            <td>
              <button>See 33 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Thanipadi</td>
            <td>₹1,200</td>
            <td>₹750 - ₹1,800</td>
            <td>
              <button>See 21 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Jawadhu Hills (Foothills)</td>
            <td>₹1,100</td>
            <td>₹700 - ₹1,600</td>
            <td>
              <button>See 18 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Mel Chengam</td>
            <td>₹1,300</td>
            <td>₹800 - ₹1,900</td>
            <td>
              <button>See 24 Lands</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
