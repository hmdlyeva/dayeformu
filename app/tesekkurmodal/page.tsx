import React from "react";
import styles from "./tesekkur.module.scss";

type ThankYouModalProps = {
  onClose: () => void;
};

const ThankYouModal: React.FC<ThankYouModalProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p style={{ color: "green", fontWeight: "bold" }}>Təşəkkür edirik!</p>
        <button className={styles.button} onClick={onClose}>Bağla</button>
      </div>
    </div>
  );
};

export default ThankYouModal;
