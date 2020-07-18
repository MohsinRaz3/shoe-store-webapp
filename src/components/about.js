import React from "react";
import nike from "./nike1.png";
export const About = () => {
  return (
    <div className="about">
      <img src={nike} alt="nike" width="200px" height="150" />
      <h2>
        Nike, Inc. is an American multinational corporation that is engaged in
        the design, <br />
        development, manufacturing and worldwide marketing and sales of
        footwear,
        <br /> apparel, equipment, accessories and services. The company is
        headquartered near <br />
        Beaverton, Oregon, in the Portland metropolitan area.
      </h2>
    </div>
  );
};
