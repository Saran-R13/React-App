//---------------------------------------------------------------------------
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

export function CityAreas() {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setPrice("");
  };

  const handlePriceChange = (e) => {
    const selectedPrice = e.target.value;
    setPrice(selectedPrice);

    if (city) {
      navigate(`/cityplots/city/${city}/${selectedPrice}`);
    }
  };

  return (
    <Box sx={{ padding: 4, display: "flex", gap: 3 }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>City</InputLabel>

        <Select value={city} label="City" onChange={handleCityChange}>
          <MenuItem value="Chennai">Chennai</MenuItem>
          <MenuItem value="Coimbatore">Coimbatore</MenuItem>
          <MenuItem value="Madurai">Madurai</MenuItem>
          <MenuItem value="Trichy">Trichy</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }} disabled={!city}>
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
