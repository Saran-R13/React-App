// import { useNavigate } from "react-router-dom";

// export function VillupuramPage() {
//   const navigate = useNavigate();
//   return (
//     <section className="villupuram-propertie-table">
//       <h2>Property Rates in Villupuram, Tamil Nadu</h2>
//       <table className="villupuram-table">
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
//             <td>Tindivanam</td>
//             <td>₹1,950</td>
//             <td>₹1,200 - ₹2,800</td>
//             <td>
//               <button>See 46 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Vanur</td>
//             <td>₹1,600</td>
//             <td>₹1,000 - ₹2,300</td>
//             <td>
//               <button>See 38 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Gingee (Senji)</td>
//             <td>₹1,750</td>
//             <td>₹1,100 - ₹2,600</td>
//             <td>
//               <button>See 31 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Kandamangalam</td>
//             <td>₹1,400</td>
//             <td>₹900 - ₹2,100</td>
//             <td>
//               <button>See 29 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Vikravandi</td>
//             <td>₹1,850</td>
//             <td>₹1,200 - ₹2,700</td>
//             <td>
//               <button>See 34 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Ulundurpet</td>
//             <td>₹1,300</td>
//             <td>₹850 - ₹1,900</td>
//             <td>
//               <button>See 27 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Koliyanur</td>
//             <td>₹1,500</td>
//             <td>₹950 - ₹2,200</td>
//             <td>
//               <button>See 33 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Marakkanam</td>
//             <td>₹2,200</td>
//             <td>₹1,500 - ₹3,200</td>
//             <td>
//               <button>See 40 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Thiruvennainallur</td>
//             <td>₹1,250</td>
//             <td>₹800 - ₹1,800</td>
//             <td>
//               <button>See 22 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Mugaiyur</td>
//             <td>₹1,100</td>
//             <td>₹700 - ₹1,600</td>
//             <td>
//               <button>See 19 Lands</button>
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

export function VillupuramPage() {
  const navigate = useNavigate();
  const [area, setArea] = useState("");

  const properties = [
    { locality: "Tindivanam", avgPrice: 1950 },
    { locality: "Vanur", avgPrice: 1600 },
    { locality: "Gingee (Senji)", avgPrice: 1750 },
    { locality: "Kandamangalam", avgPrice: 1400 },
    { locality: "Vikravandi", avgPrice: 1850 },
    { locality: "Ulundurpet", avgPrice: 1300 },
    { locality: "Koliyanur", avgPrice: 1500 },
    { locality: "Marakkanam", avgPrice: 2200 },
    { locality: "Thiruvennainallur", avgPrice: 1250 },
    { locality: "Mugaiyur", avgPrice: 1100 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (area === "small") return item.avgPrice < 1400;
    if (area === "medium")
      return item.avgPrice >= 1400 && item.avgPrice <= 1800;
    if (area === "large") return item.avgPrice > 1800;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Villupuram</h2>

      {/* Filter Dropdown */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Price Range</InputLabel>
        <Select
          value={area}
          label="Price Range"
          onChange={(e) => setArea(e.target.value)}
        >
          <MenuItem value="small">Below 1400</MenuItem>
          <MenuItem value="medium">1400 - 1800</MenuItem>
          <MenuItem value="large">Above 1800</MenuItem>
        </Select>
      </FormControl>

      {/* Table */}
      {/* <table border="1" cellPadding="10" style={{ marginTop: "20px" }}> */}
      {/* <thead>
          <tr>
            <th>Locality</th>
            <th>Avg Price (₹/Sqft)</th>
          </tr>
        </thead> */}
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
