// import { useNavigate } from "react-router-dom";

// export function TrichyPage() {
//   const navigate = useNavigate();
//   return (
//     <section className="trichy-propertie-table">
//       <h2>Property Rates in Trichy, Tamil Nadu</h2>
//       <table className="trichy-table">
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
//             <td>Thillai Nagar</td>
//             <td>₹3,800</td>
//             <td>₹2,900 - ₹5,000</td>
//             <td>
//               <button>See 86 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Srirangam</td>
//             <td>₹4,200</td>
//             <td>₹3,100 - ₹5,500</td>
//             <td>
//               <button>See 73 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Navalur</td>
//             <td>₹3,400</td>
//             <td>₹2,600 - ₹4,500</td>
//             <td>
//               <button>See 65 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Bharathidasan Road</td>
//             <td>₹3,200</td>
//             <td>₹2,400 - ₹4,300</td>
//             <td>
//               <button>See 58 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Golden Rock</td>
//             <td>₹3,000</td>
//             <td>₹2,200 - ₹4,000</td>
//             <td>
//               <button>See 49 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Doctors Colony</td>
//             <td>₹4,500</td>
//             <td>₹3,500 - ₹6,100</td>
//             <td>
//               <button>See 39 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>K.K. Nagar (Trichy)</td>
//             <td>₹3,600</td>
//             <td>₹2,800 - ₹4,900</td>
//             <td>
//               <button>See 71 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Peelamedu Road</td>
//             <td>₹2,900</td>
//             <td>₹2,200 - ₹4,000</td>
//             <td>
//               <button>See 46 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Vidiyal Nagar</td>
//             <td>₹3,500</td>
//             <td>₹2,700 - ₹4,800</td>
//             <td>
//               <button>See 57 Properties</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Trichy West Zone</td>
//             <td>₹2,700</td>
//             <td>₹2,000 - ₹3,800</td>
//             <td>
//               <button>See 52 Properties</button>
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

export function TrichyPage() {
  const navigate = useNavigate();
  const [area, setArea] = useState("");

  const properties = [
    { locality: "Thillai Nagar", avgPrice: 3800 },
    { locality: "Srirangam", avgPrice: 4200 },
    { locality: "Navalur", avgPrice: 3400 },
    { locality: "Bharathidasan Road", avgPrice: 3200 },
    { locality: "Golden Rock", avgPrice: 3000 },
    { locality: "Doctors Colony", avgPrice: 4500 },
    { locality: "K.K. Nagar (Trichy)", avgPrice: 3600 },
    { locality: "Peelamedu Road", avgPrice: 2900 },
    { locality: "Vidiyal Nagar", avgPrice: 3500 },
    { locality: "Trichy West Zone", avgPrice: 2700 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (area === "small") return item.avgPrice < 3000;
    if (area === "medium")
      return item.avgPrice >= 3000 && item.avgPrice <= 3800;
    if (area === "large") return item.avgPrice > 3800;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Trichy</h2>

      {/* Filter Dropdown */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Price Range</InputLabel>
        <Select
          value={area}
          label="Price Range"
          onChange={(e) => setArea(e.target.value)}
        >
          <MenuItem value="small">Below 3000</MenuItem>
          <MenuItem value="medium">3000 - 3800</MenuItem>
          <MenuItem value="large">Above 3800</MenuItem>
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