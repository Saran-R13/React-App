import { useEffect, useState } from "react";
import { CardType } from "./CardType";

export function PropertyList() {
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing")
      .then((res) => res.json())
      .then((data) => setAllProperties(data));
  }, []);

  return (
    <div className="property-grid">
      {allProperties.map((p) => (
        <CardType key={p.id} {...p} />
      ))}
    </div>
  );
}
