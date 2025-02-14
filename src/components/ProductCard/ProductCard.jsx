import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap"; // Ensure Button is imported
import PropTypes from "prop-types";
import "./ProductCard.css";
import vegIcon from "../../assets/th (2).jpg";
import nonVegIcon from "../../assets/th (3).jpg";
import { IoBag } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import FaPlus and FaMinus

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(
    product.options?.length > 0 ? product.options[0] : null
  );

  const increaseCount = (e) => {
    e.stopPropagation();
    setCount(count + 1);
  };

  const decreaseCount = () => setCount(count > 1 ? count - 1 : 0);

  return (
    <div
      className="product-card"
      onMouseEnter={() => count !== 1 && setIsHovered(true)}
      onMouseLeave={() => count === 1 && setIsHovered(false)}
    >
      <div className="food-icon">
        <img
          src={product.isVegetarian ? vegIcon : nonVegIcon}
          alt={product.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}
          className="food-symbol"
        />
      </div>

      {product.discount && (
        <span className="discount-badge">{product.discount}%</span>
      )}

      <img src={product.image} alt={product.name} className="product-image" />
      <div className={`product-details ${isHovered ? "show" : ""}`}>
        <h4 className="product-name">{product.name}</h4>
        <p className="product-quantity">{product.quantity}</p>
        <div className="price-container">
          {product.originalPrice && (
            <del className="old-price">{product.originalPrice}$</del>
          )}
          <span className="new-price">{product.price}$</span>
        </div>

        {product.options && product.options.length > 0 ? (
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
        ) : null}

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {count === 0 ? (
            <Button
              onClick={() => setCount(1)}
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
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                // border: "1px solid #7FAD39",
                // borderRadius: "5px",
                padding: "5px 15px",
                width: "120px",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outline-success"
                onClick={decreaseCount}
                style={{
                  border: "none",
                  fontSize: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#7FAD39",
                  color: "white",
                }}
              >
                <FaMinus />
              </Button>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {count}
              </span>
              <Button
                variant="outline-success"
                onClick={increaseCount}
                style={{
                  border: "none",
                  fontSize: "18px",
                  borderRadius: "50%",
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
    price: PropTypes.string.isRequired,
    originalPrice: PropTypes.string,
    discount: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.string),
    isVegetarian: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ProductCard;
