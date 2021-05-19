import React from "react";
import styles from "./invitationWedding1.module.css";

const InvitationWedding1 = () => {
  
  return (
    <div className={styles['invitation-wedding1']}>
      <button className={styles['cancel-button']}>
        <i className="fas fa-times"></i>
      </button>
      <div className={styles['section1']}>
        <div className={styles['image1-container']}>
        
        </div>
      </div>
      <div className={styles['section2']}>
        <div className={styles.date}>

        </div>
        <div className={styles['text1-container']}>

        </div>
        <div className={styles.time}>

        </div>
        <div className={styles.place}>

        </div>
        <div className={styles.map}>

        </div>
        <div className={styles['text2-container']}>

        </div>
      </div>
    </div>
  );
};

export default InvitationWedding1;
