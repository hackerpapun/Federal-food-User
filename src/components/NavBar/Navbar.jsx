import React from "react";
import { Container, Navbar, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa"; 
import "./NavBar.css";
import logo1 from "../../assets/logo.png";

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="Nav1">
      <Container fluid className="NavContainer">
        
        <Navbar.Brand href="#home" className="Nav2">
          <img className="NavLogo" src={logo1} alt="Logo" />
        </Navbar.Brand>

        <For className="NavSearch">
          <FormControl type="text" placeholder="Search for products" className="NavSearchInput" />
        </For>

        <Dropdown className="NavDropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            English <span className="dropdown-arrow">▼</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">English</Dropdown.Item>
            <Dropdown.Item href="#">Spanish</Dropdown.Item>
            <Dropdown.Item href="#">Hindi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="outline-light" className="NavIcon">
          <FaUser /> Login / Register
        </Button>

        <Button variant="outline-light" className="NavIcon">
          <FaShoppingCart /> Cart
        </Button>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
