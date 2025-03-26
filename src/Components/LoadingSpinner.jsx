import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner m-auto w-100 h-100">
      <i className="fa-solid fa-jedi fa-2xl fa-spin"></i>
    </div>
  );
};

export default LoadingSpinner;
