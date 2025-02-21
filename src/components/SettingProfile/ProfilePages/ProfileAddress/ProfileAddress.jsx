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

  const addressdata = [
    {
      title: "Home",
      details:
        "sxsc scdv 9R5C+73J Kalinga Inst of Industrial Technology, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024, India",
    },
    {
      title: "Work",
      details:
        "vghderaqes m mnbjhvfgxtes 9R7P+PPW, Nandan Vihar, Patia, Bhubaneswar, Odisha 751024, India",
    },
    {
      title: "Other",
      details:
        "bhgfwsexfghujikopl,. nnnnb v cxxsv 9R7P+PPW, Nandan Vihar, Patia, Bhubaneswar, Odisha 751024, India",
    },
    {
      title: "Home",
      details:
        "sxsc scdv 9R5C+73J Kalinga Inst of Industrial Technology, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024, India",
    },
    {
      title: "Work",
      details:
        "vghderaqes m mnbjhvfgxtes 9R7P+PPW, Nandan Vihar, Patia, Bhubaneswar, Odisha 751024, India",
    },
    {
      title: "Other",
      details:
        "bhgfwsexfghujikopl,. nnnnb v cxxsv 9R7P+PPW, Nandan Vihar, Patia, Bhubaneswar, Odisha 751024, India",
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <Col className="add-heading">My Addresses</Col>
        </Row>

        <Row className="g-4 d-flex flex-wrap">
          <Col
            md={5}
            lg={4}
            className="button-column d-flex justify-content-center"
          >
            <div className="icons-div add-card" onClick={handleOpen}>
              <IoIosAddCircle className="add-icon" />
              <div className="add-heading3">Add New</div>
            </div>
          </Col>

          {addressdata.map((address, index) => (
            <Col md={5} lg={4} key={index} className="address-column">
              <div className="address-card">
                <h5 className="address-title">{address.title}</h5>
                <p className="address-details">{address.details}</p>
                <div className="button-group">
                  <button className="edit-btn">Edit</button>
                  <button className="profadd-delete-btn">Delete</button>
                </div>
              </div>
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
