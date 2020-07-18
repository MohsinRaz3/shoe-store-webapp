import React from "react";
import { Link } from "react-router-dom";
import nike1 from "./nike1.png";

export const Navbar = () => {
  return (
    <div className="appxx">
      <h2>
        <img src={nike1} alt="nike logo" height="40px" />
        <Link to="/">Home </Link> {"  "}
        <Link to="products">Product </Link> {"  "}
        <Link to="proitems">Product-Items</Link> {"  "}
        <Link to="about">About</Link>{" "}
        <div to="/">
          <input type="text" className="srch" placeholder="Search"></input>{" "}
        </div>
        {"  "}
      </h2>
    </div>
  );
};
