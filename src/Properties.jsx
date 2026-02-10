import { FaCity, FaHouseUser, FaMountain } from "react-icons/fa";
export function Properties() {
  return (
    <>
      <section className="overall-porperty">
        <h2>Research and Insights</h2>
        <p>Explore useful real estate insights</p>
      </section>
      <section className="properties">
        <section className="properties-fst-container">
          <FaCity />
          {/* <FaHome /> */}

          <h3>CITY Properties</h3>
          <p>
            <ul>
              <li>Prime locations near offices, schools & hospitals</li>
              <li>Modern apartments with smart amenities</li>
              <li>24/7 security & gated communities</li>
              <li>High rental income potential</li>
              <li>Easy access to public transport</li>
              <li>Shopping malls & entertainment nearby</li>
              <li>Strong resale value</li>
            </ul>
          </p>
          <button>Click Mee</button>
        </section>
        <section className="properties-snd-container">
          {/* <FaHome /> */}
          <FaHouseUser />
          <h3>VILLAGE Properties</h3>
          <p>
            <ul>
              <li>Peaceful and pollution-free environment</li>
              <li>Large land area at affordable prices</li>
              <li>Ideal for farming or independent houses</li>
              <li>Natural surroundings & fresh air</li>
              <li>Low cost of living</li>
              <li>Community-based lifestyle</li>
              <li>Investment opportunity for future development</li>
            </ul>
          </p>
          <button>Click Mee</button>
        </section>
        <section className="properties-trd-container">
          <FaMountain />
          <h3>HILL STATIONS Properties</h3>
          <p>
            <ul>
              <li>Scenic mountain views</li>
              <li>Cool climate throughout the year</li>
              <li>Perfect for vacation homes</li>
              <li>High tourism rental income potential</li>
              <li>Relaxing and stress-free environment</li>
              <li>Luxury cottages & eco-friendly homes</li>
              <li>Great for retirement living</li>
            </ul>
          </p>
          <button>Click Mee</button>
        </section>
      </section>
    </>
  );
}
