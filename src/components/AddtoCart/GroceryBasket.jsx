import React from "react";
import "./GroceryBasket.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const GroceryBasket = ({
  cartItems = [],
  setCartItems,
  totalPrice = 0,
  isConfirmPage = false,
}) => {
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
          <span className="grocery-items">({cartItems.length} items)</span>
        </div>
        <div className="grocery-total">Total: ${totalPrice.toFixed(2)}</div>
      </div>
      <div className="addtocart_left">
        {cartItems.length === 0 ? (
          <div className="empty-cart">Your cart is empty.</div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
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
                  <div>${item.price.toFixed(2)}</div>
                </div>
              </div>
              {!isConfirmPage && ( // Hide buttons if isConfirmPage is true
                <div className="d-flex align-items-center">
                  <button
                    className="addtocart-btn"
                    onClick={() => handleDecrement(item.id)}
                  >
                    <FaMinus className="grocery-signs" size={15} />
                  </button>
                  <span className="fw-bold">{item.quantity}</span>
                  <button
                    className="addtocart-btn"
                    onClick={() => handleIncrement(item.id)}
                  >
                    <FaPlus className="grocery-signs" size={15} />
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GroceryBasket;
