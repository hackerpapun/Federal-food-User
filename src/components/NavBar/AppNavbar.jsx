import React, { useState } from "react";
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
  FaUser ,
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
import "../NavBar/NavBar.css";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import ForgotPassword from "../Reset/Reset"; // Assuming this is the correct import for the reset password modal

export default function AppNavbar() {
  const [activeModal, setActiveModal] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  const handleShowModal = (modal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleLoginSuccess = (name) => {
    setIsAuthenticated(true);
    setUserName(name);
    handleCloseModal();
  };

  return (
    <>
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
            {isAuthenticated ? (
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "#7fad39", border: "none" }}
                >
                  {userName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                  <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Link
                onClick={() => handleShowModal("login")}
                className="text-white me-3"
              >
                <FaUser  />
              </Nav.Link>
            )}
            <Nav.Link href="/cart" className="text-white nav-link">
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
                  href="/contact"
                  className="text-dark d-flex align-items-center"
                >
                  <FaEnvelope className="me-2" /> Contact Us
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

              {isAuthenticated ? (
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "#7fad39", border: "none" }}
                  >
                    {userName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                    <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Nav.Link
                  onClick={() => handleShowModal("login")}
                  className="text-white me-3 d-flex align-items-center"
                >
                  <FaUser  className="me-1" /> Account
                </Nav.Link>
              )}

              <Nav.Link className="text-white d-flex align-items-center">
                <FaShoppingCart className="me-1" /> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modals */}
      {activeModal === "login" && (
        <Login
          show={true}
          handleClose={handleCloseModal}
          handleLoginSuccess={handleLoginSuccess}
          handleShowRegistration={() => handleShowModal("registration")}
          handleShowForgotPassword={() => handleShowModal("forgotPassword")}
        />
      )}

      {activeModal === "registration" && (
        <Registration
          show={true}
          handleClose={handleCloseModal}
          handleShowLogin={() => handleShowModal("login")}
        />
      )}

      {activeModal === "forgotPassword" && (
        <ForgotPassword
          show={true}
          handleClose={handleCloseModal}
          handleShowLogin={() => handleShowModal("login")}
        />
      )}
    </>
  );
}