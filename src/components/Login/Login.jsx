import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "./Login.css";

const Login = ({ handleClose, show }) => (
  <Row className="justify-content-center">
    <Col md={6}></Col>

    <Modal show={show} onHide={handleClose} centered className="loginpage">
      <Modal.Header closeButton>
        <Modal.Title className={"tlogin"}>Login</Modal.Title>
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
          <Row className="text-center"
            style={{
              borderBottom: "1px solid #ced4da ",
              justifyContent: "center",
              display: "flex",
            }}
          ></Row>
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
