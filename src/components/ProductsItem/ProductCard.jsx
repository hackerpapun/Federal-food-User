import React from "react";
import { Card, Button, Badge, Row, Col, Container } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "./productcard.css";
import FaBottleDroplet from "../../assets/bottle.jpg";

const ProductCard = ({ image, title, mrp, price, discount, stockStatus, seller }) => {
  return (
    <Container className="product-container">
      
      <Row className="product-main">
        
        <Col md={4}>
          <Card className="product-image-card">
            <div className="product-image-container">
              <Card.Img variant="top" src={FaBottleDroplet} alt={title} className="product-imageR2" />
              {discount > 0 && <Badge className="discount-badgeR">{discount}% OFF</Badge>}
            </div>
          </Card>
        </Col>

        
        <Col md={8}>
          <Card className="product-detailsR4">
            <Card.Body>
              
              <Card.Title className="product-titleR3">{title}</Card.Title>
              <Card.Text className="price-section">
                <span className="mrpR5">MRP: 30<s>$   {mrp}</s></span>
                <span className="priceR6"> Price:28.5 <strong>  ${price}</strong></span>
                <div className="discountR7">You Save: 5 {discount}%
                  <span className="PCD1"> Inclusive of all taxes</span>
                </div>
              </Card.Text>

              <Card.Text className={stockStatus ? "in-stock" : "out-of-stock"}>
                {stockStatus ? "In Stock" : "Out of Stock"}
              </Card.Text>

              <Card.Text className="seller-infoR8">
                Sold by <span className="PCD2">walmart</span> <a href="#">{seller}</a>
              </Card.Text>

              <Button className="add-to-cartR9">
                Add to Cart <FaPlus />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="product-details-containerR">
        <Col>
          <h4 className="section-titleR">Descriptions</h4>
          <p className="section-contentR">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <hr />
          <h4 className="section-titleR">Key Features</h4>
          <ul className="section-contentR">
            <li>Promoting digestive health</li>
          </ul>
          <hr />
          <h4 className="section-titleR">Disclaimer</h4>
          <p className="section-contentR">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <hr />
        </Col>
      </Row>
      
    </Container>
  );
};

export default ProductCard;
