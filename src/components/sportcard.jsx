import React from "react";
import { useNavigate } from "react-router-dom";
import "./sportcard.css";

const SportCard = ({ title, image, path }) => {
  const navigate = useNavigate();

  return (
    <div className="sport-card" onClick={() => navigate(path)}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default SportCard;
