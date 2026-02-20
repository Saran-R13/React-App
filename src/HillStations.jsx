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

import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export function HillStations() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  return (
    <section className="hillStation-properties">
      <div className="hillstation-fst-container">
        <h2>Premium Hill View Investment Destinations</h2>

        <p>
          Explore scenic hill locations offering serene environments, natural
          beauty, and high-value land investment opportunities ideal for
          resorts, villas, and future development.
        </p>
      </div>

      {/* 🔽 Hill Station Select */}
      <div style={{ marginTop: "20px" }}>
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel>Select Hill Station</InputLabel>
          <Select
            value={location}
            label="Select Hill Station"
            onChange={(e) => {
              const selectedLocation = e.target.value;
              setLocation(selectedLocation);

              // ✅ Auto Navigate
              navigate(`/${selectedLocation}`);
            }}
          >
            <MenuItem value="ooty">Ooty (Udhagamandalam)</MenuItem>
            <MenuItem value="kodaikanal">Kodaikanal</MenuItem>
            <MenuItem value="yercaud">Yercaud</MenuItem>
            <MenuItem value="coonoor">Coonoor</MenuItem>
          </Select>
        </FormControl>
      </div>

      <button style={{ marginTop: "20px" }} onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  );
}
