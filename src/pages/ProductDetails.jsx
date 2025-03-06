import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Badge, Row, Col, Container } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const sampleProduct = {
  id: 1,
  title: "Bisleri",
  size: "5 ltr",
  mrp: 30,
  price: 28.5,
  discount: 5,
  stockStatus: true,
  seller: "Walmart",
  description:
    "Bisleri water is known for its purity and quality, making it a trusted brand for hydration needs.",
  keyFeatures: ["Pure mineral water", "5L capacity", "Trusted brand"],
  disclaimer: "Product images shown are for illustration purposes only.",
  images: [
    "https://via.placeholder.com/80", // Sample thumbnails
    "https://via.placeholder.com/80",
  ],
  image: "https://via.placeholder.com/300", // Sample main image
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = sampleProduct; // Replace with API fetch logic

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
          {/* Left Side - Thumbnails */}
          <Col md={2} className="d-flex flex-column align-items-center gap-2">
            {product.images.map((img, index) => (
              <Card.Img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  width: "60px",
                  height: "60px",
                  border: "1px solid #ddd",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              />
            ))}
          </Col>

          {/* Middle - Main Image */}
          <Col md={5} className="text-center">
            <Card style={{ border: "none" }}>
              <div style={{ position: "relative" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    maxHeight: "350px",
                    objectFit: "contain",
                  }}
                />
                {product.discount > 0 && (
                  <Badge
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    {product.discount}% OFF
                  </Badge>
                )}
              </div>
              <p style={{ fontSize: "14px", color: "#555" }}>{product.size}</p>
            </Card>
          </Col>

          {/* Right Side - Product Details */}
          <Col md={5} className="d-flex flex-column justify-content-center">
            <Card style={{ border: "none" }}>
              <Card.Body>
                <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {product.title}
                </h2>
                <div>
                  <span style={{ color: "#888" }}>
                    MRP: <s>${product.mrp}</s>
                  </span>
                  <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                    Price: ${product.price}
                  </span>
                  <span style={{ color: "green", marginLeft: "10px" }}>
                    You Save: {product.discount}%
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "12px",
                      color: "#777",
                    }}
                  >
                    Inclusive of all taxes
                  </span>
                </div>
                <p
                  style={{
                    color: product.stockStatus ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {product.stockStatus ? "In Stock" : "Out of Stock"}
                </p>
                <p style={{ fontSize: "14px" }}>
                  Sold by{" "}
                  <span style={{ fontWeight: "bold" }}>{product.seller}</span>
                </p>
                <Button
                  style={{
                    backgroundColor: "#007bff",
                    border: "none",
                    padding: "10px 15px",
                  }}
                >
                  Add to Cart <FaPlus />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Description */}
        <Row className="mt-4">
          <Col>
            <h4 className="fw-bold">Description</h4>
            <p className="text-muted">{product.description}</p>
          </Col>
        </Row>

        {/* Key Features */}
        <Row className="mt-3">
          <Col>
            <h4 className="fw-bold">Key Features</h4>
            <ul className="text-muted">
              {product.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Disclaimer */}
        <Row className="mt-3">
          <Col>
            <h4 className="fw-bold">Disclaimer</h4>
            <p className="text-muted">{product.disclaimer}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ProductDetails;
