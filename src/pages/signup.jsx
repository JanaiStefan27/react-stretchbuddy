import React from "react";
import styles from "./signup.module.css";

const Signup = () => {
  return (
    <div className={styles.signup}>
      <h2>Create an Account</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
