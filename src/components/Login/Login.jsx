import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "./Login.css";

const Login = ({
  show,
  handleClose,
  handleShowRegistration,
  handleShowForgotPassword,
}) => (
  <Modal show={show} onHide={handleClose} centered className="loginpage">
    <Modal.Header className="closebtn" closeButton>
      <Modal.Title className="tlogin">Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                className="form-input"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-input"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="#"
              className="forgot-password"
              onClick={handleShowForgotPassword}
            >
              Forgot Password?
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="#"
              className="create-account"
              onClick={handleShowRegistration}
            >
              <span style={{ color: " #212529" }}>or</span> Create an account
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="login-btn" type="submit">
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal.Body>
  </Modal>
);

export default Login;
