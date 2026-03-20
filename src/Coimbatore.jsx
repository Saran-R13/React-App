import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function CoimbatorePage() {
  const navigate = useNavigate();
  const [area, setArea] = useState("");

  const properties = [
    { locality: "RS Puram", avgPrice: 5800 },
    { locality: "Saibaba Colony", avgPrice: 5200 },
    { locality: "Gandhipuram", avgPrice: 6000 },
    { locality: "Saravanampatti", avgPrice: 4200 },
    { locality: "Peelamedu", avgPrice: 4900 },
    { locality: "Kalapatti", avgPrice: 3800 },
    { locality: "Kuniamuthur", avgPrice: 3400 },
    { locality: "Eachanari", avgPrice: 3100 },
    { locality: "Perur", avgPrice: 3600 },
    { locality: "Palladam Road", avgPrice: 3900 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (area === "small") return item.avgPrice < 4000;
    if (area === "medium")
      return item.avgPrice >= 4000 && item.avgPrice <= 5500;
    if (area === "large") return item.avgPrice > 5500;
    return true;
  });

  return (
    <>
      <h2>Property Rates in Coimbatore</h2>

     
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Area (sq.ft)</InputLabel>
        <Select
          value={area}
          label="Price Range"
          onChange={(e) => setArea(e.target.value)}
        >
          <MenuItem value="small">Below 4000</MenuItem>
          <MenuItem value="medium">4000 - 5500</MenuItem>
          <MenuItem value="large">Above 5500</MenuItem>
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
   

      <br />
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}
