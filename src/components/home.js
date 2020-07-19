import React from "react";
import summer from "./../summer.png";
import { SummerButton } from "./ButtonCounter";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <marquee behavior="slide" direction="left" scrollamount="30">
        <center>
          <h3>MID-SUMMER SALE</h3>
          <h3>
            Buy 3 to save 30% off your summer styles with promo code SUMMER30.
            <Link to="https://www.nike.com/my/help/a/summersale-promo-terms">
              Shop Learn More
            </Link>{" "}
          </h3>
        </center>
      </marquee>
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
