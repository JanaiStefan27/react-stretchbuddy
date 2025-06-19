import React from "react";
import AvatarUploader from "./avataruploader";

const Sidebar = ({ active, setActive }) => {
  const menu = [
    { key: "overview", label: "📊 Prezentare generală" },
    { key: "routine", label: "🔁 Rutina mea" },
    { key: "events", label: "📅 Evenimente" },
    { key: "settings", label: "⚙️ Setări" }, // combinat
  ];

  return (
    <div className="p-3 border-end" style={{ minHeight: "100vh" }}>
      <div className="mb-4">
        <AvatarUploader />
      </div>
      <div className="list-group">
        {menu.map((item) => (
          <button
            key={item.key}
            className={`list-group-item list-group-item-action ${
              active === item.key ? "active" : ""
            }`}
            onClick={() => setActive(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
