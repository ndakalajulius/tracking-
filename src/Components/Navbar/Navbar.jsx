import React from "react";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>

        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
