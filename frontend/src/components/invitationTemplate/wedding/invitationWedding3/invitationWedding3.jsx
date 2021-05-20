import React from "react";
import styles from "./invitationWedding3.module.css";


const InvitationWedding3  = ({ setModalState, modalData }) => {

  return (
    <div className={styles['invitation-wedding3']}>
      <button 
        className={styles['cancel-button']}
        onClick={() => {setModalState(false)}}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className={styles['section1']}>
        <div className={styles['text1-container']}>

        </div>
        <div className={styles['image1-container']}>       
        
        </div>
        <div className={styles.date}>

        </div>
        
        <div className={styles.time}>

        </div>
        <div className={styles.place}>

        </div>
      </div>
      <div className={styles['section2']}>
        <div className={styles['text2-container']}>

        </div>
        <span className={styles['groom']}>신랑</span>
        <div className={styles['groom-phone-number-container']}>

        </div>
        <div className={styles['groom-account-number-container']}>

        </div>
        <span className={styles['bride']}>신부</span>
        <div className={styles['bride-phone-number-container']}>

        </div>
        <div className={styles['bride-account-number-container']}>

        </div>
        <div className={styles.map}>

        </div>
      </div>
    </div>
  );
};

export default InvitationWedding3;
