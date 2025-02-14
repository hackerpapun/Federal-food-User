import React from 'react'
import {  Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Footer.css"
import { FaFacebookF, FaHeart, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


 
const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: "#DEE2E6" }}>
      <Row id="footer-container">
        <Col className="mt-5">
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
        <Col className="mt-5">
          <div id="footer_coloumn2">
            Useful Links
            <span>
              <a href="/accounts">Your Account</a>
            </span>
            <span>
              <a href="/privacy">privacy & Terms</a>
            </span>
            <span>
              <a href="/refaund">Refund Policy</a>
            </span>
            <span>
              <a href="/about">About</a>
            </span>
            <span>
              <a href="/help">Help</a>
            </span>
            <span>
              <a href="/contact">Contact</a>
            </span>
          </div>
        </Col>
        <Col className="mt-5">
          <div id="footer_coloumn3">
            Useful links
            <span>
              <a href="/home">Home</a>
            </span>
            <span>
              <a href="/orders">Orders</a>
            </span>
            <span>
              <a href="/cart">Cart</a>
            </span>
          </div>
        </Col>
        <Col className="mt-5">
          <div id="footer_coloumn4">
            Join Our Newsletter Now
            <div style={{ color: "#4f4f4f" }} className="mt-3">
              Get E-mail updates about our latest shop and special offers.
            </div>
          </div>
          <div>
            <Form className="footer_form">
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
                <Button type="submit" id="footer_submit_button">
                  Submit
                </Button>
              </InputGroup>
            </Form>
          </div>
          <div id="footer_icons">
            <div id="icons" className="icon-container">
              <FaFacebookF className="icon" />
            </div>
            <div id="icons" className="icon-container">
              <FaInstagram className="icon" />
            </div>
            <div id="icons" className="icon-container">
              <FaTwitter className="icon" />
            </div>
            <div id="icons" className="icon-container">
              <FaLinkedin className="icon" />
            </div>
          </div>
        </Col>
        <div id="underline"></div>
        <Row>
          <Col md={9}>
            <div className="footer_copyright mt-4">
              Copyright © 2025 All rights reserved | This app is made with by{" "}
              <FaHeart />{" "}
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
}

export default Footer
