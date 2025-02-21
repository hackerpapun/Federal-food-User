import React, { useState } from "react";
import "./Addresslocation.css";
import { Col, Modal, Row, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export const Addresslocation = ({ show, handleClose, onAddressAdd }) => {
  const [address, setAddress] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [mapPosition, setMapPosition] = useState([20.2961, 85.8245]);

  const handleChangeAddress = () => {
    alert("Change location");
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  const handleAddAddress = () => {
    if (address) {
      onAddressAdd(address); 
      handleClose();
    } else {
      alert("Please select an address.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Row>
          <Col>
            <MapContainer
              center={mapPosition}
              zoom={14}
              style={{ height: "200px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={mapPosition}>
                <Popup>{address || "Your location"}</Popup>
              </Marker>
            </MapContainer>
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
              <div className="change-address" onClick={handleChangeAddress}>
                Change
              </div>
            </div>
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
      </Modal.Body>
      <Modal.Footer className="footer-buttons">
        {isConfirmed ? (
          <Button
            className="add-address-button"
            variant="danger"
            onClick={handleAddAddress}
          >
            ADD ADDRESS
          </Button>
        ) : (
          <Button
            className="confirm-button"
            variant="primary"
            onClick={handleConfirm}
          >
            CONF IRM AND PROCEED
          </Button>
        )}
        <Button
          className="cancel-button"
          variant="secondary"
          onClick={handleClose}
        >
          CANCEL
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Addresslocation;
