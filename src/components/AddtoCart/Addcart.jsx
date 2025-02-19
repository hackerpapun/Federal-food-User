import React, { useEffect, useState } from "react";
import GroceryBasket from "./GroceryBasket";
import OrderSummery from "./OrderSummery";
import PaymentDetails from "./PaymentDetails";
import { Col, Container, Row } from "react-bootstrap";

const AddCart = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    

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
  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  return (
    <Container>
      <Row>
        <Col md={7}>
          <GroceryBasket cartItems={cartItems} setCartItems={setCartItems} />
        </Col>
        <Col ma={5}>
          <OrderSummery
            totalPrice={cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          />
        </Col>
      </Row>
    </Container>
    
  );
};

export default AddCart;
