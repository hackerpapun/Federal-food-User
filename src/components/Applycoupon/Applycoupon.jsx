import React from "react";
import "./Applycoupon.css";
import { Button, Col, Modal, Row } from "react-bootstrap";

const Applycoupon = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="couponpage">
      <Modal.Header closeButton className="hcoupon">
        <Modal.Title className="tcoupon">Apply Coupon</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bcoupon"></Modal.Body>
      <Modal.Footer>
        <Row
          className="text-center"
          style={{
            borderBottom: "1px solid #ced4da",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Col
            className="text-center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button className="cancelbtn" type="button" onClick={handleClose}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default Applycoupon;
