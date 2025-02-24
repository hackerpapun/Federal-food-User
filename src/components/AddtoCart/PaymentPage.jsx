import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Payment from "./Payment";
import PaymentDetails from "./PaymentDetails";

const PaymentPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleCreatePayment = () => {
    // Logic for creating payment goes here
    console.log("Payment created!"); // Placeholder for payment creation logic
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Payment />
        </Col>
        <Col md={6}>
          <PaymentDetails />
          {/* Create Payment and Back Buttons below PaymentDetails */}
          <Row className="mt-4">
            <Col md={6}>
              <Button
                className="addcart-lastbtn"
                variant="secondary"
                onClick={handleBack}
              >
                Back
              </Button>
            </Col>
            <Col md={6}>
              <Button className="addcart-lastbtn" onClick={handleCreatePayment}>
                Create Payment
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
