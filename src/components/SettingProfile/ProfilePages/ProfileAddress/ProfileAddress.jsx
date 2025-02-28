import React, { useState } from "react";
import "./ProfileAddress.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa"; // Importing check icon
import Addresslocation from "../ProfileAddress/Addresslocation";
import Delete from "../../../Delete/Delete";

export const ProfileAddress = ({ isConfirmPage = false }) => {
  const [showLocation, setShowLocation] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

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

  const handleCloseLocation = () => setShowLocation(false);
  const handleOpenLocation = () => setShowLocation(true);

  const handleAddressAdd = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };

  const handleDeleteClick = (index) => {
    setSelectedAddress(index);
    setShowDelete(true);
  };

  const handleSelectAddress = (index) => {
    setSelectedAddress(index);
  };

  return (
    <>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
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
              <div
              style={{cursor:'pointer'}}
                className={`address-card ${
                  isConfirmPage ? "clickable-card" : ""
                }`}
                onClick={
                  isConfirmPage ? () => handleSelectAddress(index) : undefined
                }
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h5 className="address-title">{address.title}</h5>

                  {isConfirmPage && selectedAddress === index && (
                    <FaCheckCircle
                      className="check-icon"
                      color="green"
                      size={20}
                    />
                  )}
                </div>

                <p className="address-details">{address.details}</p>

                {!isConfirmPage && (
                  <div className="button-group">
                    <button className="edit-btn">Edit</button>
                    <button
                      className="profadd-delete-btn"
                      onClick={() => handleDeleteClick(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}
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
          onConfirmDelete={() => {
            setAddresses(
              addresses.filter((_, index) => index !== selectedAddress)
            );
            setShowDelete(false);
          }}
        />
      )}
    </>
  );
};

export default ProfileAddress;
