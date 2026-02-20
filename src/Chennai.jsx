// import { useNavigate } from "react-router-dom";

// export function ChennaiPage() {
//   const navigate = useNavigate();
//   return (
//     <section className="chennai-propertie-table">
//       <h2>Property Rates in Chennai, Tamil Nadu</h2>
//       <table className="chennai-table">
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
//             <td>RA Puram</td>
//             <td>₹18,500</td>
//             <td>₹14,000 - ₹25,000</td>
//             <td>
//               <button onClick={() => navigate("/cityplots/rs-puram")}>
//                 See 10 Properties
//               </button>
//             </td>
//           </tr>

//           <tr>
//             <td>Nungambakkam</td>
//             <td>₹80016,</td>
//             <td>₹12,500 - ₹22,000</td>
//             <td>
//               <button>See 134 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Adyar</td>
//             <td>₹17,200</td>
//             <td>₹13,000 - ₹23,500</td>
//             <td>
//               <button>See 96 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>OMR (Old Mahabalipuram Road)</td>
//             <td>₹7,900</td>
//             <td>₹5,500 - ₹11,500</td>
//             <td>
//               <button>See 312 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Sholinganallur</td>
//             <td>₹8,400</td>
//             <td>₹6,200 - ₹12,000</td>
//             <td>
//               <button>See 278 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Thoraipakkam</td>
//             <td>₹9,100</td>
//             <td>₹6,800 - ₹13,500</td>
//             <td>
//               <button>See 165 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Medavakkam</td>
//             <td>₹6,700</td>
//             <td>₹4,800 - ₹9,200</td>
//             <td>
//               <button>See 210 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Porur</td>
//             <td>₹8,900</td>
//             <td>₹6,000 - ₹13,000</td>
//             <td>
//               <button>See 143 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Tambaram</td>
//             <td>₹6,200</td>
//             <td>₹4,500 - ₹8,800</td>
//             <td>
//               <button>See 189 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Perumbakkam</td>
//             <td>₹6,900</td>
//             <td>₹5,000 - ₹9,500</td>
//             <td>
//               <button>See 156 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Pallavaram</td>
//             <td>₹8,300</td>
//             <td>₹6,000 - ₹12,500</td>
//             <td>
//               <button>See 121 Properties</button>
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

export function ChennaiPage() {
  const [area, setArea] = useState("");

  const properties = [
    { locality: "RA Puram", avgPrice: 18500 },
    { locality: "Nungambakkam", avgPrice: 16800 },
    { locality: "Adyar", avgPrice: 17200 },
    { locality: "Sholinganallur", avgPrice: 12000 },
    { locality: "Thoraipakkam", avgPrice: 13500 },
    { locality: "Porur", avgPrice: 9000 },
    { locality: "Tambaram", avgPrice: 7000 },

    { locality: "OMR", avgPrice: 7900 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (area === "small") return item.avgPrice < 10000;
    if (area === "medium")
      return item.avgPrice >= 10000 && item.avgPrice <= 15000;
    if (area === "large") return item.avgPrice > 15000;
    return true;
  });
  

  return (
    <>
      <h2>Property Rates in Chennai</h2>

      {/* Select */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Area (sq.ft)</InputLabel>
        <Select
          value={area}
          label="Area"
          onChange={(e) => setArea(e.target.value)}
        >
          <MenuItem value="small">Below 10000</MenuItem>
          <MenuItem value="medium">10000 - 15000</MenuItem>
          <MenuItem value="large">Above 15000</MenuItem>
        </Select>
      </FormControl>

      {/* Table */}
      <table>
        <tbody>
          {filteredProperties.map((item, index) => (
            <tr key={index}>
              <td>{item.locality}</td>
              <td>₹{item.avgPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
