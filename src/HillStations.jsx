
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

export function HillStations() {
  const navigate = useNavigate();

  const [hill, setHill] = useState("");
  const [price, setPrice] = useState("");

  // HILL CHANGE
  const handleHillChange = (event) => {
    setHill(event.target.value);
    setPrice("");
  };

  // PRICE CHANGE
  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;

    setPrice(selectedPrice);

    if (hill !== "") {
      navigate(`/cityplots/hill/${hill}/${selectedPrice}`);
    }
  };

  return (
    <Box sx={{ padding: 4, display: "flex", gap: 3 }}>
      {/* HILL STATION SELECT */}
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Hill Station</InputLabel>

        <Select value={hill} label="Hill Station" onChange={handleHillChange}>
          <MenuItem value="Ooty">Ooty</MenuItem>
          <MenuItem value="Kodaikanal">Kodaikanal</MenuItem>
          <MenuItem value="Yercaud">Yercaud</MenuItem>
          <MenuItem value="Coonoor">Coonoor</MenuItem>
        </Select>
      </FormControl>

      {/* PRICE SELECT */}
      <FormControl sx={{ minWidth: 200 }} disabled={!hill}>
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
