import React from "react";
import "../index.css";

const ExerciseCard = ({ title, description, image, link }) => {
  return (
    <div
      className="card exercise-card border-0 shadow-sm"
      style={{
        width: "100%",
        height: "1000px",
        borderRadius: "24px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{
          height: "650px",
          objectFit: "cover",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
        }}
      />
      <div
        className="card-body text-center d-flex flex-column justify-content-start"
        style={{ padding: "2.5rem", flexGrow: 1 }}
      >
        <h5 className="card-title fs-2 mb-3">{title}</h5>
        <p className="card-text fs-5 mb-4">{description}</p>
        <div className="mt-auto">
          <a href={link} className="btn btn-primary btn-lg">
            Vezi exercițiile
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
