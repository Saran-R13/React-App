// export default PropertyDetails;

// import { useParams } from "react-router-dom";

// function PropertyDetails({ allProperties }) {
//   const { id } = useParams(); // URL-la irukura property id

//   // Find specific property
//   const property = allProperties?.find((p) => p.id.toString() === id);

//   // Property not found
//   if (!property)
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         <h2>Property not found!</h2>
//       </div>
//     );

//   // Property found → display clean card centered
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "500px",
//           width: "100%",
//           padding: "20px",
//           borderRadius: "12px",
//           boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
//           backgroundColor: "#fff",
//         }}
//       >
//         <div style={{ marginBottom: "15px" }}>
//           <img
//             src={property.image}
//             alt={property.locality}
//             style={{
//               width: "100%",
//               borderRadius: "10px",
//               objectFit: "cover",
//             }}
//           />
//         </div>

//         <h2 style={{ margin: "10px 0" }}>
//           {property.city} - {property.locality}
//         </h2>

//         <p style={{ margin: "5px 0", fontWeight: "500" }}>
//           Type: {property.propertyType}
//         </p>

//         <p style={{ margin: "5px 0", fontWeight: "500", color: "green" }}>
//           Price: ₹{property.avgPriceSqft} / Sqft
//         </p>

//         <p style={{ margin: "5px 0", fontWeight: "500" }}>
//           Plot Size: {property.plotSizeSqft}
//         </p>

//         <p style={{ margin: "10px 0", color: "#555" }}>
//           {property.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default PropertyDetails;

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function PropertyDetails() {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);

//   useEffect(() => {
//     fetch(`https://6971d21632c6bacb12c49d51.mockapi.io/Housing/${id}`)
//       .then((res) => res.json())
//       .then((data) => setProperty(data));
//   }, [id]);

//   if (!property) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h2>
//         {property.city} - {property.locality}
//       </h2>

//       <img
//         src={property.image}
//         alt={property.locality}
//         style={{ width: "400px", borderRadius: "10px" }}
//       />

//       <p>Type: {property.propertyType}</p>
//       <p>Price: ₹{property.avgPriceSqft} / Sqft</p>
//       <p>Plot Size: {property.plotSizeSqft}</p>
//       <p>{property.description}</p>
//     </div>
//   );
// }

// export default PropertyDetails;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`https://6971d21632c6bacb12c49d51.mockapi.io/Housing/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div className="details-container">
      <div className="details-card">
        {/* LEFT SIDE IMAGE */}
        <div className="details-img">
          <img src={property.image} alt={property.locality} />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="details-content">
          <h2>
            {property.city} - {property.locality}
          </h2>

          <p>
            <strong>Type:</strong> {property.propertyType}
          </p>

          <p>
            <strong>Price:</strong> ₹{property.avgPriceSqft} / Sqft
          </p>

          <p>
            <strong>Plot Size:</strong> {property.plotSizeSqft}
          </p>

          <p>{property.description}</p>

          <button className="order-btn">Order</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
