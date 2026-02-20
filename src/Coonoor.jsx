// import { useNavigate } from "react-router-dom";

// export function Coonoor() {
//   const navigate = useNavigate();
//   return (
//     <section className="coonoor-propertie-table">
//       <h2>Property Rates in Villupuram, Tamil Nadu</h2>
//       <table className="coonoor-table">
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
//             <td>Coonoor Town</td>
//             <td>₹4,200</td>
//             <td>₹3,000 - ₹6,500</td>
//             <td>
//               <button>See 48 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Wellington</td>
//             <td>₹3,800</td>
//             <td>₹2,700 - ₹5,800</td>
//             <td>
//               <button>See 33 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Sim’s Park Area</td>
//             <td>₹4,500</td>
//             <td>₹3,200 - ₹6,800</td>
//             <td>
//               <button>See 26 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Upper Coonoor</td>
//             <td>₹3,600</td>
//             <td>₹2,600 - ₹5,400</td>
//             <td>
//               <button>See 29 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Lower Coonoor</td>
//             <td>₹3,200</td>
//             <td>₹2,300 - ₹4,800</td>
//             <td>
//               <button>See 24 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Kattery</td>
//             <td>₹3,000</td>
//             <td>₹2,100 - ₹4,500</td>
//             <td>
//               <button>See 21 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Aravenu</td>
//             <td>₹2,900</td>
//             <td>₹2,000 - ₹4,200</td>
//             <td>
//               <button>See 18 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Burliyar</td>
//             <td>₹2,700</td>
//             <td>₹1,900 - ₹3,900</td>
//             <td>
//               <button>See 16 Lands</button>
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

export function Coonoor() {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState("");

  const properties = [
    { locality: "Coonoor Town", avgPrice: 4200 },
    { locality: "Wellington", avgPrice: 3800 },
    { locality: "Sim’s Park Area", avgPrice: 4500 },
    { locality: "Upper Coonoor", avgPrice: 3600 },
    { locality: "Lower Coonoor", avgPrice: 3200 },
    { locality: "Kattery", avgPrice: 3000 },
    { locality: "Aravenu", avgPrice: 2900 },
    { locality: "Burliyar", avgPrice: 2700 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (priceRange === "low") return item.avgPrice < 3000;
    if (priceRange === "medium")
      return item.avgPrice >= 3000 && item.avgPrice <= 4000;
    if (priceRange === "high") return item.avgPrice > 4000;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Coonoor</h2>

      {/* Filter Dropdown */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Price Range</InputLabel>
        <Select
          value={priceRange}
          label="Price Range"
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <MenuItem value="low">Below ₹3000</MenuItem>
          <MenuItem value="medium">₹3000 - ₹4000</MenuItem>
          <MenuItem value="high">Above ₹4000</MenuItem>
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