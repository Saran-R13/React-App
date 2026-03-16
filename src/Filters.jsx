export default function Filters({ setCity, setPrice }) {
  return (
    <div className="filters">
      <h3>City</h3>

      <select onChange={(e) => setCity(e.target.value)}>
        <option value="">All</option>
        <option value="Chennai">Chennai</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Madurai">Madurai</option>
        <option value="Trichy">Trichy</option>
      </select>

      <h3>Price</h3>

      <select onChange={(e) => setPrice(e.target.value)}>
        <option value="">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}
