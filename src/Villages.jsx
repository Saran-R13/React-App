// import { useNavigate } from "react-router-dom";

// export function Villages() {
//   const navigate = useNavigate();
//   return (
//     <section className="village-properties">
//       <div className="village-fst-container">
//         <h2>Emerging Rural Investment Destinations</h2>

//         <p>
//           Discover high-potential land opportunities in rapidly developing rural
//           regions, offering long-term growth and secure property investments.
//         </p>
//       </div>
//       <div className="village-snd-container">
//         <button onClick={() => navigate("/villupurampage")}>Villupuram</button>
//         <button onClick={() => navigate("/kallakurichipage")}>
//           Kallakurichi
//         </button>
//         <button onClick={() => navigate("/tiruvannamalai")}>
//           Tiruvannamalai
//         </button>
//         <button onClick={() => navigate("/salem")}>Salam</button>
//         <button onClick={() => navigate("/ariyalur")}>Ariyalur</button>
//       </div>
//       <button onClick={() => navigate(-1)}>Back</button>
//     </section>
//   );
// }
//------------------------------------------------------------------------------------------------------
// import { useNavigate } from "react-router-dom";
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { useState } from "react";

// export function Villages() {
//   const navigate = useNavigate();
//   const [location, setLocation] = useState("");

//   return (
//     <section className="village-properties">
//       <div className="village-fst-container">
//         <h2>Emerging Rural Investment Destinations</h2>

//         <p>
//           Discover high-potential land opportunities in rapidly developing rural
//           regions, offering long-term growth and secure property investments.
//         </p>
//       </div>

//       {/* 🔽 Village Select Dropdown */}
//       <div style={{ marginTop: "20px" }}>
//         <FormControl sx={{ minWidth: 250 }}>
//           <InputLabel>Select Village</InputLabel>
//           <Select
//             value={location}
//             label="Select Village"
//             onChange={(e) => {
//               const selectedVillage = e.target.value;
//               setLocation(selectedVillage);

//               // ✅ Auto navigate
//               navigate(`/${selectedVillage}`);
//             }}
//           >
//             <MenuItem value="villupurampage">Villupuram</MenuItem>
//             <MenuItem value="kallakurichipage">Kallakurichi</MenuItem>
//             <MenuItem value="tiruvannamalai">Tiruvannamalai</MenuItem>
//             <MenuItem value="salem">Salem</MenuItem>
//             <MenuItem value="ariyalur">Ariyalur</MenuItem>
//           </Select>
//         </FormControl>
//       </div>

//       <button style={{ marginTop: "20px" }} onClick={() => navigate(-1)}>
//         Back
//       </button>
//     </section>
//   );
// }
//---------------------------------------------------------------------------------------------------------------

import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { KallakurichiPage } from "./Kallakurichi";
import { Tiruvannamalai } from "./Tiruvannamalai";

export function Villages() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");

  const properties = {
    Villupuram: [
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
    ],
    Kallakurichi: [
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
    ],
    Tiruvannamalai: [
      { locality: "Tiruvannamalai Town", avgPrice: 2400 },
      { locality: "Chengam", avgPrice: 1600 },
      { locality: "Polur", avgPrice: 1700 },
      { locality: "Arani", avgPrice: 1950 },
      { locality: "Vandavasi", avgPrice: 1850 },
      { locality: "Kalasapakkam", avgPrice: 1400 },
      { locality: "Chetpet", avgPrice: 1550 },
      { locality: "Thanipadi", avgPrice: 1200 },
      { locality: "Jawadhu Hills (Foothills)", avgPrice: 1100 },
      { locality: "Mel Chengam", avgPrice: 1300 },
    ],
    Salem: [
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
    ],
    Ariyalur: [
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
    ],
  };
  const currentProperties = properties[location] || [];

  const prices = currentProperties.map((item) => item.avgPrice);

  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;

  const range = (maxPrice - minPrice) / 3;

  const filteredProperties = currentProperties.filter((item) => {
    if (area === "small") return item.avgPrice <= minPrice + range;

    if (area === "medium")
      return (
        item.avgPrice > minPrice + range &&
        item.avgPrice <= minPrice + range * 2
      );

    if (area === "large") return item.avgPrice > minPrice + range * 2;

    return true;
  });

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Strategic Locations Across Tamil Nadu
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Unlock premium land assets in rapidly developing urban hubs.
      </Typography>

      {/* FILTERS */}
      <Box sx={{ display: "flex", gap: 3, mb: 3, flexWrap: "wrap" }}>
        {/* LOCATION */}
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel>Location</InputLabel>
          <Select
            value={location}
            label="Location"
            onChange={(e) => {
              setLocation(e.target.value);
              setArea("");
            }}
          >
            <MenuItem value="Villupuram">Villupuram</MenuItem>
            <MenuItem value="Kallakurichi">Kallakurichi</MenuItem>
            <MenuItem value="Tiruvannamalai">Tiruvannamalai</MenuItem>
            <MenuItem value="Salem">Salem</MenuItem>
            <MenuItem value="Ariyalur">Ariyalur</MenuItem>
          </Select>
        </FormControl>

        {/* PRICE FILTER */}
        <FormControl sx={{ minWidth: 220 }} disabled={!location}>
          <InputLabel>Price Type</InputLabel>
          <Select
            value={area}
            label="Price Type"
            onChange={(e) => setArea(e.target.value)}
          >
            <MenuItem value="small">Low Price</MenuItem>
            <MenuItem value="medium">Medium Price</MenuItem>
            <MenuItem value="large">High Price</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {location && (
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h6" gutterBottom>
            Property Rates in {location}
          </Typography>

          <table width="100%" cellPadding="10">
            <thead>
              <tr style={{ background: "#f5f5f5" }}>
                <th align="left">Locality</th>
                <th align="left">Avg Price (₹/sq.ft)</th>
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
          </table>
        </Paper>
      )}
      <Box sx={{ mt: 3 }}>
        <button onClick={() => navigate(-1)}>Back</button>
      </Box>
    </Box>
  );
}
