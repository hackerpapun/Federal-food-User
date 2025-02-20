import React from "react";
import { Container } from "react-bootstrap";

const Contactus = () => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col sm={8} className="heading">
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
            <Col md={6} sm={12} className="datapart">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactus;
