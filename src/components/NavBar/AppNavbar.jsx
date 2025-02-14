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

        <Form className="NavSearch">
          <FormControl type="text" placeholder="Search for products" className="NavSearchInput" />
        </Form>

         <Dropdown className="NavDropdown">
          <Dropdown.Toggle id="dropdown-basic" className="NavDropdownToggle">
            English <span className="dropdown-arrow">▼</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="NavDropdownMenu">
            <Dropdown.Item className="NavDropdownItem" href="#">English</Dropdown.Item>
            <Dropdown.Item className="NavDropdownItem" href="#">Arabic</Dropdown.Item>
            <Dropdown.Item className="NavDropdownItem" href="#">Spanish</Dropdown.Item>
            <Dropdown.Item className="NavDropdownItem" href="#">Hindi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button className="NavIcon">
          <FaUser /> Login / Register
        </Button>

        <Button className="NavIcon">
          <FaShoppingCart /> Cart
        </Button> 
        
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
