import React from "react";
import "./ProfileAddress.css";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";

export const ProfileAddress = () => {
  return (
    <Container>
      <Row md={12}>
        <Col className="add-heading">
          My Addresses
        </Col>
        <Row>
          <Col className="add-heading2" md={4}>
          <div className="icons-div">
            <IoIosAddCircle className="add-icon" />
            <div className="add-heading3">
                Add New
            </div>
            </div>
          </Col>

          <Col md={4}></Col>
          <Col md={4}></Col>

        </Row>
      </Row>
    </Container>
  );
};

export default ProfileAddress;
