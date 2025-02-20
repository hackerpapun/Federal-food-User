import React, { useState } from "react";
import "./Applycoupon.css";
import {
  Button,
  Col,
  Modal,
  ModalHeader,
  Row,
  ModalBody,
  ModalTitle,
  ModalFooter,
} from "react-bootstrap";

const Applycoupon = () => {
  const [setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal show={handleShow} centered className="couponpage">
      <ModalHeader className="hcoupon">
        <ModalTitle className="tcoupon">Apply Coupon</ModalTitle>
      </ModalHeader>
      <ModalBody className="bcoupon"></ModalBody>
      <ModalFooter>
        <Row
          className="text-center"
          style={{
            borderBottom: "1px solid #ced4da",
            justifyContent: "center",
            display: "flex",
          }}
        />
        <Row>
          <Col
            className="text-center"
            style={{
              display: "flex",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <Button className="cancelbtn" type="button" onClick={handleClose}>
              Cancel
            </Button>
          </Col>
        </Row>
      </ModalFooter>
    </Modal>
  );
};

export default Applycoupon;
