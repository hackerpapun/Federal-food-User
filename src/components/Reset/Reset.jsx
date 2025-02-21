import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Modal, Form, Row, Col, Spinner } from "react-bootstrap";
import "./Reset.css";

// Zod Schema for validation
const schema = z.object({
  email: z.string().email("Invalid email address"),
});

const Reset = ({ show, handleClose, handleShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading]=
    useState(false);

  const onSubmit = async (data) => {
    setLoading(true); 
    console.log("Reset Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false); 
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="resetpage">
      <Modal.Header closeButton>
        <Modal.Title className="reset">Reset Password</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className={`text1 ${errors.email ? "is-invalid" : ""}`}
                  {...register("email")}
                />
                {errors.email && (
                  <div className="error-message">{errors.email.message}</div>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="#" className="note1" onClick={handleShowLogin}>
                <span style={{ color: " #212529" }}>or</span> login to your
                account
              </a>
            </Col>
          </Row>
          <Row
            className="text-center"
            style={{
              borderBottom: "1px solid #ced4da",
              justifyContent: "center",
              display: "flex",
            }}
          ></Row>
          <Row>
            <Col>
              <Button className="submit-btn" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner
                      animation="border"
                      size="sm"
                      style={{
                        marginRight: "5px",
                        width: "1.5rem",
                        height: "1.5rem",
                      }} 
                    />
                  </>
                ) : (
                  "SEND OTP"
                )}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Reset;
