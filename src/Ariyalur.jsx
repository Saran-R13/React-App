// import { useNavigate } from "react-router-dom";

// export function Ariyalur() {
//   const navigate = useNavigate();
//   return (
//     <section className="ariyalur-propertie-table">
//       <h2>Property Rates in Villupuram, Tamil Nadu</h2>
//       <table className="ariyalur-table">
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
//             <td>Ariyalur Town</td>
//             <td>₹1,900</td>
//             <td>₹1,200 - ₹2,500</td>
//             <td>
//               <button>See 42 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Jayankondam</td>
//             <td>₹1,450</td>
//             <td>₹900 - ₹1,800</td>
//             <td>
//               <button>See 31 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Udayarpalayam</td>
//             <td>₹1,200</td>
//             <td>₹800 - ₹1,500</td>
//             <td>
//               <button>See 26 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Sendurai</td>
//             <td>₹950</td>
//             <td>₹700 - ₹1,200</td>
//             <td>
//               <button>See 18 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Andimadam</td>
//             <td>₹1,050</td>
//             <td>₹700 - ₹1,300</td>
//             <td>
//               <button>See 22 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Thirumanur</td>
//             <td>₹850</td>
//             <td>₹600 - ₹1,000</td>
//             <td>
//               <button>See 16 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Keezhapalur</td>
//             <td>₹900</td>
//             <td>₹600 - ₹1,100</td>
//             <td>
//               <button>See 14 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Varadarajanpettai</td>
//             <td>₹1,150</td>
//             <td>₹800 - ₹1,400</td>
//             <td>
//               <button>See 19 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Kallankurichi</td>
//             <td>₹1,300</td>
//             <td>₹900 - ₹1,600</td>
//             <td>
//               <button>See 21 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Elakurichi</td>
//             <td>₹950</td>
//             <td>₹700 - ₹1,200</td>
//             <td>
//               <button>See 17 Lands</button>
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

export function Ariyalur() {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState("");

  const properties = [
    { locality: "Ariyalur Town", avgPrice: 1900 },
    { locality: "Jayankondam", avgPrice: 1450 },
    { locality: "Udayarpalayam", avgPrice: 1200 },
    { locality: "Sendurai", avgPrice: 950 },
    { locality: "Andimadam", avgPrice: 1050 },
    { locality: "Thirumanur", avgPrice: 850 },
    { locality: "Keezhapalur", avgPrice: 900 },
    { locality: "Varadarajanpettai", avgPrice: 1150 },
    { locality: "Kallankurichi", avgPrice: 1300 },
    { locality: "Elakurichi", avgPrice: 950 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (priceRange === "low") return item.avgPrice < 1000;
    if (priceRange === "medium")
      return item.avgPrice >= 1000 && item.avgPrice <= 1500;
    if (priceRange === "high") return item.avgPrice > 1500;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Ariyalur</h2>

      {/* Filter Dropdown */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Price Range</InputLabel>
        <Select
          value={priceRange}
          label="Price Range"
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <MenuItem value="low">Below ₹1000</MenuItem>
          <MenuItem value="medium">₹1000 - ₹1500</MenuItem>
          <MenuItem value="high">Above ₹1500</MenuItem>
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