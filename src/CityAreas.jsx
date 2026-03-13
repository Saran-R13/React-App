import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Paper,
} from "@mui/material";
// import { useState } from "react";

export function CityAreas() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");

  const currentProperties = properties.filter((item) => item.city === location);

  /* ---------------- PROPERTY DATA ---------------- */

  useEffect(() => {
    fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.log(err));
  }, []);

  const prices = currentProperties.map((item) => item.avgPriceSqft);

  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;

  const range = (maxPrice - minPrice) / 3;

  const filteredProperties = currentProperties.filter((item) => {
    if (area === "small") return item.avgPriceSqft <= minPrice + range;

    if (area === "medium")
      return (
        item.avgPriceSqft > minPrice + range &&
        item.avgPriceSqft <= minPrice + range * 2
      );

    if (area === "large") return item.avgPriceSqft > minPrice + range * 2;

    return true;
  });
  /* ---------------- UI ---------------- */

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
            <MenuItem value="Chennai">Chennai</MenuItem>
            <MenuItem value="Coimbatore">Coimbatore</MenuItem>
            <MenuItem value="Madurai">Madurai</MenuItem>
            <MenuItem value="Trichy">Trichy</MenuItem>
          </Select>
        </FormControl>

        {/* PRICE FILTER */}
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

      {/* TABLE */}
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
                  <td>₹{item.avgPriceSqft}</td>
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
