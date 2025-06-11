import React from "react";

const ProgressBar = ({ value }) => {
  return (
    <div
      style={{
        height: "15px",
        width: "100%",
        background: "#eee",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: "#0d6efd",
          transition: "width 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;
