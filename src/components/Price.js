import React from "react";
import "../css/price.css";
const Price = () => {
  return (
    <div className="price">
      <div className="price_discount">
        <h1>$125.00</h1>
        <p>50%</p>
      </div>
      <div className="price_before">
        <p>$250.00</p>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Price;
