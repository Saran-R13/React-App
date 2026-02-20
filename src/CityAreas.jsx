// import { useNavigate } from "react-router-dom";
// import {
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { useState } from "react";

// // }
// export function CityAreas() {
//   const navigate = useNavigate();
//   return (
//     <section className="city-properties">
//       <div className="city-fst-container">
//         <h2>Strategic Locations Across Tamil Nadu</h2>
//         <p>
//           Unlock premium land assets in rapidly developing urban hubs with
//           long-term value and growth potential.
//         </p>
//       </div>
//       <div className="city-snd-container">
//         <button onClick={() => navigate("/chennaiPage")}>Chennai</button>
//         <button onClick={() => navigate("/coimbatorePage")}>Coimbatore</button>
//         <button onClick={() => navigate("/maduraiPage")}>Madurai</button>
//         <button onClick={() => navigate("/trichyPage")}>Trichy</button>
//       </div>
//       <button onClick={() => navigate(-1)}>Back</button>
//     </section>
//   );
// }
import { ChennaiPage } from "./Chennai";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export function CityAreas() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  // const [property, setProperty] = useState("");
  // const [area, setArea] = useState("");
  // const [price, setPrice] = useState("");

  return (
    <section className="city-properties">
      <div className="city-fst-container">
        <h2>Strategic Locations Across Tamil Nadu</h2>
        <p>
          Unlock premium land assets in rapidly developing urban hubs with
          long-term value and growth potential.
        </p>
      </div>

      {/* 🔽 MUI Select Filters */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Location Select */}
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Location</InputLabel>
          <Select
            value={location}
            label="Location"
            onChange={(e) => setLocation(e.target.value)}
          >
            <MenuItem value="Chennai" onClick={() => navigate("/chennaiPage")}>
              Chennai
            </MenuItem>
            <MenuItem
              value="Coimbatore"
              onClick={() => navigate("/coimbatorePage")}
            >
              Coimbatore
            </MenuItem>
            <MenuItem value="Madurai" onClick={() => navigate("/maduraiPage")}>
              Madurai
            </MenuItem>
            <MenuItem value="Trichy" onClick={() => navigate("/trichyPage")}>
              Trichy
            </MenuItem>
          </Select>
        </FormControl>

        {/* Property Type Select
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Property Type</InputLabel>
          <Select
            value={property}
            label="Property Type"
            onChange={(e) => setProperty(e.target.value)}
          >
            <MenuItem value="Residential Plot">Residential Plot</MenuItem>
            <MenuItem value="Commercial Land">Commercial Land</MenuItem>
            <MenuItem value="Farm Land">Farm Land</MenuItem>
          </Select>
        </FormControl> */}

        {/* Area Select */}
        {/* <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Area (sq.ft)</InputLabel>
          <Select
            value={area}
            label="Area (sq.ft)"
            onChange={(e) => setArea(e.target.value)}
          >
            <MenuItem value="600-1000">600 - 1000 sq.ft</MenuItem>
            <MenuItem value="1000-2000">1000 - 2000 sq.ft</MenuItem>
            <MenuItem value="2000+">Above 2000 sq.ft</MenuItem>
          </Select>
        </FormControl> */}



        {/* <FormControl sx={{ minWidth: 200 }}>
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
        <ChennaiPage /> */}

        {/* Price */}
        {/* <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Price Range</InputLabel>
          <Select
            value={price}
            label="Price Range"
            onChange={(e) => setPrice(e.target.value)}
          >
            <MenuItem value="below50">Below ₹50 Lakhs</MenuItem>
            <MenuItem value="50to1cr">₹50 Lakhs - ₹1 Crore</MenuItem>
            <MenuItem value="1crto2cr">₹1 Crore - ₹2 Crore</MenuItem>
            <MenuItem value="above2cr">Above ₹2 Crore</MenuItem>
          </Select>
        </FormControl> */}
      </div>

      {/* City Buttons */}
      {/* <div className="city-snd-container">
        <button>Chennai</button>
        <button>Coimbatore</button>
        <button>Madurai</button>
        <button>Trichy</button>
      </div> */}

      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
