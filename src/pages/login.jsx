import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useTheme } from "../context/themecontext";
import styles from "./signup.module.css";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      setTimeout(() => {
        setLoading(false);
        navigate("/profile");
      }, 2000);
    } catch (err) {
      setErrorMessage("Email sau parolă incorecte.");
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!resetEmail) {
      setResetMessage("Te rugăm să introduci un email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetMessage("Email de resetare trimis cu succes.");
    } catch (error) {
      setResetMessage("A apărut o eroare. Încearcă din nou.");
    }
  };

  return (
    <div className={`${styles.wrapper} ${theme}`}>
      <form onSubmit={handleLogin} className={styles.formBox}>
        <h2 className={styles.heading}>Autentificare</h2>

        <label className={styles.label}>EMAIL*</label>
        <input
          type="email"
          placeholder="Adresa de email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>PAROLĂ*</label>
        <input
          type="password"
          placeholder="Parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        {errorMessage && <div className={styles.error}>{errorMessage}</div>}

        {loading ? (
          <div className="text-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <button type="submit" className={styles.button}>
              Autentificare
            </button>

            <div className="text-end mt-3">
              <button
                type="button"
                className="btn btn-link p-0 text-primary text-decoration-none"
                data-bs-toggle="modal"
                data-bs-target="#resetPasswordModal"
              >
                Ai uitat parola?
              </button>
            </div>

            <div className="text-center mt-3">
              <span className="text-muted">Nu ai cont? </span>
              <a
                href="/signup"
                className="text-primary fw-bold text-decoration-none"
              >
                Alătură-te
              </a>
            </div>

            <div
              className="modal fade"
              id="resetPasswordModal"
              tabIndex="-1"
              aria-labelledby="resetPasswordModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="resetPasswordModalLabel">
                      Resetează parola
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="mb-3">
                      Pentru a primi un email de resetare a parolei, introdu
                      adresa de email.
                    </p>
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control mb-3"
                      placeholder="exemplu@email.com"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                    />

                    {resetMessage && (
                      <div className="alert alert-info py-2 px-3">
                        {resetMessage}
                      </div>
                    )}

                    <button
                      className="btn btn-primary"
                      onClick={handleResetPassword}
                    >
                      Resetează parola
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Login;
