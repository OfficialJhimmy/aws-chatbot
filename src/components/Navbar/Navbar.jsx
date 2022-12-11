import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const getCurrentDate = dateState.toLocaleTimeString();

  return (
    <div className="navbar__parent">
      <div className="navbar__greeting">
        <h3>Hello, Good day!</h3>
      </div>
      <div className="navbar__logo">
        <h3>Dexa</h3>
      </div>
      <div className="navbar__time">
        <h3>{getCurrentDate}</h3>
      </div>
    </div>
  );
};

export default Navbar;
