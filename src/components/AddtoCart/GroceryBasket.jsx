import React from "react";
import "./GroceryBasket.css";

const GroceryBasket = ({ cartItems, setCartItems, totalPrice }) => {
  const handleIncrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="container">
      <div className="cart">Cart ({cartItems.length})</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="groceries-basket">
          Groceries Basket{" "}
          <span className="gorecy-items">({cartItems.length} items)</span>
        </div>
        <div className="grocery-total">Total: {totalPrice} $</div>
      </div>
      <div className="addtocart_left">
        {cartItems.map((item) => (
          <div
            key={item.id}
            id="addtocart_left"
            className="d-flex"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="addtocart-image">
              <img
                src={item.image}
                alt={item.name}
                className="rounded mr-2"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                }}
              />
              <div className="addtocart-details">
                <div>{item.name}</div>
                <div>{item.weight}</div>
                <div>${item.price}</div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="addtocart-btn"
                onClick={() => handleDecrement(item.id)}
              >
                -
              </button>
              <span className="fw-bold">{item.quantity}</span>
              <button
                className="addtocart-btn"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryBasket;
