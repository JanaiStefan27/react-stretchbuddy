import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Sport Warm Up</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Acasa</Link>
        </li>
        <li>
          <Link to="/about">Despre</Link>
        </li>
        <li>
          <Link to="/services">Sporturi</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
