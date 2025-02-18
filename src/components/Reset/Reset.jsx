import React from 'react'
import './Reset.css'
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

const Reset = () => {
  return (
    <Row className="justify-content-center">
    <Col md={6}></Col>

    <Modal show="login" onHide="true" centered className="resetpage">
      <Modal.Header className="closebtn" closeButton>
        
        <Modal.Title className="reset">Reset Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="text1"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="#" className="note1">
                <span style={{ color: " #212529" }}>or</span> login to your account
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="submit-btn" type="submit">
                SEND OTP
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  </Row>
);
  
}

export default Reset
