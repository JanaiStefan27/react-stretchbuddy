import React, { useState } from "react";
import styles from "./signup.module.css";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/themecontext";

const Login = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Autentificare reușită! Vei fi redirecționat.");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setMessage("Eroare: " + error.message);
    }
  };

  return (
    <div className={`${styles.signup} ${theme}`}>
      <h2 className={styles.title}>Autentificare</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parolă"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
