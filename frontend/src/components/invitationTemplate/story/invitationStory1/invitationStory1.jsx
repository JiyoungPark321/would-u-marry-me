import React, { useEffect } from "react";
import styles from "./invitationStory1.module.css";

const InvitationStory1 = ({ setModalState, modalData }) => {

  useEffect(() => {
    console.log(modalData);
  },[])

  return (
    <div className={styles['invitation-story1']}>
      <button 
        className={styles['cancel-button']}
        onClick={() => {setModalState(false)}}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className={styles['row-container']}>
        <div className={styles['image1-container']}>
          <img 
            src={modalData.images[0].imgUrl} 
            alt="" 
            className={styles.image1}
          />
        </div>
        <div className={styles['text1-container']}>
          <pre>{modalData.comments[0].value}</pre>
        </div>
      </div>
      <div className={styles['row-container']}>
        <div className={styles['text2-container']}>
          <pre>{modalData.comments[1].value}</pre>
        </div>
        <div className={styles['image2-container']}>
          <img 
            src={modalData.images[1].imgUrl} 
            alt="" 
            className={styles.image2}
          />
        </div>
      </div>
    </div>
  );
};
export default InvitationStory1;
