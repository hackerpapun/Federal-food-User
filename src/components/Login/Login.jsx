import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "./Login.css";

const Login = () => (
  <Row className="justify-content-center">
    <Col md={6}></Col>

    <Modal show="login" onHide="true" centered className="loginpage">
      <Modal.Header className="closebtn" closeButton>
        <Row>
          <Col className="tlogin">
          <Modal.Title>Login</Modal.Title>
          </Col>
        </Row>
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
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="#" className="create-account">
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
  </Row>
);

export default Login;
