import React from "react";
import styles from "./invitationStory1.module.css";

const InvitationStory1 = () => {

  return (
    <div className={styles['invitation-story1']}>
      <button className={styles['cancel-button']}>
        <i className="fas fa-times"></i>
      </button>
      <div className={styles['row-container']}>
        <div className={styles['image1-container']}>
          <img src="" alt="" />
        </div>
        <div className={styles['text1-container']}>

        </div>
      </div>
      <div className={styles['row-container']}>
        <div className={styles['text2-container']}>
        
        </div>
        <div className={styles['image2-container']}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
export default InvitationStory1;
