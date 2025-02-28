import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import vegIcon from "../../assets/th (2).jpg";
import nonVegIcon from "../../assets/th (3).jpg";
import { IoBag } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductCard = ({ product, cartItems, setCartItems }) => {
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(
    product.options?.length > 0 ? product.options[0] : null
  );
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const updateCart = (newCount) => {
    if (!setCartItems || typeof setCartItems !== "function") {
      console.error("setCartItems is missing or not a function");
      return;
    }

    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.option === selectedOption
      );

      if (newCount > 0) {
        const newItem = {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: newCount,
          option: selectedOption,
        };

        return existingItem
          ? prevCart.map((item) =>
              item.id === product.id && item.option === selectedOption
                ? { ...item, quantity: newCount }
                : item
            )
          : [...prevCart, newItem];
      } else {
        return prevCart.filter(
          (item) => !(item.id === product.id && item.option === selectedOption)
        );
      }
    });
  };

  const increaseCount = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      updateCart(newCount);
      return newCount;
    });
  };

  const decreaseCount = () => {
    setCount((prev) => {
      const newCount = prev > 1 ? prev - 1 : 0;
      updateCart(newCount);
      return newCount;
    });
  };

  return (
    <div
      className="product-card-unq"
      style={{ marginRight: "12px !important", height: "48vh" }}
      onMouseEnter={() => !count && setIsHovered(true)}
      onMouseLeave={() => !count && setIsHovered(false)}
    >
      <div className="food-icon">
        <img
          src={product.isVegetarian ? vegIcon : nonVegIcon}
          alt={product.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}
          className="food-symbol"
        />
      </div>

      {product.discount && (
        <span className="discount-badge" style={{ backgroundColor: "#F6601F" }}>
          {product.discount}%
        </span>
      )}

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: "pointer" }}
      />

      <div className="product-details">
        <h4 className="product-name">{product.name}</h4>
        <p className="product-quantity">{product.quantity}</p>
        <div className="price-container">
          {product.originalPrice && (
            <del className="old-price">{product.originalPrice}$</del>
          )}
          <span className="new-price">{product.price}$</span>
        </div>

        {product.options && product.options.length > 0 && (
          <Dropdown onSelect={(e) => setSelectedOption(e)}>
            <Dropdown.Toggle variant="outline-dark" size="sm">
              {selectedOption}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.options.map((option, index) => (
                <Dropdown.Item key={index} eventKey={option}>
                  {option}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}

        <div className={`button-container ${count > 0 ? "show-button" : ""}`}>
          {count === 0 ? (
            <Button
              onClick={increaseCount}
              style={{
                backgroundColor: "#7FAD 39",
                border: "none",
                padding: "8px 15px",
                fontSize: "16px",
                display: isHovered ? "flex" : "none",
                alignItems: "center",
                gap: "8px",
                borderRadius: "5px",
                width: "100px",
                justifyContent: "center",
              }}
            >
              <IoBag size={18} />
              ADD
            </Button>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Button
                variant="outline-success"
                onClick={decreaseCount}
                style={{
                  border: "none",
                  fontSize: "18px",
                  borderRadius: "50%",
                  paddingBottom: "7px",
                  backgroundColor: "#7FAD39",
                  color: "white",
                }}
              >
                <FaMinus />
              </Button>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {count}
              </span>
              <Button
                variant="outline-success"
                onClick={increaseCount}
                style={{
                  border: "none",
                  fontSize: "18px",
                  borderRadius: "50%",
                  paddingBottom: "7px",
                  backgroundColor: "#7FAD39",
                  color: "white",
                }}
              >
                <FaPlus />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.string),
    isVegetarian: PropTypes.bool.isRequired,
  }).isRequired,
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default ProductCard;
