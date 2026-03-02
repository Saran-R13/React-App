// import { useNavigate } from "react-router-dom";

// export function HillStations() {
//   const navigate = useNavigate();
//   return (
//     <section className="hillStation-properties">
//       <div className="hillstation-fst-container">
//         <h2>Premium Hill View Investment Destinations</h2>

//         <p>
//           Explore scenic hill locations offering serene environments, natural
//           beauty, and high-value land investment opportunities ideal for
//           resorts, villas, and future development.
//         </p>
//       </div>
//       <div className="hillstation-snd-container">
//         <button onClick={() => navigate("/ooty")}>Ooty (Udhagamandalam)</button>
//         <button onClick={() => navigate("/kodaikanal")}>Kodaikanal</button>
//         <button onClick={() => navigate("/yercaud")}>Yercaud</button>
//         <button onClick={() => navigate("/coonoor")}>Coonoor</button>
//       </div>
//       <button onClick={() => navigate(-1)}>Back</button>
//     </section>
//   );
// }

//-----------------------------------------------------------------------------------------------------------------------
// import { useNavigate } from "react-router-dom";
// import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { useState } from "react";

// export function HillStations() {
//   const navigate = useNavigate();
//   const [location, setLocation] = useState("");

//   return (
//     <section className="hillStation-properties">
//       <div className="hillstation-fst-container">
//         <h2>Premium Hill View Investment Destinations</h2>

//         <p>
//           Explore scenic hill locations offering serene environments, natural
//           beauty, and high-value land investment opportunities ideal for
//           resorts, villas, and future development.
//         </p>
//       </div>

//       {/* 🔽 Hill Station Select */}
//       <div style={{ marginTop: "20px" }}>
//         <FormControl sx={{ minWidth: 250 }}>
//           <InputLabel>Select Hill Station</InputLabel>
//           <Select
//             value={location}
//             label="Select Hill Station"
//             onChange={(e) => {
//               const selectedLocation = e.target.value;
//               setLocation(selectedLocation);

//               // ✅ Auto Navigate
//               navigate(`/${selectedLocation}`);
//             }}
//           >
//             <MenuItem value="ooty">Ooty (Udhagamandalam)</MenuItem>
//             <MenuItem value="kodaikanal">Kodaikanal</MenuItem>
//             <MenuItem value="yercaud">Yercaud</MenuItem>
//             <MenuItem value="coonoor">Coonoor</MenuItem>
//           </Select>
//         </FormControl>
//       </div>

//       <button style={{ marginTop: "20px" }} onClick={() => navigate(-1)}>
//         Back
//       </button>
//     </section>
//   );
// }
//------------------------------------------------------------------------------------------------------------------------------------

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
import { Ooty } from "./Ooty";
import { Kodaikanal } from "./Kodaikanal";
import { Coonoor } from "./Coonoor";

export function HillStations() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");

  const properties = {
    Ooty: [
      { locality: "Ooty Town", avgPrice: 5500 },
      { locality: "Ketti", avgPrice: 3700 },
      { locality: "Lovedale", avgPrice: 4500 },
      { locality: "Fern Hill", avgPrice: 6200 },
      { locality: "Elk Hill", avgPrice: 5800 },
      { locality: "Fingerpost", avgPrice: 3700 },
      { locality: "Thalayathimund", avgPrice: 4100 },
      { locality: "Doddabetta Foothills", avgPrice: 4800 },
    ],
    Kodaikanal: [
      { locality: "Kodaikanal Town", avgPrice: 4800 },
      { locality: "Vilpatti", avgPrice: 3900 },
      { locality: "Shenbaganur", avgPrice: 3700 },
      { locality: "Vattakanal", avgPrice: 4200 },
      { locality: "Poomparai", avgPrice: 2800 },
      { locality: "Perumalmalai", avgPrice: 3200 },
      { locality: "Kookal", avgPrice: 2400 },
      { locality: "Mannavanur", avgPrice: 2600 },
    ],
    Yercaud: [
      { locality: "Yercaud Town", avgPrice: 3800 },
      { locality: "Ondikadai", avgPrice: 3200 },
      { locality: "Lake Area", avgPrice: 4200 },
      { locality: "Pagoda Point", avgPrice: 3600 },
      { locality: "Shevaroy Hills", avgPrice: 3000 },
      { locality: "Nagloor", avgPrice: 2700 },
      { locality: "Semmanatham", avgPrice: 2500 },
      { locality: "Manjakuttai", avgPrice: 2900 },
    ],
    Coonoor: [
      { locality: "Coonoor Town", avgPrice: 4200 },
      { locality: "Wellington", avgPrice: 3800 },
      { locality: "Sim’s Park Area", avgPrice: 4500 },
      { locality: "Upper Coonoor", avgPrice: 3600 },
      { locality: "Lower Coonoor", avgPrice: 3200 },
      { locality: "Kattery", avgPrice: 3000 },
      { locality: "Aravenu", avgPrice: 2900 },
      { locality: "Burliyar", avgPrice: 2700 },
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
            <MenuItem value="Ooty">Ooty</MenuItem>
            <MenuItem value="Kodaikanal">Kodaikanal</MenuItem>
            <MenuItem value="Yercaud">Yercaud</MenuItem>
            <MenuItem value="Coonoor">Coonoor</MenuItem>
          </Select>
        </FormControl>
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
