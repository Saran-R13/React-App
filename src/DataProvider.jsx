// import { createContext, useEffect, useState } from "react";

// // 🔥 1. Context create
// export const PropertyContext = createContext();

// export function DataProvider({ children }) {
//   const [allProperties, setAllProperties] = useState([]);

//   // 🔥 2. GET (fetch data from API)
//   const fetchProperties = async () => {
//     const res = await fetch(
//       "https://6971d21632c6bacb12c49d51.mockapi.io/Housing",
//     );
//     const data = await res.json();
//     setAllProperties(data);
//   };

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   // 🔥 3. POST (add new property)
//   const addProperty = async (newProperty) => {
//     await fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newProperty),
//     });

//     fetchProperties(); // 🔥 refresh
//   };

//   return (
//     <PropertyContext.Provider value={{ allProperties, addProperty }}>
//       {children}
//     </PropertyContext.Provider>
//   );
// }

import { createContext, useEffect, useState } from "react";

// 1️⃣ Context create
export const PropertyContext = createContext();

export function DataProvider({ children }) {
  const [allProperties, setAllProperties] = useState([]);

  // 2️⃣ GET (fetch data from API)
  const fetchProperties = async () => {
    const res = await fetch(
      "https://6971d21632c6bacb12c49d51.mockapi.io/Housing",
    );
    const data = await res.json();
    setAllProperties(data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // 3️⃣ POST (add new property)
  const addProperty = async (newProperty) => {
    await fetch("https://6971d21632c6bacb12c49d51.mockapi.io/Housing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProperty),
    });
    fetchProperties(); // refresh context
  };

  // 4️⃣ PUT (update property)
  const updateProperty = async (id, updatedData) => {
    await fetch(`https://6971d21632c6bacb12c49d51.mockapi.io/Housing/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    fetchProperties(); // refresh context
  };

  // 5️⃣ DELETE (delete property)
  const deleteProperty = async (id) => {
    await fetch(`https://6971d21632c6bacb12c49d51.mockapi.io/Housing/${id}`, {
      method: "DELETE",
    });
    fetchProperties(); // refresh context
  };

  return (
    <PropertyContext.Provider
      value={{ allProperties, addProperty, updateProperty, deleteProperty }}
    >
      {children}
    </PropertyContext.Provider>
  );
}
