import React from "react";

const ExerciseThumbnails = ({ exercises, currentIndex, setIndex }) => (
  <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
    {exercises.map((item, i) => (
      <div key={i} className="text-center">
        <img
          src={item.poster || item.image}
          alt={`ex-${i}`}
          onClick={() => setIndex(i)}
          style={{
            width: currentIndex === i ? 95 : 80,
            height: currentIndex === i ? 95 : 80,
            borderRadius: "10px",
            objectFit: "cover",
            border: currentIndex === i ? "3px solid #0d6efd" : "2px solid #aaa",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
          }}
        />
        {currentIndex === i && (
          <div className="mt-1 fw-semibold small text-nowrap">{item.label}</div>
        )}
      </div>
    ))}
  </div>
);

export default ExerciseThumbnails;
