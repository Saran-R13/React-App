import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardType } from "./CardType";

export function CityPlots() {
  const { type, city, price } = useParams();

  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
      .then((res) => res.json())
      .then((data) => {
        // STEP 1 → Filter type + location
        const locationData = data.filter(
          (item) =>
            item.city.toLowerCase() === city.toLowerCase() &&
            item.type.toLowerCase() === type.toLowerCase(),
        );

        // STEP 2 → Get price values
        const prices = locationData.map((item) => item.avgPriceSqft);

        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        const range = (maxPrice - minPrice) / 3;

        // STEP 3 → Price filter
        const filteredData = locationData.filter((item) => {
          if (price === "small") return item.avgPriceSqft <= minPrice + range;

          if (price === "medium")
            return (
              item.avgPriceSqft > minPrice + range &&
              item.avgPriceSqft <= minPrice + range * 2
            );

          if (price === "large")
            return item.avgPriceSqft > minPrice + range * 2;

          return true;
        });

        setCard(filteredData);
      })
      .catch((err) => console.log(err));
  }, [type, city, price]);

  return (
    <section className="property-grid">
      {card.length > 0 ? (
        card.map((item) => <CardType key={item.id} {...item} />)
      ) : (
        <h2>No properties found</h2>
      )}
    </section>
  );
}
//-----------------------------------------------------------------------------------------------------------------------
// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { CardType } from "./CardType";

// export function CityPlots() {
//   const { type, city, price } = useParams();
//   const navigate = useNavigate();

//   const [card, setCard] = useState([]);

//   const changePrice = (newPrice) => {
//     navigate(`/properties/${type}/${city}/${newPrice}`);
//   };

//   useEffect(() => {
//     fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
//       .then((res) => res.json())
//       .then((data) => {
//         const locationData = data.filter(
//           (item) =>
//             item.city.toLowerCase() === city.toLowerCase() &&
//             item.type.toLowerCase() === type.toLowerCase(),
//         );

//         const prices = locationData.map((item) => Number(item.avgPriceSqft));

//         const minPrice = Math.min(...prices);
//         const maxPrice = Math.max(...prices);

//         const range = (maxPrice - minPrice) / 3;

//         const filteredData = locationData.filter((item) => {
//           if (price === "small") return item.avgPriceSqft <= minPrice + range;

//           if (price === "medium")
//             return (
//               item.avgPriceSqft > minPrice + range &&
//               item.avgPriceSqft <= minPrice + range * 2
//             );

//           if (price === "large")
//             return item.avgPriceSqft > minPrice + range * 2;

//           return true;
//         });

//         setCard(filteredData);
//       })
//       .catch((err) => console.log(err));
//   }, [type, city, price]);

//   return (
//     <section>
//       {/* PRICE FILTER */}
//       <div className="price-filter">
//         <button onClick={() => changePrice("small")}>Low</button>

//         <button onClick={() => changePrice("medium")}>Medium</button>

//         <button onClick={() => changePrice("large")}>High</button>
//       </div>

//       {/* PROPERTY GRID */}
//       <section className="property-grid">
//         {card.length > 0 ? (
//           card.map((item) => <CardType key={item.id} {...item} />)
//         ) : (
//           <h2>No properties found</h2>
//         )}
//       </section>
//     </section>
//   );
// }
