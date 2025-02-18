import React from "react";
import { Button, Modal, Form, Row, Col, FormCheck } from "react-bootstrap";
import "./Registration.css";

const Registration = () => (
  <Row className="justify-content-center">
    <Col md={6}></Col>

    <Modal show="login" onHide="true" centered className="loginpage">
      <Modal.Header closeButton  >
        <Modal.Title className="tsignup">Sign Up</Modal.Title>
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
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="text1"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  className="text1"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  className="text1"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="tel"
                  placeholder="Mobile Number"
                  className="text1"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Referral Code (Optional)"
                  className="text1"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
                <FormCheck
                  type="checkbox"
                  label={
                    <p className="note">
                      By clicking on the I agree button click, download or if
                      you use the Application, you <br />agree to be bound by the{" "}
                      <a href="" style={{ color: "blue" }}>
                        EULA certificate
                      </a>
                      and
                      <a href="" style={{ color: "blue" }}>
                        Privacy policy
                      </a>
                      of this app.
                    </p>
                  }
                />
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="#" className="note1">
                <span style={{ color: " #212529" }}>or</span> Login to your
                account
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="login-btn" type="submit">
                SIGNUP
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  </Row>
);

export default Registration;
