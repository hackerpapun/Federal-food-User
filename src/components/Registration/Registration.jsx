import React from 'react'
import { Modal, Col, Form, Button, Row, FormControl, FormCheck, FormGroup, DropdownButton, Dropdown } from "react-bootstrap";
import  "./Registration.css"

const Registration = () => {
  return (
    <Modal show={Registration} onHide={Registration} className="signuppage">
      <Modal.Header>
        <Modal.Title className="w-100 text-center">
          <h3 className="heading">Signup</h3>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="h-100">
        <Form className="formbody">
          <Row className="mb-3">
            <Col sm={12}>
              <Form.Control
                className="allplaceholder"
                type="email"
                placeholder="Email"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={12}>
              <Form.Control
                className="allplaceholder"
                type="password"
                placeholder="Password"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={12}>
              <Form.Control
                className="allplaceholder"
                type="text"
                placeholder="First Name"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={12}>
              <Form.Control
                className="allplaceholder"
                type="text"
                placeholder="Last Name"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={4}>
              <DropdownButton id="dropdown-basic-button" title="country">
                <Dropdown.Item href="#/action-1">India</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Japan</Dropdown.Item>
                <Dropdown.Item href="#/action-3">UK</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Italy</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Iran</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Kuwait</Dropdown.Item>
                <Dropdown.Item href="#/action-7">Maxcau</Dropdown.Item>
                <Dropdown.Item href="#/action-8">Maldives</Dropdown.Item>
                <Dropdown.Item href="#/action-9">Norway</Dropdown.Item>
                <Dropdown.Item href="#/action-10">Poland</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm={8}>
              <Form.Control
                className="allplaceholder"
                type="tel"
                placeholder="Mobile Number"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={12}>
              <Form.Control
                className="allplaceholder"
                type="text"
                placeholder="Referral Code (Optional)"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FormCheck
                type="checkbox"
                label={
                  <p className="note">
                    By clicking on the I agree button click, download or if you
                    use the Application, you agree to be bound by the{" "}
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
          <Row className="text-center ">
            <Col>
              <a href="#" className="text4 ">
                or <span style={{ color: "red" }}>Login to your account</span>
              </a>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer
        className="text-center"
        style={{
          borderBottom: "1px solid #ced4da ",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button className="loginbtn" type="submit">
          SIGNUP
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Registration