import React, { useState } from "react";
import "./Placeholder.css";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const Placeholder = () => {
  
  const [totalAmount, setTotalAmount] = useState(1030);
  const [deliveryOption, setDeliveryOption] = useState("At Home"); 
  const [date, setDate] = useState(new Date().toLocaleDateString()); 

  return (
    <Container className="Placeholder-Container">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="heading1">Apply Coupon</h1>
            <Button className="btn2">View deals</Button>
          </div>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter Coupon Code"
              aria-label="Coupon Code"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Apply
            </Button>
          </InputGroup>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h2>Ultimate Grocery Wallet Balance</h2>
          </div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Available Balance"
              aria-label="Available Balance"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <div className="row mt-4">
            <div className="col-12">
              <h4>Payment Details</h4>
              <div className="d-flex justify-content-between">
                <span>Item Total:</span>
                <span>${totalAmount}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Taxes & Charges:</span>
                <span>$5</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Delivery Charges:</span>
                <span>$0</span>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <strong>Total Amount:</strong>
                <strong>${totalAmount + 5}</strong>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <h4>Delivery Options</h4>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="deliveryOption"
                  checked={deliveryOption === "At Home"}
                  onChange={() => setDeliveryOption("At Home")}
                />
                <label className="form-check-label">At Home</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="deliveryOption"
                  checked={deliveryOption === "Self Pickup"}
                  onChange={() => setDeliveryOption("Self Pickup")}
                />
                <label className="form-check-label">Self Pickup</label>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <h4>Receive At</h4>
              <div>{date}</div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <button className="btn btn-success btn-block">Place Order</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Placeholder;
