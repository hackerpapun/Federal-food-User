import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Orderhistory.css";
import { Col, Container, Pagination, Row } from "react-bootstrap";

const Orderhistory = () => {
  const orders = [
    {
      id: 1,
      image: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045b5a4b5d3.jpg",
      item: "Watermelon - 1.5 kg 160 $ * 7",
      totalAmount: 1125,
      orderedOn: "Thu, Feb 20,2025 4:18 PM",
    },
    {
      id: 2,
      image: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f049d552a7d5.jpg",
      item: "Nescafe - 500 g 200 $ * 6",
      totalAmount: 1205,
      orderedOn: "Wed, Feb 21,2025 2:00 PM",
    },
    {
      id: 3,
      image: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f04723e93454.jpg",
      item: "Vanila cup cake - 1 pcs 76 $ X 14",
      totalAmount: 1609,
      orderedOn: "Tue, Feb 18,2025 11:45 AM",
    },
    {
      id: 4,
      image: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f0493830951e.jpg",
      item: "Almonds - 1 kg 900 $ X 2",
      totalAmount: 1800,
      orderedOn: "Mon, Feb 17,2025 1:30 PM",
    },
    {
      id: 5,
      image: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045b5a4b5d3.jpg",
      item: "Pineapple - 2 kg 250 $ * 2",
      totalAmount: 500,
      orderedOn: "Sun, Feb 16,2025 3:10 PM",
    },
  ];

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4; 
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const currentOrders = orders.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="order-history-heading">Order History</h2>
        </Col>
      </Row>
      {currentOrders.map(order => (
        <Container key={order.id} className="order-history-main-div">
          <div className="order-item">
            <div>
              <img
                className="order-icon"
                src={order.image}
                alt="Order Icon"
              />
            </div>
            <div className="orderhistory-line1"></div>
            <div className="orderhistory-heading1">ITEMS</div>
            <div className="orderhistory-heading2">{order.item}</div>
            <div className="orderhistory-heading3">Total {order.totalAmount}$</div>
            <div className="orderhistory-heading1">ORDERED ON</div>
            <div className="orderhistory-heading5">{order.orderedOn}</div>
            <div className="orderhistory-heading1">TOTAL AMOUNT</div>
            <div className="orderhistory-heading6">{order.totalAmount}$</div>
            <div className="orderhistory-line2"></div>
          </div>
        </Container>
      ))}

      <Pagination className="pagination-div">
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(Math.max(activePage - 1, 1))}>
          {/* <span>Previous</span> */}
        </Pagination.Prev>
        <Pagination.Item active>{activePage}</Pagination.Item>
        <Pagination.Next onClick={() => handlePageChange(Math.min(activePage + 1, totalPages))}>
          {/* <span>Next</span> */}
        </Pagination.Next>
        <Pagination.Last onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </Container>
  );
};

export default Orderhistory;
