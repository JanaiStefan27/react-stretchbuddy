// login.jsx - cu spinner + redirect către profil
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useTheme } from "../context/themecontext";
import styles from "./signup.module.css";

const Login = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Simulăm timp de încărcare cu spinner (ex: 2 secunde)
      setTimeout(() => {
        setLoading(false);
        navigate("/profile");
      }, 2000);
    } catch (err) {
      setErrorMessage("Email sau parolă incorecte.");
      setLoading(false);
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
          <button type="submit" className={styles.button}>
            Autentificare
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
