import React from "react";

const ExerciseCard = ({ title, videoSrc, description }) => {
  return (
    <div
      className="card h-100 shadow exercise-card"
      style={{ transition: "transform 0.2s" }}
    >
      <video
        controls
        className="card-img-top"
        style={{ height: "250px", objectFit: "cover" }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <button className="btn btn-primary mt-3 w-100">Vezi mai mult</button>
      </div>
    </div>
  );
};

export default ExerciseCard;
