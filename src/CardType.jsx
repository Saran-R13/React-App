// import { CityPlots } from "./CityPlots";

// export function CardType({
//   pic,
//   header,
//   district,
//   title,
//   verified,
//   cityplots,
// }) {
//   return (
//     <section className="card">
//       <img src={pic} alt="" width="200" />
//       <h3>{header}</h3>
//       <p>{district}</p>
//       <p>{title}</p>
//       <p>{verified ? "✅ Verified" : "❌ Not Verified"}</p>
//       {cityplots.map((item, index) => (
//         <div key={index}>
//           <p>
//             {item.typeOne} - {item.amountOne}
//           </p>
//           <p>
//             {item.typeTwo} - {item.amountTwo}
//           </p>
//         </div>
//       ))}
//     </section>
//   );
// }

// export function CardType({ property }) {
//   return (
//     <section className="property-card">
//       {/* IMAGE */}
//       <div className="property-img">
//         <img src={property.image} alt={property.locality} />
//       </div>

//       {/* CONTENT */}
//       <div className="property-content">
//         <h3>{property.city}</h3>

//         <p className="location">{property.locality}</p>

//         <p className="type">{property.propertyType}</p>

//         <p className="price">
//           ₹{property.avgPriceSqft} <span>/ sq.ft</span>
//         </p>

//         <p className="size">Plot Size: {property.plotSizeSqft} sq.ft</p>

//         <p className="desc">{property.description}</p>

//         <span className="verified">
//           {property.verified ? "✅ Verified Property" : "❌ Not Verified"}
//         </span>
//       </div>
//     </section>
//   );
// }

export function CardType({
  image,
  locality,
  city,
  avgPriceSqft,
  plotSizeSqft,
  propertyType,
  description,
  // verified,
}) {
  return (
    <section className="property-card">
      {/* IMAGE */}
      <div className="property-img">
        <img src={image} alt={locality} />
      </div>

      {/* CONTENT */}
      <div className="property-content">
        <h3>{city}</h3>

        <p className="location">{locality}</p>

        <p className="type">{propertyType}</p>

        <p className="price">
          {avgPriceSqft} <span></span>
        </p>

        <p className="size">{plotSizeSqft} </p>

        <p className="desc">{description}</p>

        {/* <span className="verified">
          {verified ? "✅ Verified Property" : "❌ Not Verified"}
        </span> */}
      </div>
    </section>
  );
}
