import React from "react";
import "./ProfileAddress.css";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";

export const ProfileAddress = () => {
  return (
    <Container>
      <Row>
        <Col className="add-heading" md={4}>
          My Addresses
        </Col>
        <Row>
          <Col className="add-heading2" md={4}>
          <div>
            <IoIosAddCircle />
            <div className="add-heading3">
                Add New
            </div>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ProfileAddress;
