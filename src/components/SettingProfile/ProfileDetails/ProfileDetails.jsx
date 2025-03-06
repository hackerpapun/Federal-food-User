import React from "react";
import "./ProfileDetails.css";
import { Col, Container, Row } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import image from "../../../assets/profile.png";


const ProfileDetails = () => {
  return (
    <Container className="profile-container">
      <Row>
        <Col md={2} className="profile-image">
          <img
            className="profile-img"
            src= {image}
            roundedCircle
          />
        </Col>
        <Col md={3} className="user-details">
          <Row>
            <Col className="prof-name">Susrisangita Biswal</Col>
            <Col className="prof-email">susrisangitabiswal97@gmail.com</Col>
            <Col className="prof-phone">+91 8658030852</Col>
          </Row>
        </Col>

        <Col md={4}></Col>

        <Col>
          <Row>
            <Col md={3} className="edit-profile">
              <button className="edit-btn">EDIT PROFILE</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileDetails;
