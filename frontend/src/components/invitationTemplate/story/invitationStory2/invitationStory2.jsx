import React from "react";
import styles from "./invitationStory2.module.css";

const InvitationStory2 = ({ setModalState, modalData }) => {

  return (
    <div className={styles['invitation-story2']}>
      <button 
        className={styles['cancel-button']}
        onClick={() => {setModalState(false)}}
      >
        <i className="fas fa-times"></i>
      </button>
      <img 
        src={modalData.images[0].imgUrl}
        alt="" 
        className={styles['image1']}
      />
      <div className={styles['text1-container']}>
        <pre>{modalData.comments[0].value}</pre>
      </div>
    </div>
  );
};
export default InvitationStory2;
