import React, { useRef, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";

const AvatarUploader = () => {
  const inputRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("Utilizator");

  useEffect(() => {
    const saved = localStorage.getItem("avatar");
    if (saved) setAvatar(saved);

    const user = auth.currentUser;
    if (user?.displayName) setName(user.displayName);
  }, []);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("avatar", reader.result);
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="d-flex align-items-center gap-3">
      <div
        onClick={handleClick}
        className="rounded-circle"
        style={{
          width: 80,
          height: 80,
          backgroundColor: "#ccc",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        {avatar && (
          <img
            src={avatar}
            alt="avatar"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="d-none"
        onChange={handleChange}
      />
      <div className="fw-semibold">{name}</div>
    </div>
  );
};

export default AvatarUploader;
