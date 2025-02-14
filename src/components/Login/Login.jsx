import React from "react";
import "./Login.css";
import { Modal, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Modal show={Login} onHide={Login} className="loginpage">
      <Modal.Header>
        <Modal.Title>
          <h3 className="heading">Login</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="formbody">
          <Form.Group className="mb-3" controlId="formEmail">
            <Col className="text1" sm={9}>
              <Form.Control
                className="emailplaceholder"
                type="email"
                placeholder="email"
              />
            </Col>
            <Col className="text2" sm={9}>
              <Form.Control
                className="passwordplaceholder"
                type="password"
                placeholder="Password"
              />
            </Col>
          </Form.Group>

          <Col>
            <a href="" className="text3 mt-3">
              <span style={{ color: "#212529" }}>Forgot Password ?</span>
            </a>
          </Col>
          <Col>
            <a href="" className="text4 mt-3">
              or <span style={{ color: "red" }}>Create an account</span>
            </a>
          </Col>
        </Form>
        <Button className="loginbtn" type="submit">
          Login
        </Button>
      </Modal.Body>
    </Modal>
  );
};
export default Login;
