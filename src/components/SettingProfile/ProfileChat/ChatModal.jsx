import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import "./ChatModal.css";

function ChatModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="chatmodal-container">
        
        <Col xs={6} md={6} className="d-flex">
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

          <Modal className="chatmodal-body" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="chat-modal-title">Super Admin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="Admin-msg-div">
                <span className="admin-msg-span">Hello Admin</span>
              </div>
              <div className="mb-3">
                <textarea
                  className="chat-form-control"
                  placeholder="Type Here..."
                  id="messageText"
                  rows={2}
                ></textarea>
              </div>
            </Modal.Body>
            <Modal.Footer className="footer-btn">
              <Button className="footer-close-btn" variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button className="footer-sm-btn" variant="primary">
                Send Message
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>

        
        <Col xs={6} md={6} className="d-flex">
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
    </>
  );
}

export default ChatModal;