// import { useNavigate } from "react-router-dom";

// export function Ooty() {
//   const navigate = useNavigate();
//   return (
//     <section className="ooty-propertie-table">
//       <h2>Property Rates in Villupuram, Tamil Nadu</h2>
//       <table className="ooty-table">
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
//             <td>Ooty Town</td>
//             <td>₹5,500</td>
//             <td>₹4,000 - ₹8,500</td>
//             <td>
//               <button>See 58 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Ketti</td>
//             <td>₹3,700</td>
//             <td>₹2,600 - ₹5,500</td>
//             <td>
//               <button>See 33 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Lovedale</td>
//             <td>₹4,500</td>
//             <td>₹3,200 - ₹6,500</td>
//             <td>
//               <button>See 28 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Fern Hill</td>
//             <td>₹6,200</td>
//             <td>₹4,500 - ₹9,000</td>
//             <td>
//               <button>See 34 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Elk Hill</td>
//             <td>₹5,800</td>
//             <td>₹4,200 - ₹8,800</td>
//             <td>
//               <button>See 29 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Fingerpost</td>
//             <td>₹3,700</td>
//             <td>₹2,500 - ₹5,200</td>
//             <td>
//               <button>See 22 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Thalayathimund</td>
//             <td>₹4,100</td>
//             <td>₹3,000 - ₹6,200</td>
//             <td>
//               <button>See 23 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Doddabetta Foothills</td>
//             <td>₹4,800</td>
//             <td>₹3,500 - ₹7,200</td>
//             <td>
//               <button>See 27 Lands</button>
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

export function Ooty() {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState("");

  const properties = [
    { locality: "Ooty Town", avgPrice: 5500 },
    { locality: "Ketti", avgPrice: 3700 },
    { locality: "Lovedale", avgPrice: 4500 },
    { locality: "Fern Hill", avgPrice: 6200 },
    { locality: "Elk Hill", avgPrice: 5800 },
    { locality: "Fingerpost", avgPrice: 3700 },
    { locality: "Thalayathimund", avgPrice: 4100 },
    { locality: "Doddabetta Foothills", avgPrice: 4800 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (priceRange === "low") return item.avgPrice < 4000;
    if (priceRange === "medium")
      return item.avgPrice >= 4000 && item.avgPrice <= 5500;
    if (priceRange === "high") return item.avgPrice > 5500;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Ooty</h2>

      {/* Filter Dropdown */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Price Range</InputLabel>
        <Select
          value={priceRange}
          label="Price Range"
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <MenuItem value="low">Below ₹4000</MenuItem>
          <MenuItem value="medium">₹4000 - ₹5500</MenuItem>
          <MenuItem value="high">Above ₹5500</MenuItem>
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
