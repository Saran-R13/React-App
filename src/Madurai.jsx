import { useNavigate } from "react-router-dom";

export function MaduraiPage() {
  const navigate = useNavigate();
  return (
    <section className="madurai-propertie-table">
      <h2>Property Rates in Madurai, Tamil Nadu</h2>
      <table className="madurai-table">
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
            <td>KK Nagar</td>
            <td>₹3,400</td>
            <td>₹2,600 - ₹4,500</td>
            <td>
              <button>See 78 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Madurai East</td>
            <td>₹3,100</td>
            <td>₹2,400 - ₹4,200</td>
            <td>
              <button>See 65 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Simmakkal</td>
            <td>₹3,600</td>
            <td>₹2,900 - ₹4,900</td>
            <td>
              <button>See 54 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Alagar Kovil Road</td>
            <td>₹3,000</td>
            <td>₹2,300 - ₹4,000</td>
            <td>
              <button>See 59 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Thiru Nagar</td>
            <td>₹2,800</td>
            <td>₹2,100 - ₹3,700</td>
            <td>
              <button>See 47 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Goripalayam</td>
            <td>₹3,200</td>
            <td>₹2,500 - ₹4,300</td>
            <td>
              <button>See 51 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Vilangudi</td>
            <td>₹2,900</td>
            <td>₹2,200 - ₹3,800</td>
            <td>
              <button>See 42 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Thirunagar</td>
            <td>₹3,300</td>
            <td>₹2,600 - ₹4,500</td>
            <td>
              <button>See 68 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Sathamangalam</td>
            <td>₹2,700</td>
            <td>₹2,000 - ₹3,600</td>
            <td>
              <button>See 39 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Singampunari Road</td>
            <td>₹2,500</td>
            <td>₹1,900 - ₹3,300</td>
            <td>
              <button>See 33 Properties</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
