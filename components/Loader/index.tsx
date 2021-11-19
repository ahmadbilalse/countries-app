import React from "react";
import styles from "./style.module.css";

export default function index() {
  return (
    <div className={styles.spinner + " " + "text-red-500"}>
      <div className={styles.bounce1}></div>
      <div className={styles.bounce2}></div>
      <div className={styles.bounce3}></div>
    </div>
  );
}
