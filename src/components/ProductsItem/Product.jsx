import React, { useState } from "react";
import { Card, Button, Badge, Row, Col, Container } from "react-bootstrap";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import "./product.css";

const Product = ({ product = {} }) => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count > 1 ? count - 1 : 0);
  const toggleLike = () => setLiked(!liked);
  const {
    images = [],
    image = "",
    title = "No Title Available",
    size = "N/A",
    mrp = "0.00",
    price = "0.00",
    discount = 0,
    stockStatus = false,
    seller = "Unknown Seller",
    description = "No description available.",
    keyFeatures = [],
    disclaimer = "No disclaimer available.",
  } = product || {};

  return (
    <Container fluid style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
      <Container
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Row>
          <Col
            md={1}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {images.length > 0 ? (
              images.map((img, index) => (
                <Card.Img
                  key={index}
                  src={img}
                  alt={`View ${index + 1}`}
                  style={{
                    width: "80px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    padding: "5px",
                  }}
                />
              ))
            ) : (
              <li>
              <p>promoting digestive health
                </p>
            </li> 
            )}
          </Col>

          <Col md={5} style={{ textAlign: "center" }}>
            <Card style={{ border: "none" }}>
              <div style={{ position: "relative" }}>
                {image ? (
                  <Card.Img
                    variant="top"
                    src={image}
                    alt={title}
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                ) : (
                  <p>No main image available</p>
                )}
                {discount > 0 && (
                  <Badge
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "red",
                      color: "white",
                      fontSize: "14px",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    {discount}% OFF
                  </Badge>
                )}
              </div>
              <p style={{ fontSize: "14px", color: "#555" }}>{size}</p>
            </Card>
          </Col>

          <Col
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Card
              style={{ border: "none", position: "relative", padding: "15px" }}
            >
              <button
                onClick={toggleLike}
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  background: liked ? "#28a745" : "#f8f9fa",
                  border: "none",
                  borderRadius: "50%",
                  padding: "8px",
                  cursor: "pointer",
                  transition: "0.3s ease",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <FaHeart color={liked ? "#fff" : "#000"} size={20} />
              </button>
              <Card.Body>
                <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {title}
                </h2>
                <div>
                  <span style={{ color: "#888", fontSize: "16px" }}>
                    MRP:<s>30$</s>
                  </span>
                  <span
                    style={{
                      fontWeight: "bold",
                      marginLeft: "10px",
                      fontSize: "18px",
                    }}
                  >
                    Price: 28.5$
                  </span>
                  <div
                    style={{
                      color: "green",
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                  >
                    You Save: 5% <span className="PcR5">Inclusive of all taxes</span>
                  </div>
                </div>
                <p
                  style={{
                    color: stockStatus ? "red" : "green",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {stockStatus ?  "Out of Stock" : "In Stock"}
                </p>
                <p style={{ fontSize: "14px" }}>
                  Sold by{" "}
                  <span style={{ fontWeight: "bold", color: "skyblue" }}>
                    walmart
                  </span>
                </p>
                <div style={{ width: "150px" }}>
                  {count === 0 ? (
                    <Button
                      style={{
                        backgroundColor: "#7FAD39",
                        border: "none",
                        padding: "10px 20px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        color:"#FFFFFF",
                      }}
                      onClick={() => setCount(1)}
                    >
                      Add to Cart{" "}
                      <FaPlus
                        style={{
                          marginLeft: "5px",
                          borderRadius: "50%",
                          backgroundColor: "#A6C675",
                          padding: "0.6rem",
                          color: "#fff",
                          height:"20px",
                          width:"20px",
                        }}
                      />
                    </Button>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        border: "1px solid #7FAD39",
                        borderRadius: "5px",
                        padding: "5px 15px",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      <Button
                        variant="outline-success"
                        onClick={decreaseCount}
                        style={{ border: "none", fontSize: "18px" }}
                      >
                        <FaMinus />
                      </Button>
                      <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                        {count}
                      </span>
                      <Button
                        variant="outline-success"
                        onClick={increaseCount}
                        style={{ border: "none", fontSize: "18px" }}
                      >
                        <FaPlus />
                      </Button>
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

         <Row style={{ marginTop: "20px" }}>
          <hr />
          <Col>
            <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>
              Description
            </h4>
            <p style={{ fontSize: "14px", color: "#555" }}>{description}</p>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Col>
          <hr />
            <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>
              Key Features
            </h4>
            <ul style={{ fontSize: "14px", color: "#555" }}>
              {keyFeatures.length > 0 ? (
                keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))
              ) : (
                <p>No key features available</p>
              )}
            </ul>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Col>
          <hr />
            <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>Disclaimer</h4>
            <p style={{ fontSize: "14px", color: "#555" }}>{disclaimer}</p>
          </Col>
        </Row>
        <hr />
      </Container>
    </Container>
  );
};

export default Product;
  


