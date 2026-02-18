import { useNavigate } from "react-router-dom";

export function Ariyalur() {
  const navigate = useNavigate();
  return (
    <section className="ariyalur-propertie-table">
      <h2>Property Rates in Villupuram, Tamil Nadu</h2>
      <table className="ariyalur-table">
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
            <td>Ariyalur Town</td>
            <td>₹1,900</td>
            <td>₹1,200 - ₹2,500</td>
            <td>
              <button>See 42 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Jayankondam</td>
            <td>₹1,450</td>
            <td>₹900 - ₹1,800</td>
            <td>
              <button>See 31 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Udayarpalayam</td>
            <td>₹1,200</td>
            <td>₹800 - ₹1,500</td>
            <td>
              <button>See 26 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Sendurai</td>
            <td>₹950</td>
            <td>₹700 - ₹1,200</td>
            <td>
              <button>See 18 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Andimadam</td>
            <td>₹1,050</td>
            <td>₹700 - ₹1,300</td>
            <td>
              <button>See 22 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Thirumanur</td>
            <td>₹850</td>
            <td>₹600 - ₹1,000</td>
            <td>
              <button>See 16 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Keezhapalur</td>
            <td>₹900</td>
            <td>₹600 - ₹1,100</td>
            <td>
              <button>See 14 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Varadarajanpettai</td>
            <td>₹1,150</td>
            <td>₹800 - ₹1,400</td>
            <td>
              <button>See 19 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Kallankurichi</td>
            <td>₹1,300</td>
            <td>₹900 - ₹1,600</td>
            <td>
              <button>See 21 Lands</button>
            </td>
          </tr>

          <tr>
            <td>Elakurichi</td>
            <td>₹950</td>
            <td>₹700 - ₹1,200</td>
            <td>
              <button>See 17 Lands</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
