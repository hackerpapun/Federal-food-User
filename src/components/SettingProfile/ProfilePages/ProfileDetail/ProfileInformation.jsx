import React from "react";
import "./ProfileInformation.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import imagee from "../../../../assets/profile.png";
import { FaPencil } from "react-icons/fa6";


export const ProfileInformation = () => {
  return (
    <Container fluid>
      <Row className="main-row">
        <Col md={12}>
          <h2 className="profile-title">User Informations</h2>

          <div className="profileorder-img">
            <div>
            <img className="profile-order-img" src={imagee} roundedCircle />
            </div>
            <div>
            <FaPencil className="profile-edit-icon" />
            </div>
          </div>

          <Col className="profile-heading2">Susrisangita Biswal</Col>
          <Form className="profileorder-form">
            <Row>
              <Col md={6}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>

                  <Form.Control type="text" placeholder="Susrisangita" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>

                  <Form.Control type="text" placeholder="Biswal" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>

                  <Form.Control as="select">
                    <option>Male</option>

                    <option>Female</option>

                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Phone Number</Form.Label>

                  <Form.Control type="tel" placeholder="8658030852" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className="save-button">
                <Button
                  variant="primary"
                  type="submit"
                  className="profile-save-button"
                >
                  SAVE
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileInformation;
