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
        <Col
          xs={6}
          md={6}
          style={{
            display: "flex",
          }}
        >
          <button
            className="chat-button-div"
            variant="primary"
            onClick={handleShow}
          >
            <div className="chat-row-div">
              <div>
                <img
                  className="chat-icon"
                  src="https://static.vecteezy.com/system/resources/previews/003/206/628/non_2x/a-girl-in-headphones-at-a-laptop-customer-support-free-vector.jpg"
                  alt="Image Description"
                />
              </div>
              <div className="chat-support">Support</div>
            </div>
          </button>

          <Modal className="chatmodal-body" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="chat-modal-title">Super Admin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="Admin-msg-div">
                {" "}
                <span className="admin-msg-span">
                  Hlo Admin
                </span>{" "}
              </div>
              <div className="mb-3">
                <label htmlFor="messageText" className="chat-form-label"></label>
                <textarea
                  className="chat-form-control"
                  placeholder="Type Here..."
                  id="messageText"
                  rows={2}
                ></textarea>{" "}
              </div>
            </Modal.Body>
            <Modal.Footer style={{ marginTop: "0px" }}>
              <button className="footer-close-btn" variant="secondary" onClick={handleClose}>
                Close
              </button>
              <button className="footer-sm-btn" variant="primary" onClick={handleClose}>
                {" "}
                Send Message
              </button>
            </Modal.Footer>
          </Modal>
        </Col>

        <Col
          xs={6}
          md={6}
          style={{
            display: "flex",
          }}
        >
          <button
            className="chat-button-div"
            variant="primary"
            onClick={handleShow}
          >
            <div className="Admin-col">
              <div>
                <img
                  className="chat-icon"
                  src="https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/user7.png"
                  alt="Image Description"
                />
              </div>
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
