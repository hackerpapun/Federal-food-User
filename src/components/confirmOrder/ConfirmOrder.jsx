import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import GroceryBasket from "../AddtoCart/GroceryBasket";
import { Navigate, useNavigate } from "react-router-dom";
import PaymentDetails from "../AddtoCart/PaymentDetails";
import ProfileAddress from "../SettingProfile/ProfilePages/ProfileAddress/ProfileAddress";

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
      name: "Aashirwad aatta",
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
    const handleBack = () => {
      Navigate(-1); 
    };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
    const navigate = useNavigate();

  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <Container>
      <Row>
        <Col md={6} className="mt-4">
          <ProfileAddress isConfirmPage={true} />
          <GroceryBasket
            cartItems={cartItems}
            setCartItems={setCartItems}
            isConfirmPage={true}
          />
        </Col>
        <Col md={6}>
          <PaymentDetails totalPrice={totalPrice} />
          <Row className="mt-4">
            <Col md={6}>
              <Button
                className="addcart-lastbtn"
                variant="secondary"
                onClick={handleBack}
              >
                Back
              </Button>
            </Col>
            <Col md={6}>
              <Button
                className="addcart-lastbtn"
                onClick={() => navigate("/payment")}
              >
                Make Payment
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmOrder;
