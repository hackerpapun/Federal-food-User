import React, { useState, useMemo, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../ProductSidebar/ProductSidebar.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useLocation } from "react-router-dom"; // Import useLocation to read query parameters
import "./CategoryPage.css";

const CategoryPage = ({ categories = [], products = [] }) => {
  const [sortBy, setSortBy] = useState("popularity");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get("category");

  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];

    return selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  }, [selectedCategory, products]);

  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];

    switch (sortBy) {
      case "lowToHigh":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "AtoZ":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ZtoA":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break; // Keep original order for "popularity"
    }

    return sorted;
  }, [sortBy, filteredProducts]);

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="sidebar-container">
          <Sidebar categories={categories} />
        </Col>

        {/* Product Section */}
        <Col md={9}>
          {/* Sorting Buttons */}
          <div className="sorting-container">
            <span>Sort By:</span>
            {[
              { key: "popularity", label: "Popularity" },
              { key: "highToLow", label: "High to Low" },
              { key: "lowToHigh", label: "Low to High" },
              { key: "AtoZ", label: "A - Z" },
              { key: "ZtoA", label: "Z - A" },
            ].map(({ key, label }) => (
              <Button
                key={key}
                className={sortBy === key ? "active" : ""}
                onClick={() => setSortBy(key)}
              >
                {label}
              </Button>
            ))}
          </div>

          <Row>
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <Col
                  key={product.id}
                  xs={6}
                  sm={4}
                  md={3}
                  className="product-col"
                >
                  <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryPage;
