import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardType } from "./CardType";

export function CityPlots() {
  const { type, city } = useParams();
  // const navigate = useNavigate();

  // const [selectedCity, setSelectedCity] = useState(city);
  const selectedCity = city;
  const [selectedPrice, setSelectedPrice] = useState("small");

  const [card, setCard] = useState([]);

  const changePrice = (price) => {
    setSelectedPrice(price); 
  };

  useEffect(() => {
    fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
      .then((res) => res.json())
      .then((data) => {
        const locationData = data.filter(
          (item) =>
            item.city.toLowerCase() === selectedCity.toLowerCase() &&
            item.type.toLowerCase() === type.toLowerCase(),
        );

        const prices = locationData.map((item) => Number(item.avgPriceSqft));

        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        const range = (maxPrice - minPrice) / 3;

        const filteredData = locationData.filter((item) => {
          if (selectedPrice === "small")
            return item.avgPriceSqft <= minPrice + range;

          if (selectedPrice === "medium")
            return (
              item.avgPriceSqft > minPrice + range &&
              item.avgPriceSqft <= minPrice + range * 2
            );

          if (selectedPrice === "large")
            return item.avgPriceSqft > minPrice + range * 2;

          return true;
        });

        setCard(filteredData);
      });
  }, [selectedCity, selectedPrice, type]);

  return (
    <section>
    
      <div className="price-filter">
        <button onClick={() => changePrice("small")}>Low</button>

        <button onClick={() => changePrice("medium")}>Medium</button>

        <button onClick={() => changePrice("large")}>High</button>
      </div>

   
      <section className="property-grid">
        {card.length > 0 ? (
          card.map((item) => <CardType key={item.id} {...item} />)
        ) : (
          <h2>No properties found</h2>
        )}
      </section>
    </section>
  );
}
