// import { useNavigate } from "react-router-dom";

// export function KallakurichiPage() {
//   const navigate = useNavigate();
//   return (
//     <section className="kallakurichi-propertie-table">
//       <h2>Property Rates in Villupuram, Tamil Nadu</h2>
//       <table className="kallakurichi-table">
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
//             <td>Kallakurichi Town</td>
//             <td>₹1,850</td>
//             <td>₹1,200 - ₹2,600</td>
//             <td>
//               <button>See 52 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Chinnasalem</td>
//             <td>₹1,650</td>
//             <td>₹1,000 - ₹2,300</td>
//             <td>
//               <button>See 41 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Sankarapuram</td>
//             <td>₹1,500</td>
//             <td>₹950 - ₹2,100</td>
//             <td>
//               <button>See 36 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Ulundurpet</td>
//             <td>₹1,750</td>
//             <td>₹1,100 - ₹2,500</td>
//             <td>
//               <button>See 44 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Thiyagadurgam</td>
//             <td>₹1,400</td>
//             <td>₹850 - ₹2,000</td>
//             <td>
//               <button>See 28 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Rishivandiyam</td>
//             <td>₹1,300</td>
//             <td>₹800 - ₹1,900</td>
//             <td>
//               <button>See 24 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Kalvarayan Hills (Foothills)</td>
//             <td>₹1,100</td>
//             <td>₹700 - ₹1,600</td>
//             <td>
//               <button>See 19 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Vadakkanandal</td>
//             <td>₹1,600</td>
//             <td>₹1,000 - ₹2,200</td>
//             <td>
//               <button>See 33 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Siruvangur</td>
//             <td>₹1,250</td>
//             <td>₹750 - ₹1,800</td>
//             <td>
//               <button>See 21 Lands</button>
//             </td>
//           </tr>

//           <tr>
//             <td>Veeracholapuram</td>
//             <td>₹1,350</td>
//             <td>₹850 - ₹1,950</td>
//             <td>
//               <button>See 26 Lands</button>
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

export function KallakurichiPage() {
  const navigate = useNavigate();
  const [area, setArea] = useState("");

  const properties = [
    { locality: "Kallakurichi Town", avgPrice: 1850 },
    { locality: "Chinnasalem", avgPrice: 1650 },
    { locality: "Sankarapuram", avgPrice: 1500 },
    { locality: "Ulundurpet", avgPrice: 1750 },
    { locality: "Thiyagadurgam", avgPrice: 1400 },
    { locality: "Rishivandiyam", avgPrice: 1300 },
    { locality: "Kalvarayan Hills (Foothills)", avgPrice: 1100 },
    { locality: "Vadakkanandal", avgPrice: 1600 },
    { locality: "Siruvangur", avgPrice: 1250 },
    { locality: "Veeracholapuram", avgPrice: 1350 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (area === "small") return item.avgPrice < 1300;
    if (area === "medium")
      return item.avgPrice >= 1300 && item.avgPrice <= 1700;
    if (area === "large") return item.avgPrice > 1700;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Kallakurichi</h2>

      {/* Filter Dropdown */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Price Range</InputLabel>
        <Select
          value={area}
          label="Price Range"
          onChange={(e) => setArea(e.target.value)}
        >
          <MenuItem value="small">Below 1300</MenuItem>
          <MenuItem value="medium">1300 - 1700</MenuItem>
          <MenuItem value="large">Above 1700</MenuItem>
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
      {/* </table>
       */}

      <br />
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}