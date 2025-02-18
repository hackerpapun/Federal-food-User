import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import "./Login.css";

// Zod Schema for validation
const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Login = ({
  show,
  handleClose,
  handleShowRegistration,
  handleShowForgotPassword,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="loginpage">
      <Modal.Header className="closebtn" closeButton></Modal.Header>
      <Modal.Title className="tlogin">Login</Modal.Title>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className={`form-input ${errors.email ? "is-invalid" : ""}`}
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
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className={`form-input ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  {...register("password")}
                />
                {errors.password && (
                  <div className="error-message">{errors.password.message}</div>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href="#"
                className="forgot-password"
                onClick={handleShowForgotPassword}
              >
                Forgot Password?
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href="#"
                className="create-account"
                onClick={handleShowRegistration}
              >
                <span style={{ color: "#212529" }}>or</span> Create an account
              </a>
            </Col>
          </Row>
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
  );
};

export default Login;
