import React from "react";
import PropTypes from "prop-types";
import "./ShopByCatagoriesCard.css"; 

const ShopByCatagoriesCard = ({ product }) => {
  return (
    <div className="shop-by-category-card">
      <div className="category-icon-container">
        <img src={product.icon} alt={product.name} className="category-icon" />
      </div>
      <h3 className="category-name">{product.name}</h3>
    </div>
  );
};

ShopByCatagoriesCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShopByCatagoriesCard;
