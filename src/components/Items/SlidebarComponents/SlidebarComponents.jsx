import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({ categories, onCategorySelect }) => {
  return (
    <div className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onCategorySelect(category)}>
            {category}
          </li>
        ))}
        <li onClick={() => onCategorySelect(null)}>All</li>
      </ul>
    </div>
  );
};
Sidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default Sidebar;
