import React, { useState } from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductSidebar.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const Sidebar = ({ setSelectedCategory }) => {
  const [activeKey, setActiveKey] = useState(null);
  const categories = [
    {
      title: "Fruits",
      id: "0",
      links: ["Herbs & Seasonings", "Exotic Foods", "Organic Food"],
    },
    {
      title: "Beverages",
      id: "1",
      links: ["Water", "Tea", "Coffee", "Health Drink"],
    },
    {
      title: "Foodgrains, Oils & Masalas",
      id: "2",
      links: ["Atta", "Rice", "Edible Oils", "Masalas"],
    },
    {
      title: "Bakery, Cakes & Dairy",
      id: "3",
      links: ["Bakery Snacks", "Cakes", "Ice Creams"],
    },
    {
      title: "Snacks & Branded Foods",
      id: "4",
      links: ["Biscuits", "Frozen Veggies", "Chocolates"],
    },
    {
      title: "Beauty & Hygiene",
      id: "5",
      links: ["Oral Care", "Hair Care", "Skin Care"],
    },
    {
      title: "Cleaning & Household",
      id: "6",
      links: ["All Purpose Cleaners", "Detergents", "Party Needs"],
    },
    {
      title: "Kitchen, Garden & Pets",
      id: "7",
      links: ["Appliances", "Gardening", "Pet Accessories"],
    },
    { title: "Eggs, Meat & Fish", id: "8", links: ["Eggs", "Fish", "Mutton"] },
    {
      title: "Gourmet & Worldfood",
      id: "9",
      links: ["Cereals", "Snacks", "Oils"],
    },
    {
      title: "Baby Care",
      id: "10",
      links: ["Baby Accessories", "Diapers", "Feeding"],
    },
  ];

  return (
    <Container>
      <Row>
        <Col md={4} className="sidebar">
          <h5
            className="category-title"
            style={{ borderBottom: "1px solid #ced4da", display: "flex" }}
          >
            Categories
          </h5>
          <Accordion flush>
            {categories.map((category) => (
              <Accordion.Item eventKey={category.id} key={category.id}>
                <Accordion.Header>
                  <CustomToggle
                    activeKey={activeKey}
                    setActiveKey={setActiveKey}
                    eventKey={category.id}
                  />
                  <span
                    className={`subcategory-text ${
                      activeKey === category.id ? "active" : ""
                    }`}
                    style={{
                      color: activeKey === category.id ? "#7fda39" : "black",
                    }}
                  >
                    {category.title}
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="subcategory-list">
                    {category.links.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={`/category/${category.id}`}
                          className={`subcategory-link ${
                            activeKey === category.id ? "active-link" : ""
                          }`}
                          onClick={() => setSelectedCategory(category.title)} // Set the selected category on click
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

export default Sidebar;

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
