import React from "react";
import summer from "./../summer.png";
import { SummerButton } from "./ButtonCounter";
import { Link } from "react-router-dom";
import "fontsource-roboto";

const Home = () => {
  return (
    <div>
      <div className="sommer">
        {" "}
        <center>
          <h2>MID-SUMMER SALE</h2>
          <h3>
            Buy 3 to save 30% off your summer styles with promo code SUMMER30.{" "}
            <h3>Shop Learn More</h3>{" "}
          </h3>{" "}
        </center>
      </div>
      <div className="summerr">
        <img src={summer} alt="summer" height="250px" />
      </div>
      <SummerButton />
      <div className="copyright">
        <h3>Copyright &copy;2020 Mohsin Raz All Rights Reserved.</h3>
      </div>
    </div>
  );
};
export default Home;
