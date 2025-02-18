import React, { useState } from "react";
import "./ProductDropdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const locationData = ["Ahmedabad", "Bhavnagar", "Dhaka"];
const categoryData = {
  Fruits: [
    "Herbs & seasonings",
    "Cherry",
    "Exotic Foods & Veggies",
    "Organic Foods & Vegetables",
    "Cuts & Sprouts",
    "Flower bouquets, Bunches",
    "Fresh Fruits",
  ],
  Frurits: [
    "Herbs & seasonings",
    "Cherry",
    "Exotic Foods & Veggies",
    "Organic Foods & Vegetables",
    "Cuts & Sprouts",
    "Flower bouquets, Bunches",
    "Fresh Fruits",
  ],
  Frurits: [
    "Herbs & seasonings",
    "Cherry",
    "Exotic Foods & Veggies",
    "Organic Foods & Vegetables",
    "Cuts & Sprouts",
    "Flower bouquets, Bunches",
    "Fresh Fruits",
  ],
  Fruitrs: [
    "Herbs & seasonings",
    "Cherry",
    "Exotic Foods & Veggies",
    "Organic Foods & Vegetables",
    "Cuts & Sprouts",
    "Flower bouquets, Bunches",
    "Fresh Fruits",
  ],
  Fruirts: [
    "Herbs & seasonings",
    "Cherry",
    "Exotic Foods & Veggies",
    "Organic Foods & Vegetables",
    "Cuts & Sprouts",
    "Flower bouquets, Bunches",
    "Fresh Fruits",
  ],
  Fruitrs: [
    "Herbs & seasonings",
    "Cherry",
    "Exotic Foods & Veggies",
    "Organic Foods & Vegetables",
    "Cuts & Sprouts",
    "Flower bouquets, Bunches",
    "Fresh Fruits",
  ],
  Beverages: [
    "Water",
    "Tea",
    "Coffee",
    "Health Drink & Supplements",
    "Fruit Juices and Drinks",
  ],
  "Foodgrains, Oils & Masalas": [
    "Atta, Flour & Sooji",
    "Dals & Pulses",
    "Rice & Rice Products",
    "Organic Staples",
    "Salt, Sugar & Jaggery",
    "Edible Oils & Ghee",
    "Masala & Spices",
    "Dry Fruits",
  ],
  "Bakery, Cakes & Dairy": [
    "Bakery Snacks",
    "Breads & Buns",
    "Cakes & Pastries",
    "Cookies, Rusk & Khari",
    "Dairy",
    "Gourmet Breads",
    "Ice Creams & Desserts",
  ],
};

export const ProductDropdown = () => {
  const [selectedLocation, setSelectedLocation] = useState("Deliver to");
  const navigate = useNavigate();

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  const handleSelectCategory = (category) => {
    navigate(`/category?category=${encodeURIComponent(category)}`);
  };

  return (
    <Container fluid className="dropdown-container">
      <Row className="align-items-center"style={{width:'100%'}}>
        <Col xs={12} md={2} className="deliver-to-col">
          <Dropdown>
            <Dropdown.Toggle variant="success" className="top-dropdown">
              <FaLocationDot className="location-icon" />
              Delevary to {" "}
              {selectedLocation}
            </Dropdown.Toggle>
            <Dropdown.Menu id="dropdown-box">
              {locationData.map((location, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleSelectLocation(location)}
                >
                  {location}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12} md={10} className="d-none d-md-block">
          <Row className="g-2">
            {Object.entries(categoryData).map(([category, items]) => (
              <Col key={category}>
                <Dropdown>
                  <Dropdown.Toggle variant="success" className="top-dropdown">
                    {category}
                  </Dropdown.Toggle>
                  <Dropdown.Menu id="dropdown-box">
                    {items.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => handleSelectCategory(item)}
                      >
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
