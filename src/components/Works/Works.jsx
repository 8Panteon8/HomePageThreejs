import React, { useState } from "react";
import "./Works.css";
import Development from "../Design/Development";
import ProductDesign from "../Design/ProductDesign";
import WebDesign from "../Design/WebDesign";

const Works = () => {
  const [work, setWork] = useState("Web Design");

  return (
    <section className="works">
      <div className="container_works">
        <div className="left">
          <ul>
            <li className="w" onClick={() => setWork("Web Design")}>
              Web Design
            </li>
            <li className="d" onClick={() => setWork("Development")}>
              Development
            </li>
            <li className="i" onClick={() => setWork("Illustration")}>
              Illustration
            </li>
            <li className="p" onClick={() => setWork("Product Design")}>
              Product Design
            </li>
            <li className="s" onClick={() => setWork("Social Media")}>
              Social Media
            </li>
          </ul>
        </div>
        <div className="right">
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </div>
      </div>
    </section>
  );
};
export default Works;
