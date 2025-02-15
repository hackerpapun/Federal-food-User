import React from "react";
import "./ProfileSidebar.css";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";

const ProfileSidebar = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <div className="sidebar-card">
            <div className="sidebar-heading"> ACTIVITY </div>
            <div className="sidebar-list">
              <button className="sidebar-button1">Profile</button>
              <button className="sidebar-button1">Order History</button>
              <button className="sidebar-button1">My Addresses</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSidebar;
