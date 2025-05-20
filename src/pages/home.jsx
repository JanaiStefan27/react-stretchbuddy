import styles from "./home.module.css";
import React from "react";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to Sport Warm Up</h1>
      <p>This app helps you warm up for basketball, handball, and tennis.</p>
    </div>
  );
};

export default Home;
