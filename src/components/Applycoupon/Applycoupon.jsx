import React from "react";
import "./Applycoupon.css";
import { Button, Col, Modal, ModalHeader, Row, ModalBody, ModalTitle } from "react-bootstrap";

const Applycoupon = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered className="couponpage">
      <ModalHeader>
        <ModalTitle className="tcoupon">Apply Coupon</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Row
          className="text-center"
          style={{
            borderBottom: "1px solid #ced4da",
            justifyContent: "center",
            display: "flex",
          }}
        />
        <Row>
          <Col className="text-center">
            <Button className="cancelbtn" type="button" onClick={onHide}>
              Cancel
            </Button>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default Applycoupon;
