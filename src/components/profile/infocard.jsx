import React from "react";

const InfoCard = ({ label, value, color = "primary" }) => {
  return (
    <div className="p-4 rounded shadow-sm bg-dark text-light h-100 d-flex flex-column justify-content-center align-items-center">
      <div className="fw-semibold mb-2">{label}</div>
      <div className={`fw-bold fs-5 text-${color}`}>{value}</div>
    </div>
  );
};

export default InfoCard;
