import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../components/SettingProfile/ProfileChat/ChatModal.css";
import ChatModalComponent from "../components/SettingProfile/ProfileChat/ChatModalComponent"; // Import the modal component

function ChatModal() {
  const [show, setShow] = useState(false); // State to control modal visibility

  const handleClose = () => setShow(false); // Close modal
  const handleShow = () => setShow(true);  // Show modal

  const handleSendMessage = (message) => {
    console.log("Message Sent:", message); // Replace with actual message handling
  };

  return (
    <>
      <Container>
        <Row className="chatmodal-container">
          <Col xs={6} md={6} className="d-flex justify-content-left">
            <button className="chat-button-div" onClick={handleShow}>
              <div className="chat-row-div">
                <img
                  className="chat-icon"
                  src="https://static.vecteezy.com/system/resources/previews/003/206/628/non_2x/a-girl-in-headphones-at-a-laptop-customer-support-free-vector.jpg"
                  alt="Support Icon"
                />
                <div className="chat-support">Support</div>
              </div>
            </button>
          </Col>

          <Col xs={6} md={6} className="d-flex justify-content-left">
            <button className="chat-button-div" onClick={handleShow}>
              <div className="Admin-col">
                <img
                  className="chat-icon"
                  src="https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/user7.png"
                  alt="Super Admin Icon"
                />
                <div className="super-admin">
                  Super Admin
                  <div className="admin-div">Admin</div>
                </div>
              </div>
            </button>
          </Col>
        </Row>

        <ChatModalComponent
          show={show}
          handleClose={handleClose}
          handleSendMessage={handleSendMessage}
        />
      </Container>
    </>
  );
}

export default ChatModal;