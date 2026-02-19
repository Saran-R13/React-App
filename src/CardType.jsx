export function CardType({ pic, header, district, title, verified, type }) {
  return (
    <section className="card">
      <img src={pic} alt="" width="200" />
      <h3>{header}</h3>
      <p>{district}</p>
      <p>{title}</p>
      <p>{verified ? "✅ Verified" : "❌ Not Verified"}</p>
      {type.map((item, index) => (
        <div key={index}>
          <p>
            {item.typeOne} - {item.amountOne}
          </p>
          <p>
            {item.typeTwo} - {item.amountTwo}
          </p>
        </div>
      ))}
    </section>
  );
}
