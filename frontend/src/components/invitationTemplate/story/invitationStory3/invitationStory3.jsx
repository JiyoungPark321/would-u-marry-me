import React from "react";
import styles from "./invitationStory3.module.css";

const InvitationStory3 = ({ setModalState, modalData }) => {

  return (
    <div 
      className={styles['invitation-story3']}
      onClick={() => {setModalState(false)}}
    >
      <button className={styles['cancel-button']}>
        <i className="fas fa-times"></i>
      </button>
      <div className={styles['text1-container']}>
        <pre>{modalData.comments[0].value}</pre>
      </div>
      <div className={styles['image1-container']}>
        <img 
          src={modalData.images[0].imgUrl} 
          alt="" 
          className={styles.image1}
        />
      </div>
      <div className={styles['image2-container']}>
        <img 
          src={modalData.images[1].imgUrl} 
          alt="" 
          className={styles.image2}
        />
      </div>
      <div className={styles['image3-container']}>
        <img 
          src={modalData.images[2].imgUrl} 
          alt="" 
          className={styles.image3}
        />
      </div>
    </div>
  );
};

export default InvitationStory3;
