import React, { useState } from "react";
import Sidebar from "./SlidebarComponents/SlidebarComponents";
import ProductGrid from "./ProductGrid/ProductGrid";
import img1 from "../../assets/5f002abb9280f.jpg"
import img2 from "../../assets/5f0457235dd79.jpg"
import img3 from "../../assets/5f0457eae3c7d.jpg"
import img4 from "../../assets/5f045873bd9e0.jpg"
const categories = [
  "Fruits",
  "Beverages",
  "Herbs & Seasonings",
  "Foodgrains, Oils & Masalas",
];

const products = [
  {
    id: 1,
    name: "Banana",
    price: "$5",
    image: img1,
    category: "Fruits",
  },
  {
    id: 2,
    name: "Red Chilli",
    price: "$32",
    image: img3,
    category: "Herbs & Seasonings",
  },
  {
    id: 3,
    name: "Apple",
    price: "$23.75",
    image: img4,
    category: "Fruits",
  },
  {
    id: 4,
    name: "Lemon",
    price: "$10",
    image: img2,
    category: "Fruits",
  },
];

const ItemsComponents = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="main-container">
      <Sidebar categories={categories} onCategorySelect={setSelectedCategory} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ItemsComponents;
