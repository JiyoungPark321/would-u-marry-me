import React from 'react';
import styles from './storyListItem.module.css'

const StoryListItem = ({ data }) => {
  return (
    <div className={styles['story-list-item']}>
      <div className={styles['img-container']}>
        <img className={styles['img']} src={data.img} />
      </div>
      <div className={styles['story-item-info']}>
        <p className={styles['story-item-title']}>{data.title}</p>
        <div className={styles['button-container']}>
          <div className={styles['edit-title-button']}>
            <i className="fas fa-pencil-alt"></i>
          </div>
          <div className={styles['delete-button']}>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryListItem;