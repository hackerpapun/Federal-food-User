import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../config/redux/slices/cartSlice";
import "./ProductCard.css";
import vegIcon from "../../assets/th (2).jpg";
import nonVegIcon from "../../assets/th (3).jpg";
import { IoBag } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false); 

  const cartItems = useSelector((state) => state.cart.cartItems);
  const selectedItem = cartItems.find(
    (item) =>
      item.id === product.id && item.option === (product.options?.[0] || null)
  );
  const count = selectedItem ? selectedItem.quantity : 0;

  const handleIncrease = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        option: product.options?.[0] || null,
      })
    );
  };

  const handleDecrease = () => {
    if (count > 0) {
      dispatch(
        removeFromCart({
          id: product.id,
          option: product.options?.[0] || null,
        })
      );
    }
  };

  return (
    <div
      className="product-card-unq"
      style={{ marginRight: "12px !important", height: "48vh" }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
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
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" size="sm">
              {product.options[0]}
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

        <div className="button-container">
          {count === 0
            ? isHovered && (
                <Button
                  onClick={handleIncrease}
                  style={{
                    backgroundColor: "#7FAD39",
                    border: "none",
                    padding: "8px 15px",
                    fontSize: "16px",
                    display: "flex",
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
              )
            : isHovered && ( 
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Button
                    variant="outline-success"
                    onClick={handleDecrease}
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
                    onClick={handleIncrease}
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
  product: PropTypes.object.isRequired,
};

export default ProductCard;
