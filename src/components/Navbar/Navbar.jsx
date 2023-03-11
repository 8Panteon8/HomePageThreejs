import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="container_navbar">
        <div className="links">
          <img className="logo" src="./img/logo.svg" alt="logo" />
          <ul className="links__items">
            <li>Home</li>
            <li>Studio</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="icons">
          <img
            className="search"
            src="./img/search.png"
            alt="search"
          />
          <button>Hire Now</button>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
