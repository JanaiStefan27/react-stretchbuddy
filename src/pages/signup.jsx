// signup.jsx - include nume + prenume + titluri vizibile în dark mode + salvare displayName
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useTheme } from "../context/themecontext";
import styles from "./signup.module.css";

const Signup = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const passwordRules = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = () => {
    return Object.values(passwordRules).every(Boolean);
  };

  const isFormValid = () => {
    return (
      validateEmail(email) &&
      validatePassword() &&
      password === confirmPassword &&
      firstName.trim() !== "" &&
      lastName.trim() !== ""
    );
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!validateEmail(email)) {
      setErrorMessage("Email invalid.");
      return;
    }

    if (!validatePassword()) {
      setErrorMessage("Parola nu îndeplinește cerințele.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Parolele nu coincid.");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(result.user, {
        displayName: `${firstName} ${lastName}`,
      });
      await auth.signOut();
      setSuccessMessage("✅ Înregistrare reușită!");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (err) {
      setErrorMessage("A apărut o eroare la înregistrare.");
    }
  };

  return (
    <div className={`${styles.wrapper} ${theme}`}>
      <form onSubmit={handleSignup} className={styles.formBox}>
        <h2 className={styles.heading}>Creează un cont nou</h2>

        <label className={styles.label}>E-MAIL ADDRESS*</label>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>NUME*</label>
        <input
          type="text"
          placeholder="Prenume"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>PRENUME*</label>
        <input
          type="text"
          placeholder="Nume"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.input}
          required
        />

        <label className={styles.label}>PAROLĂ*</label>
        <input
          type="password"
          placeholder="Parolă dorită"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <ul className={styles.hints}>
          <li className={passwordRules.upper ? styles.valid : ""}>
            Cel puțin o literă mare
          </li>
          <li className={passwordRules.lower ? styles.valid : ""}>
            Cel puțin o literă mică
          </li>
          <li className={passwordRules.number ? styles.valid : ""}>
            Cel puțin un număr
          </li>
          <li className={passwordRules.symbol ? styles.valid : ""}>
            Cel puțin un simbol (!@#...)
          </li>
          <li className={passwordRules.length ? styles.valid : ""}>
            Minim 8 caractere
          </li>
        </ul>

        <label className={styles.label}>CONFIRMĂ PAROLA*</label>
        <input
          type="password"
          placeholder="Confirmă parola"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.input}
          required
        />

        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        {successMessage && (
          <div className={styles.success}>{successMessage}</div>
        )}

        <button
          type="submit"
          className={styles.button}
          disabled={!isFormValid()}
        >
          Continuă
        </button>
      </form>
    </div>
  );
};

export default Signup;
