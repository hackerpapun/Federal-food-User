import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";
import "./Contactus.css";
import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaPrint } from "react-icons/fa6";

const Contactus = () => {
  return (
    <Container>
      <Row className="justify-content-md-left justify-content-lg-left d-flex">
        <Col md={8} sm={12} className="heading text-left">
          <h4>Contact Us</h4>
          <Row
            className="text-center"
            style={{
              borderBottom: "1px solid #ced4da",
              justifyContent: "center",
              display: "flex",
            }}
          ></Row>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} sm={12}>
          <Form>
            <FormGroup className="mb-3 text3">
              <FormControl type="text" placeholder="Full Name" required />
            </FormGroup>
            <FormGroup className="mb-3 text3">
              <FormControl type="email" placeholder="Email ID" required />
            </FormGroup>
            <FormGroup className="mb-3 text3">
              <FormControl
                as="textarea"
                rows={4}
                placeholder="Write Message.."
              />
            </FormGroup>
            <Button type="submit" className="submitbtn">
              SUBMIT
            </Button>
          </Form>
        </Col>

        <Col md={6} sm={12} className="iconadd">
          <p>
            <IoMdHome size={20} className="icon" />
            Akshya Nagar 1st Block, 1st Cross, Ramamurthy Nagar,Bangalore -
            560016
          </p>
          <p>
            <IoMdHome size={20} className="icon" />
            Bangalore-India-560016
          </p>

          <p>
            <MdEmail size={20} className="icon" />
            info@initappz.com
          </p>
          <p>
            <FaPhone size={17} className="icon" />
            9426585554
          </p>
          <p>
            <FaPrint size={20} className="icon" />
            info@initappz.com
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactus;
