import React from "react";
import styles from "./invitationWedding2.module.css";


const InvitationWedding2 = ({ setModalState, modalData }) => {

  return (
    <div className={styles['invitation-wedding2']}>
      <button 
        className={styles['cancel-button']}
        onClick={() => {setModalState(false)}}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className={styles['section1']}>
        <span className={styles['intro-letters']}>INVITATION</span>
        <div className={styles["heart-icon"]}>
          <i className="fas fa-heart"></i>
        </div>
        <div className={styles['text1-container']}>

        </div> 
        <div className={styles.date}>

        </div>
        <div className={styles.time}>

        </div>
        <div className={styles.place}>

        </div>
      </div>
      <div className={styles['section2']}>
        <span className={styles['intro-letters']}>LOCATION</span>
        <div className={styles["heart-icon"]}>
          <i className="fas fa-heart"></i>
        </div>
        <div className={styles.map}>

        </div>
        <span className={styles['intro-letters']}>ACCESS</span>
        <div className={styles["heart-icon"]}>
          <i className="fas fa-heart"></i>
        </div>
        <div className={styles['text2-container']}>

        </div>
      </div>
    </div>
  );
};

export default InvitationWedding2;
