import React, { useState } from "react";
import "./ProfileAddress.css";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import Addresslocation from "../ProfileAddress/Addresslocation";

export const ProfileAddress = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [addresses, setAddresses] = useState([]);

  const handleClose = () => setShowLocation(false);
  const handleOpen = () => setShowLocation(true);

  const handleAddressAdd = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  return (
    <>
      <Container>
        <Row md={12}>
          <Col className="add-heading">My Addresses</Col>
          <Row>
            <Col className="add-heading2" md={4}>
              <div className="icons-div" onClick={handleOpen}>
                <IoIosAddCircle className="add-icon" />
                <div className="add-heading3">Add New</div>
              </div>
            </Col>
          </Row>
        </Row>
        <Row>
          {addresses.map((address, index) => (
            <Col key={index} className="address-item">
              {address}
            </Col>
          ))}
        </Row>
      </Container>
      {showLocation && (
        <Addresslocation
          show={showLocation}
          handleClose={handleClose}
          onAddressAdd={handleAddressAdd}
        />
      )}
    </>
  );
};

export default ProfileAddress;
