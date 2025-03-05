import React, { useEffect, useState } from "react";
import "./ProfileAddress.css";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddresses,
  addAddress,
  deleteAddress,
} from "../../../../redux/slices/addressSlice";
import Addresslocation from "../ProfileAddress/Addresslocation";
import Delete from "../../../Delete/Delete";

export const ProfileAddress = ({ isConfirmPage = false, onAddressSelect }) => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses.addressList);
  const loading = useSelector((state) => state.addresses.loading);
  const error = useSelector((state) => state.addresses.error);

  const [showLocation, setShowLocation] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const handleCloseLocation = () => setShowLocation(false);
  const handleOpenLocation = () => setShowLocation(true);

  const handleAddressAdd = (newAddress) => {
    dispatch(addAddress(newAddress));
  };

  const handleDeleteClick = (index) => {
    setSelectedAddress(index);
    setShowDelete(true);
  };

  const handleSelectAddress = (index) => {
    setSelectedAddress(index);
    if (onAddressSelect) {
      onAddressSelect(index);
    }
  };

  return (
    <>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Col className="add-heading">My Addresses</Col>
        </Row>

        {loading && <p>Loading addresses...</p>}
        {error && <p className="error-text">{error}</p>}

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
                style={{ cursor: "pointer" }}
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
                      color="#7FAD39"
                      size={16}
                    />
                  )}
                </div>

                <p className="address-details">{address.details}</p>

                {!isConfirmPage && (
                  <div className="button-group">
                    <button className="edit-btn">Edit</button>
                    <button
                      className="profadd-delete-btn"
                      onClick={() => handleDeleteClick(address.id)}
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
            dispatch(deleteAddress(selectedAddress));
            setShowDelete(false);
          }}
        />
      )}
    </>
  );
};

export default ProfileAddress;
