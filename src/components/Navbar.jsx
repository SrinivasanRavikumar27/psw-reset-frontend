import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const padding = {
    padding: 15,
  };

  const [user, setUser] = useState(null);

  // to get data from localstoage in  case of refresh or reloading the page
  useEffect(() => {
    const user = window.localStorage.getItem("user");

    if (user) {
      setUser(user);
    }
  }, []);

 

  return (
    <div>
      {
        user && user != null ? (
        <div>
          <Link to="/dashboard" style={padding}>
            DashBoard
          </Link>
          <Link to="/viewProfile" style={padding}>
            My Profile
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/home" style={padding}>
            Home
          </Link>
          <Link to="/register" style={padding}>
            Signup
          </Link>
          <Link to="/login" style={padding}>
            login
          </Link>
        </div>
      )
      }
    </div>
  );
}

export default Navbar;
