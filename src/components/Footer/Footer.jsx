import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Footer.css";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const usefulLinks1 = [
    { name: "Your Account", href: "/accounts" },
    { name: "Privacy & Terms", href: "/privacy" },
    { name: "Refund Policy", href: "/refaund" },
    { name: "About", href: "/about" },
    { name: "Help", href: "/help" },
    { name: "Contact", href: "/contact" },
  ];

  const usefulLinks2 = [
    { name: "Home", href: "/home" },
    { name: "Orders", href: "/orders" },
    { name: "Cart", href: "/cart" },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, className: "facebook" },
    { icon: <FaInstagram />, className: "instagram" },
    { icon: <FaTwitter />, className: "twitter" },
    { icon: <FaLinkedin />, className: "linkedin" },
  ];

  return (
    <Container
      fluid
      id="footer-container"
      style={{ backgroundColor: "#DEE2E6" }}
    >
      <Row>
        <Col className="mt-3">
          <div id="footer_coloumn1">
            <img
              src="https://ultimate-grocery-capacitor.initappz.com/assets/imgs/logo.png"
              alt="Footer-logo"
            ></img>
            <div>
              Address: Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016 <br />
              Phone: +9426585554 <br />
              Email:{" "}
              <a href="info@initappz.com" className="footer-emial-link">
                info@initappz.com
              </a>
            </div>
          </div>
        </Col>
        <Col className="mt-3">
          <div id="footer_coloumn2">
            Useful Links
            {usefulLinks1.map((link, index) => (
              <span key={index}>
                <a href={link.href}>{link.name}</a>
              </span>
            ))}
          </div>
        </Col>
        <Col className="mt-3">
          <div id="footer_coloumn3">
            Useful links
            {usefulLinks2.map((link, index) => (
              <span key={index}>
                <a href={link.href}>{link.name}</a>
              </span>
            ))}
          </div>
        </Col>
        <Col className="mt-3">
          <div id="footer_coloumn4">
            Join Our Newsletter Now
            <div style={{ color: "#4f4f4f" }}>
              Get E-mail updates about our latest shop and special offers.
            </div>
          </div>
          <div>
            <Form className="footer_form mt-3">
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                  id="footer_form_control"
                />
                <Button type="submit" id="footer_submit_button">
                  Submit
                </Button>
              </InputGroup>
            </Form>
          </div>
          <div id="footer_icons">
            {socialIcons.map((social, index) => (
              <div key={index} id="icons">
                {social.icon}
              </div>
            ))}
          </div>
        </Col>
        <div id="underline"></div>
        <Row>
          <Col md={9}>
            <div className="footer_copyright mt-4">
              Copyright © 2025 All rights reserved | This app is made with by{" "}
              <FaHeart style={{ color: " #4f4f4f" }} />{" "}
              <a href="initappz" style={{ textDecoration: "none" }}>
                Initappz
              </a>
            </div>
          </Col>
          <Col md={3} className="text-end">
            <div id="master_amazon">
              <img
                src="https://ultimate-grocery-capacitor.initappz.com/assets/imgs/american.png"
                alt="american-express"
              />
              <img
                src="https://ultimate-grocery-capacitor.initappz.com/assets/imgs/mastercard.png"
                alt="master-card"
              ></img>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Footer;
