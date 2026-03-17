// import { useState, useContext } from "react";
// import {
//   Box,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { CardType } from "./CardType";
// import { PropertyContext } from "./DataProvider";

// export function PropertyFilter({ type, places }) {
//   const { allProperties } = useContext(PropertyContext); // 🔥 get all data
//   const [place, setPlace] = useState("");
//   const [price, setPrice] = useState("");
//   const [search, setSearch] = useState("");

//   const filteredData = allProperties.filter((item) => {
//     // 1️⃣ Type filter (city / village / hill)
//     if (item.type !== type) return false;

//     // 2️⃣ Place filter (city OR locality)
//     const placeMatch = place
//       ? item.city.toLowerCase() === place.toLowerCase() ||
//         item.locality.toLowerCase() === place.toLowerCase()
//       : true;

//     if (!placeMatch) return false;

//     // 3️⃣ Search filter (city OR locality match)
//     const searchMatch = search
//       ? item.city.toLowerCase().includes(search.toLowerCase()) ||
//         item.locality.toLowerCase().includes(search.toLowerCase())
//       : true;

//     if (!searchMatch) return false;

//     // 4️⃣ Price filter
//     if (!price) return true;

//     const placeData = allProperties.filter(
//       (d) =>
//         d.type === type &&
//         (d.city.toLowerCase() === place.toLowerCase() ||
//           d.locality.toLowerCase() === place.toLowerCase()),
//     );

//     const prices = placeData.map((d) => Number(d.avgPriceSqft));
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
//       {/* LEFT FILTERS */}
//       <Box sx={{ width: 250 }}>
//         {/* 🔥 Search Bar */}
//         <TextField
//           fullWidth
//           label="Search City or Locality"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           sx={{ marginBottom: 2 }}
//         />

//         {/* Place Dropdown */}
//         <FormControl fullWidth sx={{ marginBottom: 3 }}>
//           <InputLabel>Select Place</InputLabel>
//           <Select value={place} onChange={(e) => setPlace(e.target.value)}>
//             {places.map((p) => (
//               <MenuItem key={p} value={p}>
//                 {p}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//         {/* Price Dropdown */}
//         <FormControl fullWidth disabled={!place}>
//           <InputLabel>Price</InputLabel>
//           <Select value={price} onChange={(e) => setPrice(e.target.value)}>
//             <MenuItem value="small">Low</MenuItem>
//             <MenuItem value="medium">Medium</MenuItem>
//             <MenuItem value="large">High</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>

//       {/* RIGHT PROPERTY CARDS */}
//       <Box
//         sx={{
//           flex: 1,
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
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

import { useState, useContext } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { CardType } from "./CardType";
import { PropertyContext } from "./DataProvider";
import { useNavigate } from "react-router-dom";

export function PropertyFilter({ type, places }) {
  const { allProperties, fetchProperties } = useContext(PropertyContext); // 🔥 get all data
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // 🔹 DELETE handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      await fetch(`https://6971d21632c6bacb12c49d51.mockapi.io/Housing/${id}`, {
        method: "DELETE",
      });
      fetchProperties(); // refresh list after delete
    }
  };

  // 🔹 EDIT handler
  const handleEdit = (id) => {
    navigate(`/edit-property/${id}`); // Edit page navigate
  };

  const filteredData = allProperties.filter((item) => {
    // 1️⃣ Type filter (city / village / hill)
    if (item.type !== type) return false;

    // 2️⃣ Place filter (city OR locality)
    const placeMatch = place
      ? item.city.toLowerCase() === place.toLowerCase() ||
        item.locality.toLowerCase() === place.toLowerCase()
      : true;

    if (!placeMatch) return false;

    // 3️⃣ Search filter (city OR locality match)
    const searchMatch = search
      ? item.city.toLowerCase().includes(search.toLowerCase()) ||
        item.locality.toLowerCase().includes(search.toLowerCase())
      : true;

    if (!searchMatch) return false;

    // 4️⃣ Price filter
    if (!price) return true;

    const placeData = allProperties.filter(
      (d) =>
        d.type === type &&
        (d.city.toLowerCase() === place.toLowerCase() ||
          d.locality.toLowerCase() === place.toLowerCase()),
    );

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
      {/* LEFT FILTERS */}
      <Box sx={{ width: 250 }}>
        <TextField
          fullWidth
          label="Search City or Locality"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <FormControl fullWidth sx={{ marginBottom: 3 }}>
          <InputLabel>Select Place</InputLabel>
          <Select value={place} onChange={(e) => setPlace(e.target.value)}>
            {places.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth disabled={!place}>
          <InputLabel>Price</InputLabel>
          <Select value={price} onChange={(e) => setPrice(e.target.value)}>
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
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 3,
        }}
      >
        {filteredData.map((item) => (
          <CardType
            key={item.id}
            {...item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </Box>
    </Box>
  );
}
