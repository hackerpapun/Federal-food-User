import React from "react";
import "./Orderhistorydetails.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";


const Orderhistorydetails = () => {
  return (
    <Container className="historydetails-container">
      <Row>
        <Col>
          <div>Order</div>
          <div className="details-line1"></div>
          <div className="details-heading1">
            <div>WalMart</div>
            <div>created</div>
          </div>
          <div className="details-heading2">
            <div>Watermelon - 1.5 kg 160 $</div>
            <div>* 7</div>
          </div>
          <div className="details-heading3">
            <div>Amount to pay</div>
            <div>11346.96 $</div>
          </div>
          <div className="details-heading4">
            <div>Delivery to</div>
            <div style={{ fontWeight: 500 }}>Home</div>
          </div>
          <div className="details-location-div">
          <FaLocationDot />
          jv 425 9R9Q+FF5, Bhubaneswar New Station Rd, Bhubaneswar, Odisha 751024, India 751012
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Orderhistorydetails;
