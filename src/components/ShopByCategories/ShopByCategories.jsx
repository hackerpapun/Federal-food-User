import React from "react";

const categories = [
  { name: "Beauty & Hygiene", icon: "🧼" },
  { name: "Cleaning & Household", icon: "🧽" },
  { name: "Kitchen, Garden & Pets", icon: "🛒" },
  { name: "Eggs, Meat & Fish", icon: "🍗" },
  { name: "Gourmet & Worldfood", icon: "🛍️" },
  { name: "Baby Care", icon: "🍼" },
];

const ShopByCategories = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        width: "100%",
      }}
    >
      <h2
        style={{ fontSize: "1.875rem", fontWeight: "600", textAlign: "center" }}
      >
        SHOP BY CATEGORIES
      </h2>
      <p style={{ color: "#6b7280" }}>Find everything you need in one go.</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem",
              backgroundColor: "white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "0.5rem",
              width: "8rem",
              transition: "box-shadow 0.3s",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{category.icon}</span>
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                marginTop: "0.5rem",
                textAlign: "center",
              }}
            >
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategories;
