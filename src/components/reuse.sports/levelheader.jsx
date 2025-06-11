import React from "react";

const LevelHeader = ({ sportIcon, sportName, level, levelTitle }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h4 className="fw-bold">
        {sportIcon} {sportName}
      </h4>
      <h5 className="text-center w-100 text-uppercase">
        Nivelul {level} – {levelTitle}
      </h5>
    </div>
  );
};

export default LevelHeader;
