import React, { useState, useRef } from "react";
import { Col, Row, Form, Button, Overlay } from "react-bootstrap";
import {
  FaShoppingCart,
  FaClipboardCheck,
  FaCreditCard,
  FaMapMarker,
} from "react-icons/fa";
import "./OrderSummery.css";
import Applycoupon from "../Applycoupon/Applycoupon";
import PaymentDetails from "./PaymentDetails";

const OrderSummery = ({ totalPrice }) => {
  const [showStores, setShowStores] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);

  const target = useRef(null);

  return (
    <>
      <Col className="p-3">
        {/* Progress Steps */}
        <Row>
          <Col>
            <div className="mt-3 addtocart-head">
              <div className="your_cart">
                <FaShoppingCart style={{ color: "green" }} />
                <span>Your Cart</span>
              </div>
              <div className="oneline"></div>
              <div className="your_cart">
                <FaClipboardCheck style={{ color: "#D3D3D3" }} />
                <span>Confirm Order</span>
              </div>
              <div className="oneline"></div>
              <div className="your_cart">
                <FaCreditCard style={{ color: "#D3D3D3" }} />
                <span>Payment</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Apply Coupon */}
        <Row>
          <Col>
            <div className="mt-5">
              <div className="apply-coupon">
                <div>Apply Coupon</div>
                <div>
                  <a
                    href="#view details"
                    className="cart-apply-coupon"
                    onClick={() => setShowCouponModal(true)}
                  >
                    View Details
                  </a>
                </div>
              </div>
              <div className="enter-coupon mt-2">
                <img
                  src="https://ultimate-grocery-capacitor.initappz.com/assets/imgs/discount2.png"
                  alt="Discount"
                />
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="input-feild"
                />
                <button className="add-apply-btn">Apply</button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Wallet Balance */}
        <Row>
          <Col className="mt-4">
            <div className="addtocart-walletbalance">
              Ultimate Grocery Wallet Balance
              <div className="mt-2">
                <input type="checkbox" />
                <span className="available-balance">Available Balance 0 $</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Payment Details */}
        <Row>
          <Col>
            <PaymentDetails />
          </Col>
        </Row>

        {/* Delivery Options */}
        <Row>
          <Col className="mt-5">
            <div>
              Delivery Options
              <div>
                <Form>
                  <Form.Group className="mt-3" controlId="formGroupEmail">
                    <Form.Check
                      onClick={() => setShowStores(false)}
                      type="radio"
                      label={
                        <div>
                          At Home{" "}
                          <span className="addtocart-homeimg">
                            <img
                              src="https://ultimate-grocery-capacitor.initappz.com/assets/imgs/home.png"
                              style={{ width: "20px", height: "20px" }}
                              alt="Home Delivery"
                            />
                          </span>
                        </div>
                      }
                      name="formGroup"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Check
                      onClick={() => setShowStores(true)}
                      type="radio"
                      label={
                        <div>
                          Self Pickup
                          <span>
                            <img
                              src="https://ultimate-grocery-capacitor.initappz.com/assets/imgs/store.png"
                              style={{ width: "20px", height: "20px" }}
                              alt="Store Pickup"
                            />
                          </span>
                        </div>
                      }
                      name="formGroup"
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Col>
        </Row>

        {/* Delivery Date Selection */}
        <Row>
          <Col>
            <div>
              Receive at
              <div>
                <Button
                  ref={target}
                  onClick={() => setShowOverlay(!showOverlay)}
                  className="addcart-cal-btn"
                >
                  Tomorrow - Wednesday, February 19th 2025
                </Button>
                <Overlay
                  target={target.current}
                  show={showOverlay}
                  placement="right"
                >
                  <div
                    className="p-2"
                    style={{
                      background: "#fff",
                      borderRadius: "5px",
                      boxShadow: "0 0 5px rgba(0,0,0,0.3)",
                    }}
                  >
                    <p>Selected delivery date:</p>
                    <p>Wednesday, February 19th</p>
                  </div>
                </Overlay>
              </div>
            </div>
          </Col>
        </Row>

        {/* Store Details (if Pickup is Selected) */}
        {showStores && (
          <div className="mt-3">
            <strong>Stores</strong>
            <div className="ml-3">
              <FaMapMarker />
              G-mart
              <div className="mt-2 addcart-address">
                TP Road, near Ring Road Circle, Ambli, Ahmedabad, Gujarat 380058
              </div>
            </div>
          </div>
        )}

        <Row className="mt-4">
          <Col md={6}></Col>
          <Col md={6}>
            <Button className="addcart-lastbtn">Place Order</Button>
          </Col>
        </Row>
      </Col>

      <Applycoupon
        show={showCouponModal}
        handleClose={() => setShowCouponModal(false)}
      />
    </>
  );
};

export default OrderSummery;
