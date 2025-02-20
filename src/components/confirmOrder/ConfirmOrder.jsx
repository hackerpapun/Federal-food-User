import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GroceryBasket from '../AddtoCart/GroceryBasket'
import PaymentDetails from '../AddtoCart/PaymentDetails'

const ConfirmOrder = () => {
    const [cartItems, setCartItems] = useState([
    
        {
          id: 1,
          name: "Banana",
          price: 99,
          quantity: 1,
          weight: "1kg",
          image:
            "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f002abb9280f.jpg",
        },
        {
          id: 2,
          name: "Aashirwad aatta",
          price: 199,
          quantity: 1,
          weight: "1kg",
          image:
            "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f047f2097bdc.jpg",
        },
        {
          id: 3,
          name: "Apple",
          price: 9,
          quantity: 1,
          weight: "1kg",
          image:
            "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045ae705c9a.jpg",
        },
        {
          id: 4,
          name: "Aashirwand aatta",
          price: 99,
          quantity: 1,
          weight: "1kg",
          image:
            "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f047f2097bdc.jpg",
        },
        {
          id: 5,
          name: "Apple",
          price: 499,
          quantity: 1,
          weight: "1kg",
          image:
            "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045ae705c9a.jpg",
        },
        {
          id: 6,
          name: "Banana",
          price: 999,
          quantity: 1,
          weight: "1kg",
          image:
            "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f002abb9280f.jpg",
        },
      ]);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <GroceryBasket
            cartItems={cartItems}
            setCartItems={setCartItems}
            isConfirmPage={true}
          />
        </Col>
        <Col md={6}>
          <PaymentDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmOrder
