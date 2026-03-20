// import { useState, useContext, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { PropertyContext } from "./DataProvider";
// import { TextField, Button } from "@mui/material";

// export function EditProperty() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { allProperties, updateProperty } = useContext(PropertyContext);

//   const property = allProperties.find((p) => p.id.toString() === id);

//   const [type, setType] = useState("");
//   const [city, setCity] = useState("");
//   const [locality, setLocality] = useState("");
//   const [avgPriceSqft, setAvgPriceSqft] = useState("");
//   const [plotSizeSqft, setPlotSizeSqft] = useState("");
//   const [propertyType, setPropertyType] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");

//   useEffect(() => {
//     if (property) {
//       setType(property.type);
//       setCity(property.city);
//       setLocality(property.locality);
//       setAvgPriceSqft(property.avgPriceSqft);
//       setPlotSizeSqft(property.plotSizeSqft);
//       setPropertyType(property.propertyType);
//       setDescription(property.description);
//       setImage(property.image);
//     }
//   }, [property]);

//   const handleUpdate = async () => {
//     await updateProperty(id, {
//       type,
//       city,
//       locality,
//       avgPriceSqft,
//       plotSizeSqft,
//       propertyType,
//       description,
//       image,
//     });
//     alert("🔥 Property Updated!");
//     navigate(-1); // back to previous page
//   };

//   if (!property) return <p>Property not found!</p>;

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
//       <Button variant="contained" color="primary" onClick={handleUpdate}>
//         Update Property
//       </Button>
//     </div>
//   );
// }

import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PropertyContext } from "./DataProvider";
import { TextField, Button } from "@mui/material";

export function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allProperties, updateProperty } = useContext(PropertyContext);
  const [role, setRole] = useState(null);

  const property = allProperties.find((p) => p.id.toString() === id);

  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [avgPriceSqft, setAvgPriceSqft] = useState("");
  const [plotSizeSqft, setPlotSizeSqft] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole);

    if (userRole !== "admin") {
      alert("❌ Access Denied! Only admin can edit properties.");
      navigate("/home");
    }
  }, [navigate]);

  useEffect(() => {
    if (property) {
      setType(property.type);
      setCity(property.city);
      setLocality(property.locality);
      setAvgPriceSqft(property.avgPriceSqft);
      setPlotSizeSqft(property.plotSizeSqft);
      setPropertyType(property.propertyType);
      setDescription(property.description);
      setImage(property.image);
    }
  }, [property]);

  const handleUpdate = async () => {
    await updateProperty(id, {
      type,
      city,
      locality,
      avgPriceSqft,
      plotSizeSqft,
      propertyType,
      description,
      image,
    });
    alert("🔥 Property Updated!");
    navigate(-1); 
  };

  if (!property) return <p>Property not found!</p>;

  
  if (role !== "admin") return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "300px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <TextField
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
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
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update Property
      </Button>
    </div>
  );
}
