// import { useState } from "react";
// import { TextField, Button } from "@mui/material";

// export function AddProperty() {
//   const [type, setType] = useState("");
//   const [city, setCity] = useState("");
//   const [locality, setLocality] = useState("");
//   const [avgPriceSqft, setAvgPriceSqft] = useState("");
//   const [plotSizeSqft, setPlotSizeSqft] = useState("");
//   const [propertyType, setPropertyType] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");

//   const createProperty = async () => {
//     const newProperty = {
//       type,
//       city,
//       locality,
//       avgPriceSqft,
//       plotSizeSqft,
//       propertyType,
//       description,
//       image,
//     };

//     try {
//       const res = await fetch(
//         "https://6971d21632c6bacb12c49d51.mockapi.io/Housing",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(newProperty),
//         },
//       );

//       const data = await res.json();
//       console.log("Added:", data);

//       alert("🔥 Property Added Successfully!");

//       // ✅ Clear form after submit
//       setType("");
//       setCity("");
//       setLocality("");
//       setAvgPriceSqft("");
//       setPlotSizeSqft("");
//       setPropertyType("");
//       setDescription("");
//       setImage("");
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "15px",
//         width: "300px",
//       }}
//     >
//       <TextField
//         label="Type"
//         value={type}
//         onChange={(e) => setType(e.target.value)}
//       />

//       <TextField
//         label="City"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />

//       <TextField
//         label="Locality"
//         value={locality}
//         onChange={(e) => setLocality(e.target.value)}
//       />

//       <TextField
//         label="Price / Sqft"
//         value={avgPriceSqft}
//         onChange={(e) => setAvgPriceSqft(e.target.value)}
//       />

//       <TextField
//         label="Plot Size"
//         value={plotSizeSqft}
//         onChange={(e) => setPlotSizeSqft(e.target.value)}
//       />

//       <TextField
//         label="Property Type"
//         value={propertyType}
//         onChange={(e) => setPropertyType(e.target.value)}
//       />

//       <TextField
//         label="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />

//       <TextField
//         label="Image URL"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//       />

//       <Button variant="contained" color="primary" onClick={createProperty}>
//         Add Property
//       </Button>
//     </div>
//   );
// }
import { useState, useContext } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { PropertyContext } from "./DataProvider";

export function AddProperty() {
  const { addProperty } = useContext(PropertyContext);

  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [avgPriceSqft, setAvgPriceSqft] = useState("");
  const [plotSizeSqft, setPlotSizeSqft] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const createProperty = async () => {
    const newProperty = {
      type,
      city,
      locality,
      avgPriceSqft,
      plotSizeSqft,
      propertyType,
      description,
      image,
    };

    try {
      await addProperty(newProperty);

      alert("🔥 Property Added Successfully!");

      // clear form
      setType("");
      setCity("");
      setLocality("");
      setAvgPriceSqft("");
      setPlotSizeSqft("");
      setPropertyType("");
      setDescription("");
      setImage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // 🔥 center horizontally
        alignItems: "center", // 🔥 center vertically
        height: "100vh", // 🔥 full screen height
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "320px",
        }}
      >
        {/* 🔥 TYPE DROPDOWN */}
        <TextField
          select
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="city">City</MenuItem>
          <MenuItem value="village">Village</MenuItem>
          <MenuItem value="hills">Hills</MenuItem>
        </TextField>

        <TextField
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <TextField
          label="Locality"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
        />

        <TextField
          label="Price / Sqft"
          value={avgPriceSqft}
          onChange={(e) => setAvgPriceSqft(e.target.value)}
        />

        <TextField
          label="Plot Size"
          value={plotSizeSqft}
          onChange={(e) => setPlotSizeSqft(e.target.value)}
        />

        <TextField
          label="Property Type"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        />

        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <TextField
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button variant="contained" onClick={createProperty}>
          Add Property
        </Button>
      </div>
    </div>
  );
}
