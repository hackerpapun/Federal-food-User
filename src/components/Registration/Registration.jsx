import React, { useState } from "react";
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
  FormCheck,
  Spinner,
} from "react-bootstrap";
import "./Registration.css";

// Zod schema for validation
const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  mobileNumber: z.string().regex(/^\d{10}$/, "Invalid mobile number"),
  referralCode: z.string().optional(),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
});

const Registration = ({ show, handleClose, handleShowLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true); 
    console.log("Registration Data:", data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false); 
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="loginpage">
      <Modal.Header closeButton>
        <Modal.Title className="tsignup">Sign Up</Modal.Title>
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
          <Row>
            <Col>
              <FormCheck
                type="checkbox"
                className={errors.agree ? "is-invalid" : ""}
                {...register("agree")}
                label={
                  <p className="note">
                    By clicking on the I agree button click, download or if you
                    use the Application, you <br />
                    agree to be bound by the{" "}
                    <a href="#" style={{ color: "blue" }}>
                      EULA certificate
                    </a>{" "}
                    and{" "}
                    <a href="#" style={{ color: "blue" }}>
                      Privacy policy
                    </a>{" "}
                    of this app.
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
              <Button className="login-btn" type="submit" disabled={loading}>
                {loading ? (
                  <>
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
                    
                  </>
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
