import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Dropdown,
  Offcanvas,
  Button,
} from "react-bootstrap";
import {
  FaUser,
  FaShoppingCart,
  FaBars,
  FaHome,
  FaEnvelope,
} from "react-icons/fa";
import logo1 from "../../assets/logo.png";
import "../NavBar/NavBar.css";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import ForgotPassword from "../Reset/Reset";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../config/redux/slices/authSlice";

export default function AppNavbar() {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, userName } = useSelector((state) => state.auth);

  const handleShowModal = (modal) => setActiveModal(modal);
  const handleCloseModal = () => setActiveModal(null);
  const handleLoginSuccess = (name) => {
    dispatch(loginUser(name));
    handleCloseModal();
  };
  const handleLogout = () => {
    dispatch(logoutUser());
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
            {/* User icon for small screens */}
            {isAuthenticated ? (
              <Nav.Link
                className="text-white nav-link me-2"
                onClick={() => navigate("/settings")}
              >
                <FaUser />
              </Nav.Link>
            ) : (
              <Nav.Link
                className="text-white nav-link me-2"
                onClick={() => handleShowModal("login")}
              >
                <FaUser />
              </Nav.Link>
            )}
            {/* Cart icon for small screens */}
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
                {isAuthenticated && (
                  <>
                    <Nav.Link
                      onClick={() => navigate("/settings")}
                      className="text-dark d-flex align-items-center"
                    >
                      <FaUser className="me-2" /> Account Settings
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/orders")}
                      className="text-dark"
                    >
                      Orders
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/address")}
                      className="text-dark"
                    >
                      Address
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/help")}
                      className="text-dark"
                    >
                      Help
                    </Nav.Link>
                    <Nav.Link
                      onClick={() => navigate("/chats")}
                      className="text-dark"
                    >
                      Chats
                    </Nav.Link>
                    <Nav.Link onClick={handleLogout} className="text-dark">
                      Logout
                    </Nav.Link>
                  </>
                )}
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

            <Dropdown className="ms-3">
              <Dropdown.Toggle
                style={{ backgroundColor: "#7fad39", border: "none" }}
              >
                Language
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => console.log("English selected")}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => console.log("Spanish selected")}>
                  Spanish
                </Dropdown.Item>
                <Dropdown.Item onClick={() => console.log("French selected")}>
                  French
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav className="d-flex align-items-center flex-nowrap">
              {isAuthenticated ? (
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="account-dropdown"
                    style={{ backgroundColor: "#7fad39", border: "none" }}
                    className="d-flex align-items-center"
                  >
                    <FaUser className="me-2" />
                    <span>Account</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="text-center font-weight-bold">
                      Hi, {userName || "User"}
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => navigate("/settings")}>
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/orders")}>
                      Orders
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/address")}>
                      Address
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/help")}>
                      Help
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/chats")}>
                      Chats
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button
                  onClick={() => handleShowModal("login")}
                  style={{ backgroundColor: "#7fad39", border: "none" }}
                  className="d-flex align-items-center"
                >
                  <FaUser className="me-2" /> Login / Register
                </Button>
              )}

              <Nav.Link
                className="text-white d-flex align-items-center ms-3"
                onClick={() => navigate("/cart")}
              >
                <FaShoppingCart className="me-1" /> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
