import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";

function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        <img src={logo} alt="logo"></img>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/howitworks">About</Link>
        </li>
        <li>
          <Link to="/properties">Property</Link>
        </li>
        <li>
          <Link to="/agent">Map</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/adform">Post Property</Link>
        </li>
      </ul>
      <Link to="/form" className="property">
        SignUp
      </Link>
    </nav>
  );
}

export default Navbar;
