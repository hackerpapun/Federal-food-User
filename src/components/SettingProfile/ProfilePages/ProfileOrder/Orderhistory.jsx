import React from "react";
// import { Link } from "react-router-dom";
import "./Orderhistory.css";
import { Col, Container, Pagination, Row } from "react-bootstrap";

const Orderhistory = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="order-history-heading">Order History</h2>
        </Col>
      </Row>
      <div className="order-history-main-div">
        <div className="order-item">
          <div>
            <img
              className="order-icon"
              src="https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045b5a4b5d3.jpg"
              alt="Order Icon"
            />
          </div>
          <div className="orderhistory-line1"></div>
          <div className="orderhistory-heading1">ITEMS</div>
          <div className="orderhistory-heading2"> Watermelon - 1.5 kg 160 $ * 7</div>
          <div className="orderhistory-heading3">Total 1125 $</div>
          <div className="orderhistory-heading1">ORDERED ON</div>
          <div className="orderhistory-heading5"> Thu, Feb 20,2025 4:18 PM</div>
          <div className="orderhistory-heading1">TOTAL AMOUNT</div>
          <div className="orderhistory-heading6">1125 $</div>
          <div className="orderhistory-line2"></div>

        </div>
      </div>

      <Pagination className="pagination-div">
        <Pagination.First />
        <Pagination.Prev>
          <span>Previous</span>
        </Pagination.Prev>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Next>
          <span>Next</span>
        </Pagination.Next>
        <Pagination.Last />
      </Pagination>
    </Container>
  );
};

export default Orderhistory;
