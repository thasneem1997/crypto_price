import React, { useContext } from "react";
import logo from "../assets/logo.png";
import arrow_icon from "../assets/arrow_icon.png";
import "./navbar.css";
import { Appcontext } from "../context/Appcontext";

function Navbar() {
  const { setcurrency } = useContext(Appcontext);
  const handlecurrency = (e) => {
    switch (e.target.value) {
      case "USD":
        setcurrency({ name: "USD", symbol: "$" });
        break;
      case "EUR":
        setcurrency({ name: "EUR", symbol: "€" });
        break;
      case "INR":
        setcurrency({ name: "INR", symbol: "₹" });
        break;
      default:
        setcurrency({ name: "USD", symbol: "$" });
    }
  };
  return (
    <div className="navbar-container">
      <img src={logo} alt="logo" className="logo"></img>
      <ul className="navbar-items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>

      <div className="navbar-right">
        <select onChange={handlecurrency}>
          <option value="USD">USD</option>
          <option value="EUR">EURO</option>
          <option value="INR">INR</option>
        </select>
        <button className="signup-btn">
          signup
          <img src={arrow_icon} alt="arrow_icon"></img>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
