import React from "react";

const InfoCard = ({ label, value, icon, color = "primary" }) => {
  return (
    <div className="card shadow-sm text-center p-3 h-100">
      <h6 className="mb-1 text-muted">{label}</h6>
      <span className={`fs-5 fw-semibold text-${color}`}>
        {icon && <span className="me-1">{icon}</span>}
        {value}
      </span>
    </div>
  );
};

export default InfoCard;
