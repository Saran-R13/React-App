// import { useNavigate } from "react-router-dom";

// export function MaduraiPage() {
//   const navigate = useNavigate();
//   return (
//     <section className="madurai-propertie-table">
//       <h2>Property Rates in Madurai, Tamil Nadu</h2>
//       <table className="madurai-table">
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
//             <td>KK Nagar</td>
//             <td>₹3,400</td>
//             <td>₹2,600 - ₹4,500</td>
//             <td>
//               <button>See 78 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Madurai East</td>
//             <td>₹3,100</td>
//             <td>₹2,400 - ₹4,200</td>
//             <td>
//               <button>See 65 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Simmakkal</td>
//             <td>₹3,600</td>
//             <td>₹2,900 - ₹4,900</td>
//             <td>
//               <button>See 54 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Alagar Kovil Road</td>
//             <td>₹3,000</td>
//             <td>₹2,300 - ₹4,000</td>
//             <td>
//               <button>See 59 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Thiru Nagar</td>
//             <td>₹2,800</td>
//             <td>₹2,100 - ₹3,700</td>
//             <td>
//               <button>See 47 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Goripalayam</td>
//             <td>₹3,200</td>
//             <td>₹2,500 - ₹4,300</td>
//             <td>
//               <button>See 51 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Vilangudi</td>
//             <td>₹2,900</td>
//             <td>₹2,200 - ₹3,800</td>
//             <td>
//               <button>See 42 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Thirunagar</td>
//             <td>₹3,300</td>
//             <td>₹2,600 - ₹4,500</td>
//             <td>
//               <button>See 68 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Sathamangalam</td>
//             <td>₹2,700</td>
//             <td>₹2,000 - ₹3,600</td>
//             <td>
//               <button>See 39 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Singampunari Road</td>
//             <td>₹2,500</td>
//             <td>₹1,900 - ₹3,300</td>
//             <td>
//               <button>See 33 Properties</button>
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

export function MaduraiPage() {
  const navigate = useNavigate();
  const [area, setArea] = useState("");

  const properties = [
    { locality: "KK Nagar", avgPrice: 3400 },
    { locality: "Madurai East", avgPrice: 3100 },
    { locality: "Simmakkal", avgPrice: 3600 },
    { locality: "Alagar Kovil Road", avgPrice: 3000 },
    { locality: "Thiru Nagar", avgPrice: 2800 },
    { locality: "Goripalayam", avgPrice: 3200 },
    { locality: "Vilangudi", avgPrice: 2900 },
    { locality: "Thirunagar", avgPrice: 3300 },
    { locality: "Sathamangalam", avgPrice: 2700 },
    { locality: "Singampunari Road", avgPrice: 2500 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (area === "small") return item.avgPrice < 2800;
    if (area === "medium")
      return item.avgPrice >= 2800 && item.avgPrice <= 3200;
    if (area === "large") return item.avgPrice > 3200;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Madurai</h2>

      {/* Filter Dropdown */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Area (sq.ft)</InputLabel>
        <Select
          value={area}
          label="Price Range"
          onChange={(e) => setArea(e.target.value)}
        >
          <MenuItem value="small">Below 2800</MenuItem>
          <MenuItem value="medium">2800 - 3200</MenuItem>
          <MenuItem value="large">Above 3200</MenuItem>
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
