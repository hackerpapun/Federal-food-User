import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import GroceryBasket from "../AddtoCart/GroceryBasket";
import { useNavigate } from "react-router-dom";
import PaymentDetails from "../AddtoCart/PaymentDetails";
import ProfileAddress from "../SettingProfile/ProfilePages/ProfileAddress/ProfileAddress";
import ProgressSteps from "../AddtoCart/ProgressSteps";

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

  const [isAddressSelected, setIsAddressSelected] = useState(false); // State to track address selection
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <h3 style={{ fontWeight: "600" }}>Confirm Order</h3>
      <Row>
        <Col md={7} className="mt-4">
          <ProfileAddress
            isConfirmPage={true}
            onAddressSelect={() => setIsAddressSelected(true)} // Callback to set address selection
          />
          <GroceryBasket
            cartItems={cartItems}
            setCartItems={setCartItems}
            isConfirmPage={true}
          />
        </Col>
        <Col md={5}>
          <Row>
            <Col>
              <ProgressSteps currentStep={2} />
            </Col>
          </Row>
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
                disabled={!isAddressSelected} // Disable button if no address is selected
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
