import { useEffect, useState } from "react";

export function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  const deleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const clearAllOrders = () => {
    localStorage.removeItem("orders");
    setOrders([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Orders</h2>

      <button onClick={clearAllOrders}>🗑 Clear All Orders</button>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>{order.propertyName}</h3>
            <p>Name: {order.name}</p>
            <p>Phone: {order.phone}</p>
            <p>Aadhar No:{order.aadhar}</p>
            <p>PAN No:{order.pan}</p>
            <p>Payment: {order.payment}</p>
            <p>Date: {order.date}</p>
            <p>Status: {order.status || "Pending"}</p>

            <button onClick={() => deleteOrder(order.id)}>❌ Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
