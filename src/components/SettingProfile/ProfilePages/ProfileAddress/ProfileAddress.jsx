import React, { useState } from "react";
import "./ProfileAddress.css";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import Addresslocation from "../ProfileAddress/Addresslocation";
import Delete from "../../../Delete/Delete";

export const ProfileAddress = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      title: "Home",
      details: "Kalinga Inst of Industrial Technology, Bhubaneswar, India",
    },
    {
      title: "Work",
      details: "Nandan Vihar, Patia, Bhubaneswar, India",
    },
    {
      title: "Other",
      details: "Some other address in Bhubaneswar, India",
    },
  ]);

  const [showDelete, setShowDelete] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleCloseLocation = () => setShowLocation(false);
  const handleOpenLocation = () => setShowLocation(true);

  const handleAddressAdd = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  const handleDeleteClick = (index) => {
    setSelectedAddress(index);
    setShowDelete(true);
  };

  const handleConfirmDelete = () => {
    if (selectedAddress !== null) {
      setAddresses(addresses.filter((_, index) => index !== selectedAddress));
    }
    setShowDelete(false);
  };

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
            <div className="icons-div add-card" onClick={handleOpenLocation}>
              <IoIosAddCircle className="add-icon" />
              <div className="add-heading3">Add New</div>
            </div>
          </Col>

          {addresses.map((address, index) => (
            <Col md={5} lg={4} key={index} className="address-column">
              <div className="address-card">
                <h5 className="address-title">{address.title}</h5>
                <p className="address-details">{address.details}</p>
                <div className="button-group">
                  <button className="edit-btn">Edit</button>
                  <button
                    className="profadd-delete-btn"
                    onClick={() => handleDeleteClick(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {showLocation && (
        <Addresslocation
          show={showLocation}
          handleClose={handleCloseLocation}
          onAddressAdd={handleAddressAdd}
        />
      )}

      {showDelete && (
        <Delete
          show={showDelete}
          handleClose={() => setShowDelete(false)}
          onConfirmDelete={handleConfirmDelete}
        />
      )}
    </>
  );
};

export default ProfileAddress;
