import React from "react";

const SportSelectCard = ({ sport, isSelected, onSelect }) => {
  const { icon, name, image } = sport;

  return (
    <div
      className={`card h-100 shadow-sm ${isSelected ? "border-primary" : ""}`}
    >
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{ height: 200, objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">
          {icon} {name}
        </h5>
        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => onSelect(sport)}
        >
          {isSelected ? "Selectat" : "Selectează"}
        </button>
      </div>
    </div>
  );
};

export default SportSelectCard;
