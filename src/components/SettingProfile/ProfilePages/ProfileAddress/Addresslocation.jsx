import React, { useState } from "react";
import "./Addresslocation.css";
import { Col, Modal, Row, Button } from "react-bootstrap";
import mapimage from "../../../../assets/map.jpg";

export const Addresslocation = ({ show, handleClose }) => {
  const [address, setAddress] = useState(
    "9R7P+PPW, Nandan Vihar ,Patia , Bhubaneswar, 751024, India"
  );
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChangeAddress = () => {
    alert("change location");
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };
  console.log("first");

  return (
    <>
      {/* <h1>Radhe radhe</h1> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Row>
            <Col>
              <div id="map">
                <img className="map-img" src={mapimage} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="location-heading">Set your delivery location</Col>
          </Row>
          <Row>
            <Col className="delivery-heading">DELIVERY AREA</Col>
            <Col>
              <div className="delivery-address">
                {address}{" "}
                <span
                  className="address-div"
                  onClick={handleChangeAddress}
                ></span>
                <div className="change-address">Change</div>
              </div>
              <div className="line-div"></div>
            </Col>
          </Row>

          {isConfirmed && (
            <div>
              <div className="address-house">
                <input
                  className="address-house1"
                  placeholder="HOUSE/FLAT NO"
                  type="text"
                />
              </div>
              <div className="address-house">
                <input
                  className="address-house1"
                  placeholder="LANDMARK"
                  type="text"
                />
              </div>
              <div className="address-house">
                <input
                  className="address-house1"
                  placeholder="Pincode"
                  type="text"
                />
              </div>
              <div className="address-home">
                <select id="addressType">
                  <option value="HOME">HOME</option>
                  <option value="WORK">WORK</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>
            </div>
          )}
        </Modal.Body>{" "}
        <Modal.Footer className="footer-buttons">
          <Button
            className="confirm-button"
            variant="primary"
            onClick={handleConfirm}
          >
            CONFIRM AND PROCEED
          </Button>
          <Button
            className="cancel-button"
            variant="secondary"
            onClick={handleClose}
          >
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>

       </>
  );
};

export default Addresslocation;
