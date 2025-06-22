import React from "react";
import { useTheme } from "../../context/themecontext";

const RoutineListItem = ({ item, onStart, onDelete, onToggleDone }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`d-flex justify-content-between align-items-center profile-content-box mb-2 ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="d-flex align-items-center gap-3">
        <img
          src={item.poster || item.image}
          alt={item.title}
          style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 8 }}
        />
        <div className="fw-semibold m-0">{item.title}</div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-sm btn-primary" onClick={onStart}>
          Start
        </button>
        <button className="btn btn-sm btn-danger" onClick={onDelete}>
          Șterge
        </button>
        <input
          type="checkbox"
          checked={item.done}
          onChange={onToggleDone}
          style={{ transform: "scale(1.3)" }}
        />
      </div>
    </div>
  );
};

export default RoutineListItem;
