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
      <h2 className="fw-bold mb-4">Date personale</h2>

      <div className="profile-content-box" style={{ maxWidth: 600 }}>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label fw-semibold">Prenume</label>
            <input
              type="text"
              className="form-control"
              value={firstName || ""}
              disabled
            />
          </div>
          <div className="col">
            <label className="form-label fw-semibold">Nume</label>
            <input
              type="text"
              className="form-control"
              value={lastName || ""}
              disabled
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Număr de telefon</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ex: 074..."
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Data nașterii</label>
          <input
            type="date"
            className="form-control"
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
