import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ChatModal.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';


function ChatModalComponent({ show, handleClose, handleSendMessage }) {
  const [message, setMessage] = useState(""); 

  const handleMessageChange = (e) => {
    setMessage(e.target.value); 
  };

  const handleSubmitMessage = () => {
    if (message.trim()) {
      handleSendMessage(message); 
      setMessage(""); 
      handleClose(); 
    }
  };

  return (
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
            value={message} 
            onChange={handleMessageChange} 
          ></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer className="footer-btn">
        <Button className="footer-close-btn" variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          className="footer-sm-btn"
          variant="primary"
          onClick={handleSubmitMessage}
        >
          Send Message
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChatModalComponent;