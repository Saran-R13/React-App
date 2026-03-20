// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (email === "admin@gmail.com" && password === "123456") {
//       localStorage.setItem("isLoggedIn", "true"); // 🔥 save login
//       navigate("/home");
//       window.location.reload(); // 🔥 update header
//     } else {
//       alert("Invalid Email or Password ❌");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

import { useState, navigate } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (email === "admin@gmail.com" && password === "123456") {
  //     alert("Login Successful");
  //   } else {
  //     alert("Invalid Email or Password");
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (email === "admin@gmail.com" && password === "123456") {
  //     localStorage.setItem("isLoggedIn", "true");
  //     navigate("/home"); // 🔥 this is important
  //   } else {
  //     alert("Invalid Email or Password");
  //   }
  // };--------------------------------------------------------------------------------------------------
  //   if (email === "admin@gmail.com" && password === "123456") {
  //   localStorage.setItem("role", "admin");
  //   navigate("/home");
  // } else if (email === "user@gmail.com" && password === "123") {
  //   localStorage.setItem("role", "user");
  //   navigate("/home");
  // } else {
  //   alert("Invalid credentials");
  // }
  //   }

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");
      navigate("/home"); // ✅ admin navigate
    } else if (email === "user@gmail.com" && password === "123") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "user");
      navigate("/home"); // ✅ user navigate
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
