import React, { useState } from "react";
import "./Payment.css"; // Import the CSS file

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

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

  return (
    <div className="payment-container">
      <h3>Payment</h3>
      {paymentMethods.map((method, index) => (
        <div
          key={index}
          className="payment-option"
          onClick={() => setSelectedMethod(method)}
        >
          <input
            type="radio"
            name="payment"
            value={method}
            id={method}
            className="hidden-radio"
          />
          <label htmlFor={method} className="custom-radio-label">
            <span className="custom-radio">
              {selectedMethod === method && <span className="radio-dot"></span>}
            </span>
            {method}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Payment;
