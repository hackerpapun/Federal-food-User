import React, { useState } from "react";
import "./Orderhistory.css";
import { Col, Container, Pagination, Row } from "react-bootstrap";

const Orderhistory = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      items: "Watermelon - 1.5 kg",
      price: 160,
      quantity: 7,
      total: 1125,
      date: "Wed, Feb 19, 2025 12.20 PM",
    },
  ]);

  const addOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      items: "Apple - 2 kg",
      price: 100,
      quantity: 5,
      total: 500,
      date: "Thu, Feb 20, 2025 10.00 AM",
    };
    setOrders([...orders, newOrder]); 
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="order-history-heading">Order History</h2>
        </Col>
      </Row>
      <div className="order-history-main-div">
        {orders.map((order) => (
          <div key={order.id}>
            <div>
              <img
                className="order-icon"
                src="https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045b5a4b5d3.jpg"
                alt="Order Icon"
              />
            </div>
            <div className="orderhistory-line1"></div>
            <div className="orderhistory-heading1">ITEMS</div>
            <div className="orderhistory-heading2">
              {order.items} {order.quantity} * {order.price} $
            </div>
            <div className="orderhistory-heading3">Total {order.total} $</div>
            <div className="orderhistory-line2"></div>

            <div className="orderhistory-heading1">ORDERED ON</div>
            <div className="orderhistory-heading5">{order.date}</div>
            <div className="orderhistory-heading1">TOTAL AMOUNT</div>
            <div>{order.total} $</div>
            <div className="orderhistory-line3"></div>
          </div>
        ))}
      </div>

      <Pagination className="pagination-div">
        <Pagination.First />
        <Pagination.Prev>{'Previous'}</Pagination.Prev>
        {/* <Pagination.Ellipsis /> */}
        <Pagination.Item active>{1}</Pagination.Item>
        {/* <Pagination.Ellipsis /> */}
        <Pagination.Prev>{'Next'}</Pagination.Prev>
        <Pagination.Last />
      </Pagination>
    </Container>
  );
};

export default Orderhistory;
