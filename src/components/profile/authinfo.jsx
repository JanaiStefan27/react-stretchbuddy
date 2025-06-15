import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const AuthInfo = () => {
  const user = auth.currentUser;
  const [status, setStatus] = useState(null);

  const handlePasswordReset = async () => {
    if (!user?.email) return;

    try {
      await sendPasswordResetEmail(auth, user.email);
      setStatus("Un email de resetare a parolei a fost trimis.");
    } catch (error) {
      console.error("Eroare la resetarea parolei:", error.message);
      setStatus("A apărut o eroare. Încearcă din nou.");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm" style={{ maxWidth: 500 }}>
      <h4 className="fw-bold mb-3 text-primary">Date de autentificare</h4>

      <p className="mb-3 fw-semibold" style={{ color: "#000" }}>
        Email: <span style={{ color: "#000" }}>{user?.email || "—"}</span>
      </p>

      <button className="btn btn-primary mb-2" onClick={handlePasswordReset}>
        Schimbă parola
      </button>

      {status && (
        <div className="alert alert-info mt-2 py-2 px-3">{status}</div>
      )}
    </div>
  );
};

export default AuthInfo;
