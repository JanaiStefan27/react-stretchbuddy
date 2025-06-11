import React from "react";

const MediaDisplay = ({ ex, index, setIndex, maxIndex, hover, setHover }) => (
  <div
    className="position-relative mb-4"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  >
    {ex.video ? (
      <video
        src={ex.video}
        autoPlay
        muted
        loop
        controls
        className="w-100"
        style={{ height: 600, objectFit: "cover", borderRadius: 12 }}
      />
    ) : (
      <img
        src={ex.image}
        alt={ex.title}
        className="img-fluid"
        style={{ height: 600, width: "100%", borderRadius: 12 }}
      />
    )}

    {hover && index > 0 && (
      <div
        className="position-absolute top-50 start-0 translate-middle-y d-flex align-items-center"
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          width: 50,
          height: "60%",
          borderRadius: "0 8px 8px 0",
        }}
      >
        <button
          onClick={() => setIndex(index - 1)}
          style={{
            background: "none",
            border: "none",
            fontSize: "2.5rem",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ←
        </button>
      </div>
    )}
    {hover && index < maxIndex && (
      <div
        className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center justify-content-end"
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          width: 50,
          height: "60%",
          borderRadius: "8px 0 0 8px",
        }}
      >
        <button
          onClick={() => setIndex(index + 1)}
          style={{
            background: "none",
            border: "none",
            fontSize: "2.5rem",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          →
        </button>
      </div>
    )}
  </div>
);

export default MediaDisplay;
