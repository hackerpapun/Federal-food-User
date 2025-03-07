import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./PaymentDetails.css";
import { useNavigate } from "react-router-dom";

const PaymentDetails = ({ totalPrice }) => {
  const navigate=useNavigate();
  return (
    <Row>
      <Row>
        <Col md={7} className="mt-4">
          <div className="ml-4">
            Payment Details
            <div className="mt-3 itemtotal-addtocart"style={{width:"400px"}}>
              Item Total<span>{totalPrice} $</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <div className="mt-3 itemtotal-addtocart">
            Item Total<span>0 $</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <div className="mt-3 itemtotal-addtocart">
            Item Total<span>0 $</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3">
          <div className="total-amaount-cart">
            Total Amount<span>1230 $</span>
          </div>
        </Col>
      </Row>
      {/* <Row className="mt-3 p-4">
        <Col md={6} className="d-flex justify-content-end ml-3">
          <Button className="paymentdt-btn" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Col>
        <Col md={6} className="d-flex justify-content-start">
          <Button
            className="paymentdt-btn"
            onClick={() => navigate("/payment")}
          >
            Create Payment
          </Button>
        </Col>
      </Row> */}
    </Row>
  );
};

export default PaymentDetails;
