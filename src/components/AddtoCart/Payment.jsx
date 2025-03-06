import React, { useEffect } from "react";
import "./Payment.css";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod } from "../../config/redux/slices/paymentSlice";

const Payment = () => {
  const dispatch = useDispatch();
  const selectedMethod = useSelector((state) => state.payment.selectedMethod);

  const paymentMethods = [
    "Proceed with COD",
    "Proceed with Stripe",
    "Proceed with PayPal",
    "Proceed with PayTM",
    "Proceed with RazorPay",
    "Proceed with InstaMOJO",
    "Proceed with PayStack",
    "Proceed with Flutterwave",
  ];

  const handlePaymentSelect = (method) => {
    dispatch(setPaymentMethod(method));
  };

  return (
    <div className="payment-container">
      <h3>Payment</h3>
      {paymentMethods.map((method, index) => (
        <div
          key={index}
          className="payment-option"
          onClick={() => handlePaymentSelect(method)}
        >
          <input
            type="radio"
            name="payment"
            value={method}
            id={method}
            className="hidden-radio"
            checked={selectedMethod === method}
            readOnly
          />
          <label htmlFor={method} className="custom-radio-label">
            <span className="custom-radio">
              {selectedMethod === method && <FaCheckCircle size={14} />}
            </span>
            {method}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Payment;
