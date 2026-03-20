// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [role, setRole] = useState(null); // add role state

//   useEffect(() => {
//     const status = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(status === "true");

//     const userRole = localStorage.getItem("role"); // get role
//     setRole(userRole);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("role"); // clear role too
//     navigate("/");
//   };

//   return (
//     <div className="first-container">
//       <nav>
//         <Link to="/">Home</Link>
//         {" | "}
//         {isLoggedIn && role === "admin" && (
//           <Link to="/add">Add Property</Link> // only admin
//         )}
//         {" | "}
//         {isLoggedIn ? (
//           <button onClick={handleLogout}>Logout</button>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </nav>
//     </div>
//   );
// }

// export default Header;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");

    const userRole = localStorage.getItem("role");
    setRole(userRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role"); 
    navigate("/");
  };

  return (
    <div className="first-container">
      <nav>
        <Link to="/"></Link>{" "}
        {isLoggedIn && role === "admin" && <Link to="/add">Add Property</Link>}
        {"  "}
        {isLoggedIn ? (
          <button onClick={handleLogout}></button> 
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
}

export default Header;
