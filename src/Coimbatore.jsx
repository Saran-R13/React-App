import { useNavigate } from "react-router-dom";

export function CoimbatorePage() {
  const navigate = useNavigate();
  return (
    <section className="coimbatore-propertie-table">
      <h2>Property Rates in Coimbatore, Tamil Nadu</h2>
      <table className="coimbatore-table">
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
            <td>RS Puram</td>
            <td>₹5,800</td>
            <td>₹4,500 - ₹7,200</td>
            <td>
              <button>See 95 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Saibaba Colony</td>
            <td>₹5,200</td>
            <td>₹3,800 - ₹6,500</td>
            <td>
              <button>See 110 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Gandhipuram</td>
            <td>₹6,000</td>
            <td>₹4,500 - ₹7,800</td>
            <td>
              <button>See 78 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Saravanampatti</td>
            <td>₹4,200</td>
            <td>₹3,200 - ₹5,600</td>
            <td>
              <button>See 145 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Peelamedu</td>
            <td>₹4,900</td>
            <td>₹3,500 - ₹6,200</td>
            <td>
              <button>See 102 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Kalapatti</td>
            <td>₹3,800</td>
            <td>₹2,900 - ₹4,900</td>
            <td>
              <button>See 88 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Kuniamuthur</td>
            <td>₹3,400</td>
            <td>₹2,600 - ₹4,400</td>
            <td>
              <button>See 73 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Eachanari</td>
            <td>₹3,100</td>
            <td>₹2,400 - ₹4,000</td>
            <td>
              <button>See 66 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Perur</td>
            <td>₹3,600</td>
            <td>₹2,700 - ₹4,700</td>
            <td>
              <button>See 59 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Palladam Road</td>
            <td>₹3,900</td>
            <td>₹2,800 - ₹5,000</td>
            <td>
              <button>See 81 Properties</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
