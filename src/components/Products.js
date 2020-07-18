import React from "react";
import shoe from "../shoe.json";
import { Link } from "react-router-dom";

export const Products = () => {
  console.log(shoe);

  return (
    <div className="product1">
      {Object.keys(shoe).map((keyName) => {
        const shoes = shoe[keyName];

        return (
          <Link to={`/products/${keyName}`} key={keyName} className="product3">
            <img src={shoes.img} alt="sneakers" height="350px" />
            <h3>{shoes.name}</h3>
          </Link>
        );
      })}
    </div>
  );
};
