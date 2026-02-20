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

import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export function Villages() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  return (
    <section className="village-properties">
      <div className="village-fst-container">
        <h2>Emerging Rural Investment Destinations</h2>

        <p>
          Discover high-potential land opportunities in rapidly developing rural
          regions, offering long-term growth and secure property investments.
        </p>
      </div>

      {/* 🔽 Village Select Dropdown */}
      <div style={{ marginTop: "20px" }}>
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel>Select Village</InputLabel>
          <Select
            value={location}
            label="Select Village"
            onChange={(e) => {
              const selectedVillage = e.target.value;
              setLocation(selectedVillage);

              // ✅ Auto navigate
              navigate(`/${selectedVillage}`);
            }}
          >
            <MenuItem value="villupurampage">Villupuram</MenuItem>
            <MenuItem value="kallakurichipage">Kallakurichi</MenuItem>
            <MenuItem value="tiruvannamalai">Tiruvannamalai</MenuItem>
            <MenuItem value="salem">Salem</MenuItem>
            <MenuItem value="ariyalur">Ariyalur</MenuItem>
          </Select>
        </FormControl>
      </div>

      <button style={{ marginTop: "20px" }} onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  );
}
