import { useEffect, useState } from "react";
import { CardType } from "./CardType";
import Filters from "./Filters";

export function PropertyPage() {

  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const filteredData = data.filter((item) => {

    const cityMatch = city ? item.city === city : true;

    let priceMatch = true;

    if (price === "low") priceMatch = item.avgPriceSqft < 2000;
    if (price === "medium") priceMatch = item.avgPriceSqft >= 2000 && item.avgPriceSqft <= 4000;
    if (price === "high") priceMatch = item.avgPriceSqft > 4000;

    return cityMatch && priceMatch;

  });

  return (
    <div className="page-layout">

      <Filters setCity={setCity} setPrice={setPrice} />

      <div className="property-grid">
        {filteredData.map((item) => (
          <CardType key={item.id} {...item} />
        ))}
      </div>

    </div>
  );
}