// import { useNavigate } from "react-router-dom";

// export function CardType({
//   id,
//   image,
//   locality,
//   city,
//   avgPriceSqft,
//   plotSizeSqft,
//   propertyType,
//   description,
//   onEdit, // 🔥 parent la pass pannuva handler
//   onDelete, // 🔥 parent la pass pannuva handler
// }) {
//   const navigate = useNavigate();

//   const handleDetails = () => {
//     navigate(`/property/${id}`);
//   };

//   return (
//     <section className="property-card">
//       <div className="property-img">
//         <img src={image} alt={locality} />
//       </div>

//       <div className="property-content">
//         <h3>{city}</h3>
//         <p className="location">{locality}</p>
//         <p className="type">{propertyType}</p>
//         <p className="price">₹{avgPriceSqft} / Sqft</p>
//         <p className="size">Plot Size: {plotSizeSqft}</p>
//         <p className="desc">{description}</p>

//         <div
//           className="card-actions"
//           style={{ marginTop: "10px", display: "flex", gap: "10px" }}
//         >
//           <button className="details-btn" onClick={handleDetails}>
//             Details
//           </button>

//           <button
//             className="edit-btn"
//             onClick={() => onEdit && onEdit(id)}
//             style={{
//               backgroundColor: "#FFA500",
//               color: "#fff",
//               padding: "5px 10px",
//               border: "none",
//               borderRadius: "5px",
//             }}
//           >
//             Edit
//           </button>

//           <button
//             className="delete-btn"
//             onClick={() => onDelete && onDelete(id)}
//             style={{
//               backgroundColor: "#FF4500",
//               color: "#fff",
//               padding: "5px 10px",
//               border: "none",
//               borderRadius: "5px",
//             }}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PropertyContext } from "./DataProvider";

export function CardType({
  id,
  image,
  locality,
  city,
  avgPriceSqft,
  plotSizeSqft,
  propertyType,
  description,
}) {
  const navigate = useNavigate();
  const { deleteProperty } = useContext(PropertyContext); // 🔥 delete from context

  const handleDetails = () => {
    navigate(`/property/${id}`);
  };

  const handleEdit = () => {
    navigate(`/edit-property/${id}`); // 🔥 navigate to edit page
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      deleteProperty(id); // 🔥 delete using context
    }
  };

  return (
    <section className="property-card">
      <div className="property-img">
        <img src={image} alt={locality} />
      </div>

      <div className="property-content">
        <h3>{city}</h3>
        <p className="location">{locality}</p>
        <p className="type">{propertyType}</p>
        <p className="price">₹{avgPriceSqft} / Sqft</p>
        <p className="size">Plot Size: {plotSizeSqft}</p>
        <p className="desc">{description}</p>

        <div
          className="card-actions"
          style={{ marginTop: "10px", display: "flex", gap: "10px" }}
        >
          <button className="details-btn" onClick={handleDetails}>
            Details
          </button>

          <button
            className="edit-btn"
            onClick={handleEdit}
            style={{
              backgroundColor: "#FFA500",
              color: "#fff",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={handleDelete}
            style={{
              backgroundColor: "#FF4500",
              color: "#fff",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}
