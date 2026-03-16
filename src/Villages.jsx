//-----------------------------------------------------------------------------------------------
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

// export function Villages() {
//   const navigate = useNavigate();

//   const [village, setVillage] = useState("");
//   const [price, setPrice] = useState("");

//   // HANDLE VILLAGE CHANGE
//   const handleVillageChange = (event) => {
//     setVillage(event.target.value);
//     setPrice(""); // reset price
//   };

//   // HANDLE PRICE CHANGE
//   const handlePriceChange = (event) => {
//     const selectedPrice = event.target.value;

//     setPrice(selectedPrice);

//     if (village !== "") {
//       navigate(`/cityplots/village/${village}/${selectedPrice}`);
//     }
//   };

//   return (
//     <Box sx={{ padding: 4, display: "flex", gap: 3 }}>
//       {/* VILLAGE SELECT */}
//       <FormControl sx={{ minWidth: 200 }}>
//         <InputLabel>Village</InputLabel>

//         <Select value={village} label="Village" onChange={handleVillageChange}>
//           <MenuItem value="Villupuram">Villupuram</MenuItem>
//           <MenuItem value="Kallakurichi">Kallakurichi</MenuItem>
//           <MenuItem value="Tiruvannamalai">Tiruvannamalai</MenuItem>
//           <MenuItem value="Salem">Salem</MenuItem>
//           <MenuItem value="Ariyalur">Ariyalur</MenuItem>
//         </Select>
//       </FormControl>

//       {/* PRICE SELECT */}
//       <FormControl sx={{ minWidth: 200 }} disabled={!village}>
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

// export function Villages() {
//   const [village, setVillage] = useState("");
//   const [price, setPrice] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
//       .then((res) => res.json())
//       .then((result) => setData(result));
//   }, []);

//   const handleVillageChange = (e) => {
//     setVillage(e.target.value);
//     setPrice("");
//   };

//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const filteredData = data.filter((item) => {
//     if (item.type !== "village") return false;

//     const villageMatch = village ? item.city === village : true;

//     if (!villageMatch) return false;

//     if (!price) return true;

//     const villageData = data.filter(
//       (d) => d.type === "village" && d.city === village,
//     );

//     const prices = villageData.map((d) => Number(d.avgPriceSqft));

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
//           <InputLabel>Village</InputLabel>

//           <Select
//             value={village}
//             label="Village"
//             onChange={handleVillageChange}
//           >
//             <MenuItem value="Villupuram">Villupuram</MenuItem>
//             <MenuItem value="Kallakurichi">Kallakurichi</MenuItem>
//             <MenuItem value="Tiruvannamalai">Tiruvannamalai</MenuItem>
//             <MenuItem value="Salem">Salem</MenuItem>
//             <MenuItem value="Ariyalur">Ariyalur</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth disabled={!village}>
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

export function Villages() {
  return (
    <PropertyFilter
      type="village"
      places={[
        "Villupuram",
        "Kallakurichi",
        "Tiruvannamalai",
        "Salem",
        "Ariyalur"
      ]}
    />
  );
}