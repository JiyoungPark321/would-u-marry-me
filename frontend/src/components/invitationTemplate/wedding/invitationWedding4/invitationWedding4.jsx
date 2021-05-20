import React from "react";
import styles from "./invitationWedding4.module.css";


const InvitationWedding4  = ({ setModalState, modalData }) => {

  return (
    <div className={styles['invitation-wedding4']}>
      <button 
        className={styles['cancel-button']}
        onClick={() => {setModalState(false)}}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className={styles['section1']}>
        <div className={styles['text1-container']}>

        </div>
        <span className={styles['thanks']}>감사합니다.</span>
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
      </div>
      <div className={styles['section2']}>
        <div className={styles['text2-container']}>

        </div>
        <div className={styles['image1-container']}>       
        
        </div>
        <div className={styles['date-and-time']}>

        </div>
        <div className={styles.place}>

        </div>
      </div>
    </div>
  );
};

export default InvitationWedding4;
