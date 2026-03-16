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
// }) {
//   const navigate = useNavigate();
//   const handleDetails = () => navigate(`/property/${id}`);

//   return (
//     <section className="property-card">
//       <div className="property-img">
//         <img src={image} alt={locality} />
//       </div>
//       <div className="property-content">
//         <h3>{city}</h3>
//         <p className="location">{locality}</p>
//         <p className="type">{propertyType}</p>
//         <p className="price">
//           <span className="rupee">₹</span>
//           {avgPriceSqft} / Sqft
//         </p>
//         <p className="size">{plotSizeSqft}</p>
//         <p className="desc">{description}</p>
//         <button className="details-btn" onClick={handleDetails}>
//           Details
//         </button>
//       </div>
//     </section>
//   );
// }
import { useNavigate } from "react-router-dom";

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

  const handleDetails = () => {
    navigate(`/property/${id}`);
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

        <button className="details-btn" onClick={handleDetails}>
          Details
        </button>
      </div>
    </section>
  );
}
