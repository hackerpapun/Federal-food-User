import React from "react";
import { Container, Row, Col, FormControl, FormGroup, Form, Button } from "react-bootstrap";
import "./Contactus.css"
import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";

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
              <IoMdHome style={{ color: "#7fad39" }} />
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016
            </p>
            <p>
              <IoMdHome style={{ color: "#7fad39" }} />
              Bangalore - India - 560016
            </p>
            <p>
              <MdEmail style={{ color: "#7fad39" }} />
              info@initappz.com
            </p>
            <p>
              <FaPhone style={{ color: "#7fad39" }} />
              9426585554
            </p>
            <p>
              <FaPrint style={{ color: "#7fad39" }} />
              info@initappz.com
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactus;
