
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export function ChennaiPage() {
  const [area, setArea] = useState("");

  const properties = [
    { locality: "RA Puram", avgPrice: 18500 },
    { locality: "Nungambakkam", avgPrice: 16800 },
    { locality: "Adyar", avgPrice: 17200 },
    { locality: "Sholinganallur", avgPrice: 12000 },
    { locality: "Thoraipakkam", avgPrice: 13500 },
    { locality: "Porur", avgPrice: 9000 },
    { locality: "Tambaram", avgPrice: 7000 },

    { locality: "OMR", avgPrice: 7900 },
  ];

  const filteredProperties = properties.filter((item) => {
    if (area === "small") return item.avgPrice < 10000;
    if (area === "medium")
      return item.avgPrice >= 10000 && item.avgPrice <= 15000;
    if (area === "large") return item.avgPrice > 15000;
    return true;
  });
  

  return (
    <>
      <h2>Property Rates in Chennai</h2>

      {/* Select */}
      <FormControl sx={{ minWidth: 200 }}>
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

      {/* Table */}
      <table>
        <tbody>
          {filteredProperties.map((item, index) => (
            <tr key={index}>
              <td>{item.locality}</td>
              <td>₹{item.avgPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}