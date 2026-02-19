import { useNavigate } from "react-router-dom";

export function ChennaiPage() {
  const navigate = useNavigate();
  return (
    <section className="chennai-propertie-table">
      <h2>Property Rates in Chennai, Tamil Nadu</h2>
      <table className="chennai-table">
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
            <td>RA Puram</td>
            <td>₹18,500</td>
            <td>₹14,000 - ₹25,000</td>
            <td>
              <button onClick={() => navigate("/cityplots/rs-puram")}>
                See 10 Properties
              </button>
            </td>
          </tr>

          <tr>
            <td>Nungambakkam</td>
            <td>₹16,800</td>
            <td>₹12,500 - ₹22,000</td>
            <td>
              <button>See 134 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Adyar</td>
            <td>₹17,200</td>
            <td>₹13,000 - ₹23,500</td>
            <td>
              <button>See 96 Properties</button>
            </td>
          </tr>

          <tr>
            <td>OMR (Old Mahabalipuram Road)</td>
            <td>₹7,900</td>
            <td>₹5,500 - ₹11,500</td>
            <td>
              <button>See 312 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Sholinganallur</td>
            <td>₹8,400</td>
            <td>₹6,200 - ₹12,000</td>
            <td>
              <button>See 278 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Thoraipakkam</td>
            <td>₹9,100</td>
            <td>₹6,800 - ₹13,500</td>
            <td>
              <button>See 165 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Medavakkam</td>
            <td>₹6,700</td>
            <td>₹4,800 - ₹9,200</td>
            <td>
              <button>See 210 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Porur</td>
            <td>₹8,900</td>
            <td>₹6,000 - ₹13,000</td>
            <td>
              <button>See 143 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Tambaram</td>
            <td>₹6,200</td>
            <td>₹4,500 - ₹8,800</td>
            <td>
              <button>See 189 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Perumbakkam</td>
            <td>₹6,900</td>
            <td>₹5,000 - ₹9,500</td>
            <td>
              <button>See 156 Properties</button>
            </td>
          </tr>

          <tr>
            <td>Pallavaram</td>
            <td>₹8,300</td>
            <td>₹6,000 - ₹12,500</td>
            <td>
              <button>See 121 Properties</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
