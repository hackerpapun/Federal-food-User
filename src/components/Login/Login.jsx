import React from "react";
import "./Login.css";
import { Modal, Col, Form, Button, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Modal show={Login} onHide={Login} className="loginpage">
      <Modal.Header>
        <Modal.Title className="w-100 text-center">
          <h3 className="heading">Login</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="h-100">
        <Form className="formbody">
          <Row className="mb-3">
            <Col sm={12}>
              <Form.Control
                className="emailplaceholder"
                type="email"
                placeholder="Email"
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={12}>
              <Form.Control
                className="passwordplaceholder"
                type="password"
                placeholder="Password"
              />
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <a href="#" className="text3 ">
                <span style={{ color: "#212529" }}>Forgot Password?</span>
              </a>
            </Col>
          </Row>

          <Row className="text-center ">
            <Col>
              <a href="#" className="text4 ">
                or <span style={{ color: "red" }}>Create an account</span>
              </a>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer
        className="text-center"
        style={{ borderBottom: "1px solid #ced4da ",justifyContent:'center', display:'flex' }}>
        <Button className="loginbtn" type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Login;
