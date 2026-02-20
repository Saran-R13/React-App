// import { useNavigate } from "react-router-dom";

// export function Tiruvannamalai() {
//   const navigate = useNavigate();
//   return (
//     <section className="tiruvannamalai-propertie-table">
//       <h2>Property Rates in Villupuram, Tamil Nadu</h2>
//       <table className="tiruvannamalai-table">
//         <thead>
//           <tr>
//             <th>Locality</th>
//             <th>Avg.Price/Sqft</th>
//             <th>Price Range/Sqft</th>
//             <th>View Properties </th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Tiruvannamalai Town</td>
//             <td>₹2,400</td>
//             <td>₹1,800 - ₹3,500</td>
//             <td>
//               <button>See 68 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Chengam</td>
//             <td>₹1,600</td>
//             <td>₹1,000 - ₹2,300</td>
//             <td>
//               <button>See 37 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Polur</td>
//             <td>₹1,700</td>
//             <td>₹1,100 - ₹2,400</td>
//             <td>
//               <button>See 42 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Arani</td>
//             <td>₹1,950</td>
//             <td>₹1,300 - ₹2,800</td>
//             <td>
//               <button>See 51 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Vandavasi</td>
//             <td>₹1,850</td>
//             <td>₹1,200 - ₹2,700</td>
//             <td>
//               <button>See 46 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Kalasapakkam</td>
//             <td>₹1,400</td>
//             <td>₹850 - ₹2,000</td>
//             <td>
//               <button>See 29 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Chetpet</td>
//             <td>₹1,550</td>
//             <td>₹950 - ₹2,200</td>
//             <td>
//               <button>See 33 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Thanipadi</td>
//             <td>₹1,200</td>
//             <td>₹750 - ₹1,800</td>
//             <td>
//               <button>See 21 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Jawadhu Hills (Foothills)</td>
//             <td>₹1,100</td>
//             <td>₹700 - ₹1,600</td>
//             <td>
//               <button>See 18 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Mel Chengam</td>
//             <td>₹1,300</td>
//             <td>₹800 - ₹1,900</td>
//             <td>
//               <button>See 24 Lands</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <button onClick={() => navigate(-1)}>Back</button>
//     </section>
//   );
// }






import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Tiruvannamalai() {
  const navigate = useNavigate();
  const [area, setArea] = useState("");

  const properties = [
    { locality: "Tiruvannamalai Town", avgPrice: 2400 },
    { locality: "Chengam", avgPrice: 1600 },
    { locality: "Polur", avgPrice: 1700 },
    { locality: "Arani", avgPrice: 1950 },
    { locality: "Vandavasi", avgPrice: 1850 },
    { locality: "Kalasapakkam", avgPrice: 1400 },
    { locality: "Chetpet", avgPrice: 1550 },
    { locality: "Thanipadi", avgPrice: 1200 },
    { locality: "Jawadhu Hills (Foothills)", avgPrice: 1100 },
    { locality: "Mel Chengam", avgPrice: 1300 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (area === "small") return item.avgPrice < 1400;
    if (area === "medium")
      return item.avgPrice >= 1400 && item.avgPrice <= 1900;
    if (area === "large") return item.avgPrice > 1900;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Tiruvannamalai</h2>

      {/* Filter Dropdown */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Price Range</InputLabel>
        <Select
          value={area}
          label="Price Range"
          onChange={(e) => setArea(e.target.value)}
        >
          <MenuItem value="small">Below 1400</MenuItem>
          <MenuItem value="medium">1400 - 1900</MenuItem>
          <MenuItem value="large">Above 1900</MenuItem>
        </Select>
      </FormControl>

      {/* Table */}
      {/* <table border="1" cellPadding="10" style={{ marginTop: "20px" }}> */}
        <thead>
          <tr>
            <th>Locality</th>
            <th>Avg Price (₹/Sqft)</th>
          </tr>
        </thead>
        <tbody>
          {filteredProperties.map((item, index) => (
            <tr key={index}>
              <td>{item.locality}</td>
              <td>₹{item.avgPrice}</td>
            </tr>
          ))}
        </tbody>
      {/* </table> */}

      <br />
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
