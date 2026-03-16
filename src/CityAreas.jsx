// import { useState, useEffect } from "react";
// import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
// import { CardType } from "./CardType";

// export function CityAreas() {
//   const [city, setCity] = useState("");
//   const [price, setPrice] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
//       .then((res) => res.json())
//       .then((result) => setData(result));
//   }, []);

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//     setPrice("");
//   };

//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const filteredData = data.filter((item) => {
//     const cityMatch = city ? item.city === city : true;

//     let priceMatch = true;

//     const priceValue = Number(item.avgPriceSqft);

//     if (price === "small") priceMatch = priceValue < 2000;

//     if (price === "medium")
//       priceMatch = priceValue >= 2000 && priceValue <= 4000;

//     if (price === "large") priceMatch = priceValue > 4000;

//     return cityMatch && priceMatch;
//   });

//   return (
//     <Box sx={{ padding: 4, display: "flex", gap: 3 }}>
//       {/* FILTER LEFT */}
//       <Box sx={{ width: 250 }}>
//         <FormControl fullWidth sx={{ marginBottom: 3 }}>
//           <InputLabel>City</InputLabel>

//           <Select value={city} label="City" onChange={handleCityChange}>
//             <MenuItem value="Chennai">Chennai</MenuItem>
//             <MenuItem value="Coimbatore">Coimbatore</MenuItem>
//             <MenuItem value="Madurai">Madurai</MenuItem>
//             <MenuItem value="Trichy">Trichy</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth disabled={!city}>
//           <InputLabel>Price</InputLabel>

//           <Select value={price} label="Price" onChange={handlePriceChange}>
//             <MenuItem value="small">Low</MenuItem>
//             <MenuItem value="medium">Medium</MenuItem>
//             <MenuItem value="large">High</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>

//       {/* PROPERTY GRID */}
//       <Box
//         sx={{
//           flex: 1,
//           display: "grid",
//           gridTemplateColumns: "repeat(3,1fr)",
//           gap: 3,
//         }}
//       >
//         {filteredData.map((item) => (
//           <CardType key={item.id} {...item} />
//         ))}
//       </Box>
//     </Box>
//   );
// }

// import { useState, useEffect } from "react";
// import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
// import { CardType } from "./CardType";

// export function CityAreas() {
//   const [city, setCity] = useState("");
//   const [price, setPrice] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
//       .then((res) => res.json())
//       .then((result) => setData(result));
//   }, []);

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//     setPrice("");
//   };

//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const filteredData = data.filter((item) => {
//     const cityMatch = city ? item.city === city : true;

//     if (!cityMatch) return false;

//     if (!price) return true;

//     const cityData = data.filter((d) => d.city === city);

//     const prices = cityData.map((d) => Number(d.avgPriceSqft));

//     const min = Math.min(...prices);
//     const max = Math.max(...prices);

//     const range = (max - min) / 3;

//     const value = Number(item.avgPriceSqft);

//     if (price === "small") return value <= min + range;

//     if (price === "medium")
//       return value > min + range && value <= min + range * 2;

//     if (price === "large") return value > min + range * 2;

//     return true;
//   });

//   return (
//     <Box sx={{ padding: 4, display: "flex", gap: 3 }}>
//       {/* LEFT FILTER */}
//       <Box sx={{ width: 250 }}>
//         <FormControl fullWidth sx={{ marginBottom: 3 }}>
//           <InputLabel>City</InputLabel>

//           <Select value={city} label="City" onChange={handleCityChange}>
//             <MenuItem value="Chennai">Chennai</MenuItem>
//             <MenuItem value="Coimbatore">Coimbatore</MenuItem>
//             <MenuItem value="Madurai">Madurai</MenuItem>
//             <MenuItem value="Trichy">Trichy</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth disabled={!city}>
//           <InputLabel>Price</InputLabel>

//           <Select value={price} label="Price" onChange={handlePriceChange}>
//             <MenuItem value="small">Low</MenuItem>
//             <MenuItem value="medium">Medium</MenuItem>
//             <MenuItem value="large">High</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>

//       {/* RIGHT CARDS */}
//       <Box
//         sx={{
//           flex: 1,
//           display: "grid",
//           gridTemplateColumns: "repeat(3,1fr)",
//           gap: 3,
//         }}
//       >
//         {filteredData.map((item) => (
//           <CardType key={item.id} {...item} />
//         ))}
//       </Box>
//     </Box>
//   );
// }
import { PropertyFilter } from "./PropertyFilter";

export function CityAreas() {
  return (
    <PropertyFilter
      type="city"
      places={["Chennai","Coimbatore","Madurai","Trichy"]}
    />
  );
}