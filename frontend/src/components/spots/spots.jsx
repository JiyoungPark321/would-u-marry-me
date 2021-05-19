import React, { useEffect, useRef } from 'react';
import styles from './spots.module.css';
import SpotsNotice from './spotsNotice';

const Spots = ({ storiesData, weddingData, x, setX, setModalState, modalState }) => {

  const spotsSlider = useRef(null);
  
  useEffect(() => {
    console.log(storiesData);
    console.log(weddingData);
    console.log(spotsSlider.current.style.left);
    spotsSlider.current.style.left = `${12 - (x / 2)}rem`;
  },[])


  return (
    <div className={styles['spots-container']}>
      <div 
        className={styles['spots-slider']}
        ref={spotsSlider}
        style={{
          left: `${12 - (x / 2)}rem`,
        }}
      >
        {/* <SpotsNotice /> */}
        {
          storiesData.map(story => {
            return (
              <div className={styles['spot-container']}>
                <SpotsNotice 
                  setModalState={setModalState}
                  modalState={modalState}
                />
                <img 
                  src={story.spot.imgUrl} 
                  alt=""
                  className={styles['spot-img']}
                />
              </div>
            )}
          )
        }
        <div className={styles['spot-container']}>
          <SpotsNotice 
            setModalState={setModalState}
            modalState={modalState}
          />
          <img 
            src={weddingData.spot.imgUrl} 
            alt="" 
            className={styles['spot-img']}  
          />
        </div>
      </div>
    </div>
  );
};

export default Spots;