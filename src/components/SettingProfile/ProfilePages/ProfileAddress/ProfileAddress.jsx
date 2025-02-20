import React, { useState } from "react";
import "./ProfileAddress.css";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import Addresslocation from "../../../../components/SettingProfile/ProfilePages/ProfileAddress/Addresslocation";

export const ProfileAddress = () => {
  const [showLocation, setShowLocation] = useState(false);

  const handleClose = () => setShowLocation(false);
  const handleOpen = () => setShowLocation(true);
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

            <Col md={4}></Col>
            <Col md={4}></Col>
          </Row>
        </Row>
      </Container>
      {
        showLocation && 
      <Addresslocation show={showLocation} handleClose={handleClose} />
      }
    </>
  );
};

export default ProfileAddress;
