// import { useNavigate } from "react-router-dom";

// export function Salem() {
//   const navigate = useNavigate();
//   return (
//     <section className="salem-propertie-table">
//       <h2>Property Rates in Villupuram, Tamil Nadu</h2>
//       <table className="salem-table">
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
//             <td>Salem Town</td>
//             <td>₹3,200</td>
//             <td>₹2,400 - ₹4,500</td>
//             <td>
//               <button>See 74 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Attur</td>
//             <td>₹1,850</td>
//             <td>₹1,200 - ₹2,700</td>
//             <td>
//               <button>See 39 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Omalur</td>
//             <td>₹2,100</td>
//             <td>₹1,400 - ₹3,000</td>
//             <td>
//               <button>See 46 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Yercaud Foothills</td>
//             <td>₹2,800</td>
//             <td>₹2,000 - ₹4,200</td>
//             <td>
//               <button>See 31 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Edappadi</td>
//             <td>₹1,750</td>
//             <td>₹1,100 - ₹2,500</td>
//             <td>
//               <button>See 28 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Mettur</td>
//             <td>₹1,900</td>
//             <td>₹1,200 - ₹2,800</td>
//             <td>
//               <button>See 33 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Valapady</td>
//             <td>₹1,600</td>
//             <td>₹1,000 - ₹2,300</td>
//             <td>
//               <button>See 25 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Gangavalli</td>
//             <td>₹1,450</td>
//             <td>₹900 - ₹2,100</td>
//             <td>
//               <button>See 22 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Kadayampatti</td>
//             <td>₹1,700</td>
//             <td>₹1,100 - ₹2,400</td>
//             <td>
//               <button>See 27 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Tharamangalam</td>
//             <td>₹1,550</td>
//             <td>₹950 - ₹2,200</td>
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

export function Salem() {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState("");

  const properties = [
    { locality: "Salem Town", avgPrice: 3200 },
    { locality: "Attur", avgPrice: 1850 },
    { locality: "Omalur", avgPrice: 2100 },
    { locality: "Yercaud Foothills", avgPrice: 2800 },
    { locality: "Edappadi", avgPrice: 1750 },
    { locality: "Mettur", avgPrice: 1900 },
    { locality: "Valapady", avgPrice: 1600 },
    { locality: "Gangavalli", avgPrice: 1450 },
    { locality: "Kadayampatti", avgPrice: 1700 },
    { locality: "Tharamangalam", avgPrice: 1550 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (priceRange === "low") return item.avgPrice < 1700;
    if (priceRange === "medium")
      return item.avgPrice >= 1700 && item.avgPrice <= 2500;
    if (priceRange === "high") return item.avgPrice > 2500;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Salem</h2>

      {/* Filter Dropdown */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Price Range</InputLabel>
        <Select
          value={priceRange}
          label="Price Range"
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <MenuItem value="low">Below ₹1700</MenuItem>
          <MenuItem value="medium">₹1700 - ₹2500</MenuItem>
          <MenuItem value="high">Above ₹2500</MenuItem>
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