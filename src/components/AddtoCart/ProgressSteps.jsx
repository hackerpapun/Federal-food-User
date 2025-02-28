import React from "react";
import { FaShoppingCart, FaClipboardCheck, FaCreditCard } from "react-icons/fa";
import "./ProgressSteps.css";

const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { icon: FaShoppingCart, label: "Your Cart" },
    { icon: FaClipboardCheck, label: "Confirm Order" },
    { icon: FaCreditCard, label: "Payment" },
  ];

  return (
    <div className="progress-container">
      {steps.map((step, index) => {
        const isActive = index + 1 === currentStep; // Current active step
        const isCompleted = index + 1 < currentStep; // Completed steps

        return (
          <div key={index} className={`step ${isActive ? "active" : ""}`}>
            <step.icon
              className={`step-icon ${
                isCompleted ? "completed" : isActive ? "active-icon" : ""
              }`}
            />
            <span className={`step-label ${isActive ? "active-text" : ""}`}>
              {step.label}
            </span>
            {index < steps.length - 1 && <div className="step-line"></div>}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSteps;
