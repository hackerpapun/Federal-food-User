import React, { useState } from "react";
import "./Addresslocation.css";
import { Col, Modal, Row, Button } from "react-bootstrap";

export const Addresslocation = () => {
  function LocationModal() {
    const [show, setShow] = useState(true);
    const [address, setAddress] = useState(
      "9RCM+GWR, Raghunathpur, Bhubaneswar, 751024, India"
    );

    const handleClose = () => setShow(false);
    const handleChangeAddress = () => {
      alert("Implement address change functionality here!");
    };

    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="location-modal-container"
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <div id="map">
                <p>set the map here</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="location-heading">Set your delivery location</Col>
          </Row>
          <Row>
            <Col className="delivery-heading">
            DELIVERY AREA
            </Col>
            <Col>
              <div className="delivery-address">
                {address}{" "}
                <span className="change-address" onClick={handleChangeAddress}>
                  Change
                </span>
              </div>
            </Col>
          </Row>
        </Modal.Body>


        <Modal.Footer className="footer-buttons">
          <Button className="confirm-button" variant="primary" onClick={handleClose}>
            CONFIRM AND PROCEED
          </Button>
          <Button className="cancel-button" variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div>
      <LocationModal />
    </div>
  );
};

export default Addresslocation;
