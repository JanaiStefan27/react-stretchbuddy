import React from "react";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <h2>Warm-Up Videos</h2>
      <ul>
        <li>Basketball</li>
        <li>Handball</li>
        <li>Tennis</li>
      </ul>
    </div>
  );
};

export default Services;
