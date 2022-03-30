import React from "react";
import styles from "./styles.module.scss";

const CenterParagraph = ({ titleText, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{titleText}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default CenterParagraph;
