import React from "react";
import PropTypes from "prop-types";
import "./TopStories.css"; 

const TopStoresCard = ({ store }) => {
  return (
    <div className="store-card">
      <img src={store.image} alt={store.name} className="store-image" />
      <h3 className="store-title">{store.name}</h3>
      <p className="store-location">{store.location}</p>
    </div>
  );
};

TopStoresCard.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default TopStoresCard;
