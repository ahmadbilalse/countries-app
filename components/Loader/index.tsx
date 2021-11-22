import React from "react";
import styles from "./style.module.css";

export default function index() {
  return (
    <div className={styles.spinner}>
      <div className={styles.bounce1 + " bg-light-onPrimary dark:bg-onPrimary"}></div>
      <div className={styles.bounce2 + " bg-light-onPrimary dark:bg-onPrimary"}></div>
      <div className={styles.bounce3 + " bg-light-onPrimary dark:bg-onPrimary"}></div>
    </div>
  );
}
