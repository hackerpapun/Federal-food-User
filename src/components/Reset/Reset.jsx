import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Modal, Form, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import forgotPassword from "../../config/redux/slices/authSlice";
import "./Reset.css";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

const Reset = ({ show, handleClose, handleShowLogin }) => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (success) {
      handleClose();
    }
  }, [success, handleClose]);

  const onSubmit = (data) => {
    dispatch(forgotPassword(data.email));
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="resetpage">
      <Modal.Header closeButton>
        <Modal.Title className="reset">Reset Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <p className="error-message">{error}</p>}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className={errors.email ? "is-invalid" : ""}
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
              <Button className="submit-btn" type="submit" disabled={loading}>
                {loading ? (
                  <Spinner animation="border" size="sm" />
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
