import React, { useEffect } from "react";
import { useState } from "react";
import "./AddtoCart.css";

const AddtoCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Banana",
      price: 99,
      quantity: 1,
      weight: "1kg",
      image:
        "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f002abb9280f.jpg",
    },
    {
      id: 2,
      name: "Aashirwad aatta",
      price: 199,
      quantity: 1,
      weight: "1kg",
      image:
        "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f047f2097bdc.jpg",
    },
    {
      id: 3,
      name: "Apple",
      price: 9,
      quantity: 1,
      weight: "1kg",
      image:
        "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045ae705c9a.jpg",
    },
    {
      id: 4,
      name: "Aashirwand aatta",
      price: 99,
      quantity: 1,
      weight: "1kg",
      image:
        "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f047f2097bdc.jpg",
    },
    {
      id: 5,
      name: "Apple",
      price: 499,
      quantity: 1,
      weight: "1kg",
      image:
        "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045ae705c9a.jpg",
    },
    {
      id: 6,
      name: "Banana",
      price: 999,
      quantity: 1,
      weight: "1kg",
      image:
        "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f002abb9280f.jpg",
    },
  ]);
  
  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
            ``

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
  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cartItems]);
  return (
    <div className="container">
      <div className="cart">Cart ({cartItems.length})</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="groceries-basket">
          Groceries Basket <span className="gorecy-items">({cartItems.length} items)</span>
        </div>
        <div className="grocery-total">Total: {totalPrice} $</div>
      </div>
      <div className="">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className=" d-flex align-items-cente"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* Product Image */}
            <div className="addtocart-image">
              <img
                src={item.image}
                alt={item.name}
                className="rounded mr-2"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <div className="addtocart-details">
                {item.name}
                {item.weight}
                {item.price}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => handleDecrement(item.id)}
              >
                -
              </button>
              <span className="fw-bold">{item.quantity}</span>
              <button
                className="btn btn-success btn-sm ms-2"
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

export default AddtoCart;
