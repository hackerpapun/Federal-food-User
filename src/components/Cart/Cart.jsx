import React from "react";
import "./Cart.css";
import { MdPayment } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const cart = () => {
  return (
    <div className="main-container">
      <div className="row-heading1" style={{ top: "2px" }}>
        <div>
          <CiShoppingCart />
          Your Cart
        </div>
        <div className="line"></div>
        <div>
          <MdOutlineShoppingBag />
          Confirm Order
        </div>
        <div className="line"></div>
        <div>
          <MdPayment />
          Payment
        </div>
      </div>
      <div className="Coupon-Box">
       </div>
      </div>
    
  );
};
export default cart;
