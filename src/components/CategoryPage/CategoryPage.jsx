import React, { useState, useMemo, useEffect } from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CategoryPage.css";

const Sidebar = ({ categories, setSelectedCategory }) => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <Container>
      <Row>
        <Col md={4} className="sidebar">
          <h5 className="category-title">Categories</h5>
          <Accordion flush>
            {categories.map((category) => (
              <Accordion.Item eventKey={category.id} key={category.id}>
                <Accordion.Header>
                  <CustomToggle
                    activeKey={activeKey}
                    setActiveKey={setActiveKey}
                    eventKey={category.id}
                  />
                  <span className={activeKey === category.id ? "active" : ""}>
                    {category.title}
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="subcategory-list">
                    {category.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={`/category/${category.id}`}
                          className={
                            activeKey === category.id ? "active-link" : ""
                          }
                          onClick={() => setSelectedCategory(category.title)}
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

function CustomToggle({ eventKey, activeKey, setActiveKey }) {
  const decoratedOnClick = () => {
    setActiveKey((prev) => (prev === eventKey ? null : eventKey));
  };

  return (
    <div
      style={{ marginRight: "1rem", cursor: "pointer" }}
      onClick={decoratedOnClick}
    >
      {activeKey === eventKey ? <FaAngleDown /> : <FaAngleRight />}
    </div>
  );
}

const CategoryPage = ({ categories = [], products = [] }) => {
  const [sortBy, setSortBy] = useState("popularity");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0].title);
    }
  }, [categories]);

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
        break;
    }
    return sorted;
  }, [sortBy, filteredProducts]);

  return (
    <Container fluid>
      <Row>
        <Col lg={3} className="sidebar-container d-none d-lg-block">
          <Sidebar
            categories={categories}
            setSelectedCategory={setSelectedCategory}
          />
        </Col>
        <Col lg={9} md={12}>
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
              <Col className="text-center">
                <p className="no-products-message">No products available.</p>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryPage;
