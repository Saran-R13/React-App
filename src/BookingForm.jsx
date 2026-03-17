// import { useState } from "react";

// export function BookingForm({ onClose, property }) {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     aadharno: "",
//     panno: "",
//     payment: "Cash",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   //   const handleSubmit = () => {
//   //     const confirm = window.confirm("Confirm Booking?");
//   //     if (confirm) {
//   //       alert("🎉 Booking Successful!");
//   //       onClose(); // close form
//   //     }
//   //   };
//   const handleSubmit = () => {
//     const confirm = window.confirm("Confirm Booking?");
//     if (!confirm) return;

//     // existing orders eduthu
//     const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

//     // new order create
//     const newOrder = {
//       ...form,
//       id: Date.now(),
//       date: new Date().toLocaleString(),
//     };

//     // save
//     localStorage.setItem(
//       "orders",
//       JSON.stringify([...existingOrders, newOrder]),
//     );

//     alert("🎉 Booking Successful!");
//     onClose();
//   };

//   return (
//     <div className="booking-container">
//       <div className="booking-box">
//         <h2>Book Property</h2>

//         <input name="name" placeholder="Your Name" onChange={handleChange} />

//         <input
//           name="phone"
//           placeholder="Phone Number"
//           onChange={handleChange}
//         />

//         <input name="email" placeholder="Email" onChange={handleChange} />
//         <input
//           name="aadhar No"
//           placeholder="Aadhar No"
//           onChange={handleChange}
//         />
//         <input name="pan No" placeholder="PAN No" onChange={handleChange} />

//         <select name="payment" onChange={handleChange}>
//           <option>Cash</option>
//           <option>UPI</option>
//           <option>Bank Transfer</option>
//         </select>

//         <button onClick={handleSubmit}>Confirm</button>
//         <button onClick={onClose}>Cancel</button>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";

export function BookingForm({ onClose, property }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    aadhar: "",
    pan: "",
    payment: "Cash",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const confirm = window.confirm("Confirm Booking?");
    if (!confirm) return;

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      ...form, // 👈 form must exist
      propertyName: property?.city + " - " + property?.locality,
      price: property?.avgPriceSqft,
      id: Date.now(), // 👈 correct usage
      date: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder]),
    );

    alert("🎉 Booking Successful!");
    onClose();
  };

  return (
    <div className="booking-container">
      <div className="booking-box">
        <h2>Book Property</h2>

        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="aadhar" placeholder="Aadhar" onChange={handleChange} />
        <input name="pan" placeholder="PAN" onChange={handleChange} />

        <select name="payment" onChange={handleChange}>
          <option>Cash</option>
          <option>UPI</option>
          <option>Bank Transfer</option>
        </select>

        <button onClick={handleSubmit}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
