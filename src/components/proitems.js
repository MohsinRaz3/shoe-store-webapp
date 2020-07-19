import React from "react";
import { useParams } from "react-router-dom";
import shoe from "./../shoe.json";
import ButtonCounter from "./ButtonCounter";

export const Proitems = () => {
  const { id } = useParams();
  const shoes = shoe[id];
  console.log(shoes);
  if (!shoes) {
    return <div>Product not found </div>;
  }
  return (
    <div>
      <div className="productz">
        <h1>{shoes.name}</h1>

        <img src={shoes.img} alt="sneakers" height="350px" />
        <ButtonCounter />
      </div>

      <div className="productzz">
        <h2>
          <h1>ABOUT THIS PRODUCT</h1>
          <br />
          {shoes.abtprod}
        </h2>
      </div>
    </div>
  );
};
