import React from "react";
import "./CustomAlert.css";

const CustomAlert = ({ message, onClose }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <span>{message}</span>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default CustomAlert;
