import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Dropdown,
  Offcanvas,
} from "react-bootstrap";
import {
  FaUser,
  FaShoppingCart,
  FaBars,
  FaHome,
  FaGift,
  FaMapMarkerAlt,
  FaGlobe,
  FaEnvelope,
  FaInfoCircle,
  FaQuestionCircle,
} from "react-icons/fa";
import logo1 from "../../assets/logo.png";
import "../NavBar/NavBar.css"

export default function AppNavbar() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#7fad39" }}
      className="py-2"
      variant="dark"
    >
      <Container fluid="xl" className="px-lg-5">
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="border-0 text-white d-lg-none"
        >
          <FaBars />
        </Navbar.Toggle>

        <Navbar.Brand href="/" className="mx-auto d-lg-none">
          <img src={logo1} alt="Logo" height="25" />
        </Navbar.Brand>

        <div className="d-flex align-items-center d-lg-none">
          <Nav.Link href="/login" className="text-white me-3">
            <FaUser />
          </Nav.Link>
          <Nav.Link href="/cart" className="text-white  nav-link">
            <FaShoppingCart />
          </Nav.Link>
        </div>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          placement="start"
          className="d-lg-none"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link
                href="/"
                className="text-dark d-flex align-items-center"
              >
                <FaHome className="me-2" /> Home
              </Nav.Link>
              <Nav.Link
                href="/profile"
                className="text-dark d-flex align-items-center"
              >
                <FaUser className="me-2" /> Profile
              </Nav.Link>
              <Nav.Link
                href="/orders"
                className="text-dark d-flex align-items-center"
              >
                <FaGift className="me-2" /> Orders
              </Nav.Link>
              <Nav.Link
                href="/address"
                className="text-dark d-flex align-items-center"
              >
                <FaMapMarkerAlt className="me-2" /> Address
              </Nav.Link>
              <Nav.Link
                href="/language"
                className="text-dark d-flex align-items-center"
              >
                <FaGlobe className="me-2" /> Language
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="text-dark d-flex align-items-center"
              >
                <FaEnvelope className="me-2" /> Contact Us
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="text-dark d-flex align-items-center"
              >
                <FaInfoCircle className="me-2" /> About
              </Nav.Link>
              <Nav.Link
                href="/faqs"
                className="text-dark d-flex align-items-center"
              >
                <FaQuestionCircle className="me-2" /> FAQs
              </Nav.Link>
              <Nav.Link
                href="/help"
                className="text-dark d-flex align-items-center"
              >
                <FaQuestionCircle className="me-2" /> Help
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-none d-lg-flex justify-content-between w-100"
        >
          <Navbar.Brand href="/" className="me-3 d-none d-lg-block">
            <img src={logo1} alt="Logo" height="30" />
          </Navbar.Brand>

          <Form className="d-flex mx-2 w-50">
            <FormControl
              type="search"
              placeholder="Search for products"
              className="me-2"
            />
          </Form>

          <Nav className="d-flex align-items-center flex-nowrap">
            <Dropdown className="me-3">
              <Dropdown.Toggle
                style={{ backgroundColor: "#7fad39", border: "none" }}
                id="dropdown-basic"
              >
                English
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">English</Dropdown.Item>
                <Dropdown.Item href="#">Arabic</Dropdown.Item>
                <Dropdown.Item href="#">Spanish</Dropdown.Item>
                <Dropdown.Item href="#">Hindi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link className="text-white me-3 d-flex align-items-center">
              <FaUser className="me-1" /> Login / Register
            </Nav.Link>

            <Nav.Link className="text-white d-flex align-items-center">
              <FaShoppingCart className="me-1" /> Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
