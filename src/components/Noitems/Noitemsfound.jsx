import React from "react";
import "./Noitems found.css";
import Null from "../../assets/NoItems found.jpg";
const Noitemsfound = () => {
  return (
    <div className="cart-container1">
      <div className="container2">
       <img src={Null} alt="" width="200px" height="200px" />
      
     <h2>No items found</h2>
      </div>
    </div>
  );
};

export default Noitemsfound;
