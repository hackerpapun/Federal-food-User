import React from "react";
import { Container, Row, Col, FormControl, FormGroup, Form, Button } from "react-bootstrap";
import "./Contactus.css"
import { IoMdHome } from "react-icons/io";

const Contactus = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6} sm={12} className="heading">
          <h4>Contact US</h4>
          <Row
            className="text-center"
            style={{
              borderBottom: "1px solid #ced4da",
              justifyContent: "center",
              display: "flex",
            }}
          ></Row>

          <Row>
            <Col md={6} className="datapart">
              <Form>
                <FormGroup className="mb-3 text3">
                  <FormControl type="text" placeholder="Full Name" />
                </FormGroup>
                <FormGroup className="mb-3 text3">
                  <FormControl type="email" placeholder="Email Id" />
                </FormGroup>
                <FormGroup className="mb-3 text3">
                  <FormControl
                    as="textarea"
                    rows={3}
                    placeholder="Write Message.."
                  />
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit" className="submitbtn">
                Submit
              </Button>
            </Col>
          </Row>
          <Col md={6} className="iconadd">
            <p>
              <IoMdHome />
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactus;
