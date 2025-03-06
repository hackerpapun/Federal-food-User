import React, { useState } from "react";

const ProductGrid = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="product-grid">
      {products.slice(0, visibleCount).map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
        </div>
      ))}
      {visibleCount < products.length && (
        <button onClick={showMore}>Show More</button>
      )}
    </div>
  );
};

export default ProductGrid;
