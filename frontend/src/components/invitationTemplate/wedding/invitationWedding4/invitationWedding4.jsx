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
          <pre>{modalData.firstComment}</pre>
        </div>
        <span className={styles['thanks']}>감사합니다.</span>
        <span className={styles['groom']}>신랑</span>
        <div className={styles['groom-phone-number-container']}>
          <pre>{modalData.manPhone}</pre>
        </div>
        <div className={styles['groom-account-number-container']}>
          <pre>{modalData.manAccountNumber}</pre>
        </div>
        <span className={styles['bride']}>신부</span>
        <div className={styles['bride-phone-number-container']}>
          <pre>{modalData.womanPhone}</pre>
        </div>
        <div className={styles['bride-account-number-container']}>
          <pre>{modalData.womanAccountNumber}</pre>
        </div>
      </div>
      <div className={styles['section2']}>
        <div className={styles['text2-container']}>
          <pre>{modalData.secondComment}</pre>
        </div>
        <div className={styles['image1-container']}>       
        {
          modalData.weddingCardImage.imgUrl
          ?  
          <img 
            src={modalData.weddingCardImage.imgUrl} 
            alt="" 
            className={styles.image1}
          />
          :
          <></>
        }
        </div>
        <div className={styles['date-and-time']}>
          <pre className={styles.date}>{modalData.date}</pre>
          <pre>{modalData.time}</pre>
        </div>
        <div className={styles.place}>
          <pre>{modalData.place}</pre>
        </div>
      </div>
    </div>
  );
};

export default InvitationWedding4;
