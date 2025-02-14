import React from "react";
import PropTypes from "prop-types";
import "./BestOffers.css"; 

const BestOffersCard = ({ product }) => {
  return (
    <div className="offer-card">
      <div className="discount-badge">{product.discount}% OFF</div>
      <img src={product.image} alt={product.name} className="offer-image" />
      <h3 className="offer-title">{product.name}</h3>
      <p className="offer-weight">{product.weight}</p>
      <p className="offer-price">
        <span className="original-price">${product.originalPrice}</span>{" "}
        <span className="discounted-price">${product.discountedPrice}</span>
      </p>
    </div>
  );
};

BestOffersCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    originalPrice: PropTypes.string.isRequired,
    discountedPrice: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
  }).isRequired,
};

export default BestOffersCard;
