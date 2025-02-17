import React from "react";
import "./ProductDropdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const locationData = ["Ahmedabad", "Bhavnagar", "Dhaka"];
const fruitsData = [
  "Herbs & seasonings",
  "Cherry",
  "Exotic Foods & Veggies",
  "Organic Foods & Vegetables",
  "Cuts & Spourts",
  "Flower bouqets, Bunches",
  "Fresh Fruits",
];
const beveragesData = [
  "water",
  "tea",
  "coffee",
  "Health drink , Supplements",
  "Fruit Juices and Driks",
];
const grainsData = [
  "Atta,Flour & Sooji",
  "Dals & Pulses",
  "Rice & Rice Products",
  "Oraganic Staples",
  "Salt, Sudat & Jaggery",
  "Edible Oils & Ghee",
  "Masala & Spices",
  "Dry Fruits",
];
const bakeryData = [
  "Bakery Snacks",
  "Breads & Buns",
  "Cakes & Pastries",
  "Cookies, Rusk & Khari",
  "Dairy",
  "Gourmet Breads",
  "Ice Creams & Desserts",
];

export const ProductDropdown = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelectCategory = (category) => {
    // Navigate to the category page with the selected category as a query parameter
    navigate(`/category?category=${encodeURIComponent(category)}`);
  };

  return (
    <Container
      fluid
      className="dropdown-container"
      style={{ marginLeft: "0px" }}
    >
      <Row>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" className="top-dropdown">
              <FaLocationDot className="location-icon" />
              Deliver to
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown-box">
              {locationData.map((location, index) => (
                <Dropdown.Item key={index} href={`#action-${index + 1}`}>
                  {location}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" className="top-dropdown">
              Fruits
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown-box">
              {fruitsData.map((fruit, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleSelectCategory(fruit)}
                >
                  {fruit}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" className="top-dropdown">
              Beverages
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown-box">
              {beveragesData.map((beverages, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleSelectCategory(beverages)}
                >
                  {beverages}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" className="top-dropdown">
              Herbs and Seasonings
            </Dropdown.Toggle>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" className="top-dropdown">
              Foodgrains , Oils & Masalas
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown-box">
              {grainsData.map((grains, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleSelectCategory(grains)}
                >
                  {grains}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" className="top-dropdown">
              Bakery , Cakes & Dairy
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown-box">
              {bakeryData.map((bakery, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleSelectCategory(bakery)}
                >
                  {bakery}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
};
