import React from "react";
import KakaoMap from "../../../weddingTemplate/kakaoMap/kakaoMap";
import styles from "./invitationWedding1.module.css";

const InvitationWedding1 = ({ setModalState, modalData }) => {
  
  return (
    <div className={styles['invitation-wedding1']}>
      <button 
        className={styles['cancel-button']}
        onClick={() => {setModalState(false)}}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className={styles['section1']}>
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
      </div>
      <div className={styles['section2']}>
        <div className={styles.date}>
          <pre>{modalData.date}</pre>
        </div>
        <div className={styles['text1-container']}>
          <pre>{modalData.firstComment}</pre>
        </div>
        <div className={styles.time}>
          <pre>{modalData.time}</pre>
        </div>
        <div className={styles.place}>
          <pre>{modalData.place}</pre>
        </div>
        <div className={styles.map}>
          {
            modalData.weddingCardMap
            ?
            <KakaoMap
              readLocation={modalData.weddingCardMap}
            ></KakaoMap>
            :
            <></>
          }
        </div>
        <div className={styles['text2-container']}>
          <pre>{modalData.secondComment}</pre>
        </div>
      </div>
    </div>
  );
};

export default InvitationWedding1;
