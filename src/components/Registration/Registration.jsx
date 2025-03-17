import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  Modal,
  Form,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Spinner,
  Alert,
} from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import UserController from "../../config/controller/UserController";
import "./Registration.css";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  mobileNumber: z.string().regex(/^\d{10}$/, "Invalid mobile number"),
  referralCode: z.string().optional(),
  role: z.string().min(1, "Please select a role"),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
});

const Registration = ({ show, handleClose, handleShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setApiError(null);
    setSuccessMessage(null);

    try {
      await UserController.registerUser({ ...data, role: selectedRole });
      setSuccessMessage("Registration successful! Redirecting to login...");
      setTimeout(() => {
        reset();
        handleClose();
        handleShowLogin();
      }, 2000);
    } catch (error) {
      setApiError(error?.message || "Registration failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="loginpage">
      <Modal.Header closeButton>
        <Modal.Title className="tsignup">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {apiError && <Alert variant="danger">{apiError}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}

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

          {/* Password Field */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className={`text1 ${errors.password ? "is-invalid" : ""}`}
                  {...register("password")}
                />
                {errors.password && (
                  <div className="error-message">{errors.password.message}</div>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* First Name */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  className={`text1 ${errors.firstName ? "is-invalid" : ""}`}
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <div className="error-message">
                    {errors.firstName.message}
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Last Name */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  className={`text1 ${errors.lastName ? "is-invalid" : ""}`}
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <div className="error-message">{errors.lastName.message}</div>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Mobile Number */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="tel"
                  placeholder="Mobile Number"
                  className={`text1 ${errors.mobileNumber ? "is-invalid" : ""}`}
                  {...register("mobileNumber")}
                />
                {errors.mobileNumber && (
                  <div className="error-message">
                    {errors.mobileNumber.message}
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Role Dropdown */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Select Role:</Form.Label>
                <Dropdown
                  onSelect={(role) => setSelectedRole(role)}
                  className="Roll"
                >
                  <DropdownButton
                    variant="secondary"
                    title={
                      selectedRole
                        ? selectedRole.charAt(0).toUpperCase() +
                          selectedRole.slice(1)
                        : "Select Role"
                    }
                    id="role-dropdown"
                    className="custom-dropdown-button"
                  >
                    {["admin", "user", "seller"].map((role) => (
                      <Dropdown.Item key={role} eventKey={role}>
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </Dropdown>
                {errors.role && (
                  <div className="error-message">{errors.role.message}</div>
                )}
              </Form.Group>
            </Col>
          </Row>

          {/* Referral Code Field */}
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Referral Code (Optional)"
                  className="text1"
                  {...register("referralCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Terms and Conditions Checkbox */}
          <Row>
            <Col>
              <Form.Check
                type="checkbox"
                className={errors.agree ? "is-invalid" : ""}
                {...register("agree")}
                label={
                  <p className="note">
                    By clicking on the I agree button, you accept our{" "}
                    <a href="#" style={{ color: "blue" }}>
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="#" style={{ color: "blue" }}>
                      Privacy Policy
                    </a>
                    .
                  </p>
                }
              />
              {errors.agree && (
                <div className="error-message">{errors.agree.message}</div>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <a href="#" className="note1" onClick={handleShowLogin}>
                <span style={{ color: " #212529" }}>or</span> Login to your
                account
              </a>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              <Button className="login-btn" type="submit" disabled={loading}>
                {loading ? (
                  <Spinner
                    animation="border"
                    size="sm"
                    role="status"
                    style={{
                      marginRight: "5px",
                      width: "1.5rem",
                      height: "1.5rem",
                    }}
                  />
                ) : (
                  "SIGNUP"
                )}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Registration;
