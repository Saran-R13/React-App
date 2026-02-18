import { useNavigate } from "react-router-dom";

export function VillupuramPage() {
  const navigate = useNavigate();
  return (
    <section className="villupuram-propertie-table">
      <h2>Property Rates in Villupuram, Tamil Nadu</h2>
      <table className="villupuram-table">
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
            <td>Tindivanam</td>
            <td>₹1,950</td>
            <td>₹1,200 - ₹2,800</td>
            <td>
              <button>See 46 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Vanur</td>
            <td>₹1,600</td>
            <td>₹1,000 - ₹2,300</td>
            <td>
              <button>See 38 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Gingee (Senji)</td>
            <td>₹1,750</td>
            <td>₹1,100 - ₹2,600</td>
            <td>
              <button>See 31 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Kandamangalam</td>
            <td>₹1,400</td>
            <td>₹900 - ₹2,100</td>
            <td>
              <button>See 29 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Vikravandi</td>
            <td>₹1,850</td>
            <td>₹1,200 - ₹2,700</td>
            <td>
              <button>See 34 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Ulundurpet</td>
            <td>₹1,300</td>
            <td>₹850 - ₹1,900</td>
            <td>
              <button>See 27 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Koliyanur</td>
            <td>₹1,500</td>
            <td>₹950 - ₹2,200</td>
            <td>
              <button>See 33 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Marakkanam</td>
            <td>₹2,200</td>
            <td>₹1,500 - ₹3,200</td>
            <td>
              <button>See 40 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Thiruvennainallur</td>
            <td>₹1,250</td>
            <td>₹800 - ₹1,800</td>
            <td>
              <button>See 22 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Mugaiyur</td>
            <td>₹1,100</td>
            <td>₹700 - ₹1,600</td>
            <td>
              <button>See 19 Lands</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
