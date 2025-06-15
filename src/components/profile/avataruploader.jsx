import React, { useState, useRef, useEffect } from "react";
import { auth } from "../../firebase/firebase";

const AvatarUploader = () => {
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || null);
  const fileInputRef = useRef(null);
  const userName = auth.currentUser?.displayName || "Utilizator";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("avatar", reader.result);
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    localStorage.removeItem("avatar");
    setAvatar(null);
  };

  return (
    <>
      <div className="d-flex align-items-center gap-3 mb-3">
        <div
          data-bs-toggle="modal"
          data-bs-target="#avatarModal"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            overflow: "hidden",
            cursor: "pointer",
            backgroundColor: "#ccc",
            flexShrink: 0,
          }}
        >
          {avatar ? (
            <img
              src={avatar}
              alt="avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div className="bg-secondary d-flex align-items-center justify-content-center text-white h-100 w-100">
              <span style={{ fontSize: "2rem" }}>👤</span>
            </div>
          )}
        </div>

        <div className="fw-bold fs-5">{userName}</div>
      </div>

      {/* MODAL */}
      <div
        className="modal fade"
        id="avatarModal"
        tabIndex="-1"
        aria-labelledby="avatarModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="avatarModalLabel">
                Gestionare avatar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {avatar ? (
                <>
                  <img
                    src={avatar}
                    alt="avatar-preview"
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: 120, height: 120, objectFit: "cover" }}
                  />
                  <div className="d-flex justify-content-center gap-3">
                    <button
                      className="btn btn-primary"
                      onClick={() => fileInputRef.current.click()}
                    >
                      Schimbă imaginea
                    </button>
                    <button className="btn btn-danger" onClick={handleRemove}>
                      Șterge imaginea
                    </button>
                  </div>
                </>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => fileInputRef.current.click()}
                >
                  Încarcă imaginea
                </button>
              )}

              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarUploader;
