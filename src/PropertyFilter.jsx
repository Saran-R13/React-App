import { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { CardType } from "./CardType";

export function PropertyFilter({ type, places }) {
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
    setPrice("");
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const filteredData = data.filter((item) => {
    // check type (city / village / hills)
    if (item.type !== type) return false;

    const placeMatch = place ? item.city === place : true;

    if (!placeMatch) return false;

    if (!price) return true;

    const placeData = data.filter((d) => d.type === type && d.city === place);

    const prices = placeData.map((d) => Number(d.avgPriceSqft));

    const min = Math.min(...prices);
    const max = Math.max(...prices);

    const range = (max - min) / 3;

    const value = Number(item.avgPriceSqft);

    if (price === "small") return value <= min + range;

    if (price === "medium")
      return value > min + range && value <= min + range * 2;

    if (price === "large") return value > min + range * 2;

    return true;
  });

  return (
    <Box sx={{ padding: 4, display: "flex", gap: 3 }}>
      {/* LEFT FILTER */}
      <Box sx={{ width: 250 }}>
        <FormControl fullWidth sx={{ marginBottom: 3 }}>
          <InputLabel>Select</InputLabel>

          <Select value={place} label="Select" onChange={handlePlaceChange}>
            {places.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth disabled={!place}>
          <InputLabel>Price</InputLabel>

          <Select value={price} label="Price" onChange={handlePriceChange}>
            <MenuItem value="small">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">High</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* RIGHT PROPERTY CARDS */}
      <Box
        sx={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 3,
        }}
      >
        {filteredData.map((item) => (
          <CardType key={item.id} {...item} />
        ))}
      </Box>
    </Box>
  );
}
