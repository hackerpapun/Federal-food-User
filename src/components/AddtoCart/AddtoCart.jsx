import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./AddtoCart.css";
import { Button, Col, Container, Form, FormCheck, Overlay, Row } from "react-bootstrap";
import { FaCreditCard, FaMapMarker, FaShoppingCart } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa6";
import Applycoupon from "../Applycoupon/Applycoupon";

const AddtoCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [popup, setPopUp] = useState(false);
  const [show,setShow]=useState(false);
  const target=useRef(null);

  const [showStores, setShowStores] = useState(false);
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

  const handleDelete = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleIncrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  const handlePopup =()=>{
    handlePopup(true);
  };
  const handleClose=()=>{
    handleClose(null);
  };
  return (
    <>
    <Container>
      <Row>
        <Col md={7}>
          <div className="container">
            <div className="cart">Cart ({cartItems.length})</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="groceries-basket">
                Groceries Basket{" "}
                <span className="gorecy-items">({cartItems.length} items)</span>
              </div>
              <div className="grocery-total">Total: {totalPrice} $</div>
            </div>
            <div className="addtocart_left">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  id="addtocart_left"
                  className=" d-flex "
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="addtocart-image">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded mr-2"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="addtocart-details">
                      <div> {item.name}</div>
                      <div>{item.weight}</div>
                      <div>${item.price}</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <button
                      className="addtocart-btn  "
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <span className="fw-bold">{item.quantity}</span>
                    <button
                      className="addtocart-btn  "
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col md={5}>
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
                  <span>Confim Order</span>
                </div>
                <div className="oneline"></div>
                <div className="your_cart">
                  <FaCreditCard style={{ color: "#D3D3D3" }} />
                  <span>Payment</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mt-5">
                <div className="apply-coupon">
                  <div>Apply Coupon</div>
                  <div>
                    <a href="#veiw details" onClick={handlePopup}>View Details</a>
                  </div>
                </div>
                <div className="enter-coupon mt-2">
                  <img src="https://ultimate-grocery-capacitor.initappz.com/assets/imgs/discount2.png"></img>
                  <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    className="input-feild"
                  ></input>
                  <button>Apply</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4">
              <div className="addtocart-walletbalance">
                Ultimate Grocery Wallet Balance
                <div className="mt-2">
                  <input type="checkbox" />
                  <span className="available-balance">
                    Available Balance 0 $
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4">
              <div>
                Payment Details
                <div className="mt-3 itemtotal-addtocart">
                  Item Total<span>{totalPrice} $</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4">
              <div className="mt-3 itemtotal-addtocart">
                Item Total<span>0 $</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4">
              <div className="mt-3 itemtotal-addtocart">
                Item Total<span>0 $</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <div className="total-amaount-cart">
                Total Amount<span>1230 $</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <div className="">
                Delivery Options
                <div>
                  {/* <Form>
                    <label>
                      <FormCheck
                        type="radio"
                        className="rounded-circle mt-2 addtocart-chechbox"
                        // onclick -> show stire true
                      />
                      Home{" "}
                      <img
                        src="https://ultimate-grocery-capacitor.initappz.com/assets/imgs/store.png"
                        className="addtocart-homeimg"
                      />
                    </label>
                    <label>
                      <FormCheck
                        type="radio"
                        className="rounded-circle mt-2 addtocart-chechbox"
                        // onclick -> show stire true
                      />
                      Home{" "}
                      <img
                        src="https://ultimate-grocery-capacitor.initappz.com/assets/imgs/store.png"
                        className="addtocart-homeimg"
                      />
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="rounded-circle mt-2 addtocart-chechbox"
                      />
                      Home{" "}
                      <img
                        src="https://ultimate-grocery-capacitor.initappz.com/assets/imgs/home.png"
                        className="addtocart-homeimg"
                      />
                    </label>
                  </Form> */}
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
          <Row>
            <Col>
              <div>
                Recieve at
                <div>
                  <Button ref={target} onClick={() => setShow(!show)}>
                    Tomorrow - Wednesday, February 19th 2025
                  </Button>
                  <Overlay
                    target={target.current}
                    show={show}
                    placement="right"
                  >
                    <p>vfgdtrsyw3ewrasdfxghcghb</p>
                    <p>xfdzraweawazvvvxdfgh</p>
                  </Overlay>
                </div>
              </div>
            </Col>
          </Row>

          {showStores && (
            <div className="mt-3">
              Stores
              <div className="ml-3">
                <FaMapMarker />
                G-mart
                <div className="mt-2 addcart-address">
                  TP Road, near Ring Road Circle, Ambli, Ahmedabad, Gujarat
                  380058
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
      </Row>
    </Container>
    <Applycoupon
    show={handlePopup}
    handleClose={handleClose}
    />
    </>
  );
};

export default AddtoCart;
