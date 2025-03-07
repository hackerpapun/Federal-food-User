import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import "./CategoriesSection.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div className="category-card" style={{ cursor: "pointer" }}
    onClick={() => navigate(`/category?category=${encodeURIComponent(category.name)}`)}>
      <img src={category.image} alt={category.name} className="category-icon" />
      <p className="category-name">{category.name}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const CategorySection = ({ title, categories }) => {
  if (!Array.isArray(categories) || categories.length === 0) {
    return (
      <Container fluid className="category-section">
        <h2 className="section-title">{title}</h2>
        <p>No categories available.</p>
      </Container>
    );
  }

  return (
    <Container fluid className="category-section">
      <h2 className="section-title">{title}</h2>
      <Row className="category-row">
        {categories.map((category, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="category-col" >
            <CategoryCard category={category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategorySection;
