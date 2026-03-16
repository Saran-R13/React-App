// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

// export function HillStations() {
//   const navigate = useNavigate();

//   const [hill, setHill] = useState("");
//   const [price, setPrice] = useState("");

//   // HILL CHANGE
//   const handleHillChange = (event) => {
//     setHill(event.target.value);
//     setPrice("");
//   };

//   // PRICE CHANGE
//   const handlePriceChange = (event) => {
//     const selectedPrice = event.target.value;

//     setPrice(selectedPrice);

//     if (hill !== "") {
//       navigate(`/cityplots/hill/${hill}/${selectedPrice}`);
//     }
//   };

//   return (
//     <Box sx={{ padding: 4, display: "flex", gap: 3 }}>
//       {/* HILL STATION SELECT */}
//       <FormControl sx={{ minWidth: 200 }}>
//         <InputLabel>Hill Station</InputLabel>

//         <Select value={hill} label="Hill Station" onChange={handleHillChange}>
//           <MenuItem value="Ooty">Ooty</MenuItem>
//           <MenuItem value="Kodaikanal">Kodaikanal</MenuItem>
//           <MenuItem value="Yercaud">Yercaud</MenuItem>
//           <MenuItem value="Coonoor">Coonoor</MenuItem>
//         </Select>
//       </FormControl>

//       {/* PRICE SELECT */}
//       <FormControl sx={{ minWidth: 200 }} disabled={!hill}>
//         <InputLabel>Price</InputLabel>

//         <Select value={price} label="Price" onChange={handlePriceChange}>
//           <MenuItem value="small">Low</MenuItem>
//           <MenuItem value="medium">Medium</MenuItem>
//           <MenuItem value="large">High</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

// import { useState, useEffect } from "react";
// import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
// import { CardType } from "./CardType";

// export function HillStations() {
//   const [hill, setHill] = useState("");
//   const [price, setPrice] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
//       .then((res) => res.json())
//       .then((result) => setData(result));
//   }, []);

//   const handleHillChange = (e) => {
//     setHill(e.target.value);
//     setPrice("");
//   };

//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const filteredData = data.filter((item) => {
//     if (item.type !== "hills") return false;

//     const hillMatch = hill ? item.city === hill : true;

//     if (!hillMatch) return false;

//     if (!price) return true;

//     const hillData = data.filter((d) => d.type === "hills" && d.city === hill);

//     const prices = hillData.map((d) => Number(d.avgPriceSqft));

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
//           <InputLabel>Hill Station</InputLabel>

//           <Select value={hill} label="Hill Station" onChange={handleHillChange}>
//             <MenuItem value="Ooty">Ooty</MenuItem>
//             <MenuItem value="Kodaikanal">Kodaikanal</MenuItem>
//             <MenuItem value="Yercaud">Yercaud</MenuItem>
//             <MenuItem value="Coonoor">Coonoor</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth disabled={!hill}>
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
// import { useState, useEffect } from "react";
// import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
// import { CardType } from "./CardType";

// export function HillStations() {
//   const [hill, setHill] = useState("");
//   const [price, setPrice] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
//       .then((res) => res.json())
//       .then((result) => setData(result));
//   }, []);

//   const handleHillChange = (e) => {
//     setHill(e.target.value);
//     setPrice("");
//   };

//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const filteredData = data.filter((item) => {
//     const hillMatch = hill ? item.city === hill : true;

//     if (!hillMatch) return false;

//     if (!price) return true;

//     const hillData = data.filter((d) => d.city === hill);

//     const prices = hillData.map((d) => Number(d.avgPriceSqft));

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
//           <InputLabel>Hill Station</InputLabel>

//           <Select value={hill} label="Hill Station" onChange={handleHillChange}>
//             <MenuItem value="Ooty">Ooty</MenuItem>
//             <MenuItem value="Kodaikanal">Kodaikanal</MenuItem>
//             <MenuItem value="Yercaud">Yercaud</MenuItem>
//             <MenuItem value="Coonoor">Coonoor</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth disabled={!hill}>
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

export function HillStations() {
  return (
    <PropertyFilter
      type="hill"
      places={["Ooty", "Kodaikanal", "Yercaud", "Coonoor"]}
    />
  );
}
