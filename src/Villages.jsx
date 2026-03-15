//-----------------------------------------------------------------------------------------------
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

export function Villages() {
  const navigate = useNavigate();

  const [village, setVillage] = useState("");
  const [price, setPrice] = useState("");

  // HANDLE VILLAGE CHANGE
  const handleVillageChange = (event) => {
    setVillage(event.target.value);
    setPrice(""); // reset price
  };

  // HANDLE PRICE CHANGE
  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;

    setPrice(selectedPrice);

    if (village !== "") {
      navigate(`/cityplots/village/${village}/${selectedPrice}`);
    }
  };

  return (
    <Box sx={{ padding: 4, display: "flex", gap: 3 }}>
      {/* VILLAGE SELECT */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Village</InputLabel>

        <Select value={village} label="Village" onChange={handleVillageChange}>
          <MenuItem value="Villupuram">Villupuram</MenuItem>
          <MenuItem value="Kallakurichi">Kallakurichi</MenuItem>
          <MenuItem value="Tiruvannamalai">Tiruvannamalai</MenuItem>
          <MenuItem value="Salem">Salem</MenuItem>
          <MenuItem value="Ariyalur">Ariyalur</MenuItem>
        </Select>
      </FormControl>

      {/* PRICE SELECT */}
      <FormControl sx={{ minWidth: 200 }} disabled={!village}>
        <InputLabel>Price</InputLabel>

        <Select value={price} label="Price" onChange={handlePriceChange}>
          <MenuItem value="small">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="large">High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
