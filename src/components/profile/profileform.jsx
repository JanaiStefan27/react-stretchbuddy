import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";

const ProfileForm = () => {
  const displayName = auth.currentUser?.displayName || "";
  const [firstName, lastName] = displayName.split(" ");

  const stored = JSON.parse(localStorage.getItem("userProfileData")) || {};
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  useEffect(() => {
    setPhone(stored.phone || "");
    setBirthDate(stored.birthDate || "");
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      "userProfileData",
      JSON.stringify({ phone, birthDate })
    );
  };

  return (
    <>
      <h2 className="fw-bold mb-4" style={{ color: "#000" }}>
        Date personale
      </h2>

      <div className="bg-white p-4 rounded shadow-sm" style={{ maxWidth: 600 }}>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label fw-semibold" style={{ color: "#000" }}>
              Prenume
            </label>
            <input
              type="text"
              className="form-control"
              style={{ backgroundColor: "#f1f3f5", color: "#000" }}
              value={firstName || ""}
              disabled
            />
          </div>
          <div className="col">
            <label className="form-label fw-semibold" style={{ color: "#000" }}>
              Nume
            </label>
            <input
              type="text"
              className="form-control"
              style={{ backgroundColor: "#f1f3f5", color: "#000" }}
              value={lastName || ""}
              disabled
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold" style={{ color: "#000" }}>
            Număr de telefon
          </label>
          <input
            type="text"
            className="form-control"
            style={{ backgroundColor: "#fff", color: "#000" }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ex: 074..."
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold" style={{ color: "#000" }}>
            Data nașterii
          </label>
          <input
            type="date"
            className="form-control"
            style={{ backgroundColor: "#fff", color: "#000" }}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handleSave}>
          Salvează modificările
        </button>
      </div>
    </>
  );
};

export default ProfileForm;
