import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Modal, Form, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice"; 
import "./Login.css";

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

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(loginUser(data));
      if (loginUser.fulfilled.match(resultAction)) {
        console.log("✅ Login successful:", resultAction.payload);
        handleClose();
      } else {
        console.error("❌ Login failed:", resultAction.payload);
      }
    } catch (err) {
      console.error("⚠️ Unexpected error:", err);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="error-message">{error}</div>}
        {user && <div className="success-message">Welcome, {user.name}!</div>}
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
                onClick={(e) => {
                  e.preventDefault();
                  handleShowForgotPassword();
                }}
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
                onClick={(e) => {
                  e.preventDefault();
                  handleShowRegistration();
                }}
              >
                Create an account
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="login-btn" type="submit" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "Login"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

Login.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleShowRegistration: PropTypes.func.isRequired,
  handleShowForgotPassword: PropTypes.func.isRequired,
};

export default Login;
