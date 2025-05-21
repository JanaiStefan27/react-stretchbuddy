import React from "react";
import SportCardList from "../components/sportcardlist";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <h2>Warm-Up Videos</h2>
      <SportCardList />
    </div>
  );
};

export default Services;
