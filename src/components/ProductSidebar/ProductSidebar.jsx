import React, { useState } from "react";
import {
  Accordion,
  Container,
  Row,
  Col,
  AccordionButton,
  useAccordionButton,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductSidebar.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const Sidebar = () => {
  const [activeKey, setActiveKey] = useState(null);
  return (
    <Container>
      <Row>
        <Col md={4} className="sidebar">
          <h5
            className="category-title"
            style={{
              borderBottom: "1px solid #ced4da ",
              display: "flex",
            }}
          >
            Categories
          </h5>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="subcategory-header">
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"0"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "0" ? "#7fda39" : "black",
                  }}
                >
                  Fruits
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">Herbs & Seasonings</a>
                  <a href="">Exotic Foods & veggies</a>
                  <a href="">Organic Food & Vegetables</a>
                  <a href="">Cuts & Sprouts</a>
                  <a href="">Flower Bouquets, Bunches</a>
                  <a href="">Fresh fruits</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"1"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "1" ? "#7fda39" : "black",
                  }}
                >
                  Beverages
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">Water</a>
                  <a href="">Tea</a>
                  <a href="">Coffee</a>
                  <a href="">Health Drink,Suppliment</a>
                  <a href="">Fruit Juices & Drinks</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"2"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "2" ? "#7fda39" : "black",
                  }}
                >
                  {" "}
                  Foodgrains, Oils & Masalas
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">Atta,Flour & Sooji</a>
                  <a href="">Dals & Pulses</a>
                  <a href="">Rice & Rice Products</a>
                  <a href="">Organic Staples</a>
                  <a href="">Salts,Sudat & Jaggery</a>
                  <a href="">Edible Oils & Ghee</a>
                  <a href="">Masalas & Sices</a>
                  <a href="">Dry Fruits</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"3"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "3" ? "#7fda39" : "black",
                  }}
                >
                  {" "}
                  Bakery, Cakes & Dairy
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">Bakery Snacks</a>
                  <a href="">Bakery Snacks</a>
                  <a href="">Breads & Buns</a>
                  <a href="">Cakes & Pastries</a>
                  <a href="">Cookies,Rusk & Khari</a>
                  <a href="">Dairy</a>
                  <a href="">Gourmet Breads</a>
                  <a href="">Ice Creams & Desserts</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"4"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "4" ? "#7fda39" : "black",
                  }}
                >
                  {" "}
                  Snacks & Branded Foods
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">Breakfast Cereals</a>
                  <a href="">Biscuits & Cookies</a>
                  <a href="">Frozen Veggi & Snacks</a>
                  <a href="">Spreads,Sauces,Ketchup</a>
                  <a href="">Snacks & Namkeens</a>
                  <a href="">Ready to Cook & Eat</a>
                  <a href="">Chocolates & Candies</a>
                  <a href="">Pickles & Chutney</a>
                  <a href="">Indian Mithai</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"5"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "5" ? "#7fda39" : "black",
                  }}
                >
                  {" "}
                  Beauty & Hygiene
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">Oral Care</a>
                  <a href="">Health & Medicine</a>
                  <a href="">Hair Care</a>
                  <a href="">Men's Grooming</a>
                  <a href="">Skin Care</a>
                  <a href="">Frangances & Deos</a>
                  <a href="">Makeup</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"6"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "6" ? "#7fda39" : "black",
                  }}
                >
                  {" "}
                  Cleaning & Household
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">All Purpose Cleaners</a>
                  <a href="">Disposable & Garbage Bag</a>
                  <a href="">Fresheners & Repellents</a>
                  <a href="">Car & Shoe Care</a>
                  <a href="">Detergents & Dishwash</a>
                  <a href="">Mops,Brushes & Scrubs</a>
                  <a href="">Party & Festive Needs</a>
                  <a href="">Pooja Needs</a>
                  <a href="">Stationery</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"7"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "7" ? "#7fda39" : "black",
                  }}
                >
                  {" "}
                  Kitchen,Garden & Pets
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">Appliances & Electricals</a>
                  <a href="">Bakeware</a>
                  <a href="">Cookware & Non Stick</a>
                  <a href="">Crockery & Cutlery</a>
                  <a href="">Flask & Casserole</a>
                  <a href="">Gardening</a>
                  <a href="">Kitchen Acccessories</a>
                  <a href="">Pet Food & Accessories</a>
                  <a href="">Steel Utensile</a>
                  <a href="">Storage & Accessories</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"8"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "8" ? "#7fda39" : "black",
                  }}
                >
                  {" "}
                  Eggs,Meat & Fish
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">Eggs</a>
                  <a href="">Fish & Seafood</a>
                  <a href="">Mutton & Lamb</a>
                  <a href="">Poultry</a>
                  <a href="">Sausages,Bacon & Salami</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"9"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "9" ? "#7fad39" : "black", font: "16px"
                  }}
                >
                  {" "}
                  Gourmet & Worldfood
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">Cereals & Breakfast</a>
                  <a href="">Chocolates & Biscuits</a>
                  <a href="">Cooking & Baking Needs</a>
                  <a href="">Dairy & Cheese</a>
                  <a href="">Drinks & Beverages</a>
                  <a href="">Oils & Vinegar</a>
                  <a href="">Pasta,Soup & Noodles</a>
                  <a href="">Sauces,Sreads & Dips</a>
                  <a href="">Snacks,Dry Fruits, Nuts</a>
                  <a href="">Tinned & Processed Food</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                <CustomToggle
                  activeKey={activeKey}
                  setActiveKey={setActiveKey}
                  eventKey={"10"}
                />
                <span
                  className="subcategory-text"
                  style={{
                    color: activeKey === "10" ? "#7fda39" : "black",
                  }}
                >
                  {" "}
                  Baby Care
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="subcategory-list">
                  <a href="">Baby Accessories</a>
                  <a href="">Baby Bath & Hygiene </a>
                  <a href="">Baby Food & Formula</a>
                  <a href="">Diapers & Wipes</a>
                  <a href="">Feeding & Nursing</a>
                  <a href="">Mothers & Maternity</a>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;

function CustomToggle({ eventKey, activeKey, setActiveKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    setActiveKey((prev) => (prev === eventKey ? null : eventKey));
  });

  return (
    <div
      style={{
        marginRight: "1rem",
      }}
      onClick={decoratedOnClick}
    >
      {activeKey === eventKey ? <FaAngleDown /> : <FaAngleRight />}
    </div>
  );
}
