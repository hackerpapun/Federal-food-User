import React from 'react'
import './LowerProducts.css'
import { Col, Container, Row } from 'react-bootstrap';
 
const LowerProducts = () => {
    const lowerProducts = [
      {
        image:
          "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5eff419b58f63.jpg",
        name: "Apple",
        badge: "5%",
        isVeg: true,
      },
      {
        image:
          "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f002abb9280f.jpg",
        name: "Banana",
        badge: "5%",
      },
      {
        image:
          "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f0457eae3c7d.jpg",
        name: "Red Chilli",
        badge:"20%",
      },
      {
        image:
          "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045873bd9e0.jpg",
        name: "Fresho Ginger",
        badge:"10%",
        isVeg: false,
      },
      {
        image:
          "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045919a98a1.jpg",
        name: "Fresho Garlic",
        badge:"8%",
        isVeg:true,
      },
    ];

  return (
    <Container className="lower-products-container">
      <Row>
        {lowerProducts.map((product, index) => (
          <Col key={index} >
            <div className="product-card">
              <div className="product-badge">{product.badge}</div>

              <div className="product-veg-icon">
                <img
                  src={
                    product.isVeg
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png"
                      : "https://ultimate-grocery-capacitor.initappz.com/assets/imgs/non.png" 
                  }
                  alt="logos"
                  className="veg-logo"
                />
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <p className="product-name">{product.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LowerProducts
