// import { useNavigate } from "react-router-dom";

// export function Yercaud() {
//   const navigate = useNavigate();
//   return (
//     <section className="yercaud-propertie-table">
//       <h2>Property Rates in Villupuram, Tamil Nadu</h2>
//       <table className="yercaud-table">
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
//             <td>Yercaud Town</td>
//             <td>₹3,800</td>
//             <td>₹2,800 - ₹5,500</td>
//             <td>
//               <button>See 44 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Ondikadai</td>
//             <td>₹3,200</td>
//             <td>₹2,300 - ₹4,800</td>
//             <td>
//               <button>See 29 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Lake Area</td>
//             <td>₹4,200</td>
//             <td>₹3,000 - ₹6,200</td>
//             <td>
//               <button>See 26 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Pagoda Point</td>
//             <td>₹3,600</td>
//             <td>₹2,700 - ₹5,300</td>
//             <td>
//               <button>See 22 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Shevaroy Hills</td>
//             <td>₹3,000</td>
//             <td>₹2,200 - ₹4,500</td>
//             <td>
//               <button>See 31 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Nagloor</td>
//             <td>₹2,700</td>
//             <td>₹1,900 - ₹4,000</td>
//             <td>
//               <button>See 18 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Semmanatham</td>
//             <td>₹2,500</td>
//             <td>₹1,800 - ₹3,800</td>
//             <td>
//               <button>See 16 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Manjakuttai</td>
//             <td>₹2,900</td>
//             <td>₹2,100 - ₹4,300</td>
//             <td>
//               <button>See 20 Lands</button>
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

export function Yercaud() {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState("");

  const properties = [
    { locality: "Yercaud Town", avgPrice: 3800 },
    { locality: "Ondikadai", avgPrice: 3200 },
    { locality: "Lake Area", avgPrice: 4200 },
    { locality: "Pagoda Point", avgPrice: 3600 },
    { locality: "Shevaroy Hills", avgPrice: 3000 },
    { locality: "Nagloor", avgPrice: 2700 },
    { locality: "Semmanatham", avgPrice: 2500 },
    { locality: "Manjakuttai", avgPrice: 2900 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (priceRange === "low") return item.avgPrice < 2800;
    if (priceRange === "medium")
      return item.avgPrice >= 2800 && item.avgPrice <= 3800;
    if (priceRange === "high") return item.avgPrice > 3800;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Yercaud</h2>

      {/* Filter Dropdown */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Price Range</InputLabel>
        <Select
          value={priceRange}
          label="Price Range"
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <MenuItem value="low">Below ₹2800</MenuItem>
          <MenuItem value="medium">₹2800 - ₹3800</MenuItem>
          <MenuItem value="high">Above ₹3800</MenuItem>
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
