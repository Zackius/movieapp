import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }
  return (
    <nav className="navbar">
      <Link to="/" className="navlogo">
        Balmy Bakes
      </Link>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fas-times" : "fas fa-bars"} />
      </div>
      <div className={click ? "nav-icon active" : " nav-icon"}>
        <div className="navbar-container">
          <Link to="/" className="nav-link">
            Cakes
          </Link>
          <Link to="/" className="nav-link">
            Wedding Cakes
          </Link>
          <Link to="/" className="nav-link">
            Birthday Cakes
          </Link>
          <Link to="/" className="nav-link">
            PrIce
          </Link>
          <Link to="/" className="nav-link">
            Order
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
