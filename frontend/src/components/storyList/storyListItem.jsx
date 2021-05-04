import React, { useState } from 'react';
import styles from './storyListItem.module.css'

const StoryListItem = ({ data }) => {
  const [titleEditMode, setTitleEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState('');


  const saveTitle = () => {
    setTitleEditMode(!titleEditMode);
  };

  const goEditMode = () => {
    setTitleEditMode(!titleEditMode);
  }


  return (
    <div className={styles['story-list-item']}>
      <div className={styles['img-container']}>
        <img className={styles['img']} src={data.img} />
      </div>
      <div className={`${styles['story-item-info']} ${!titleEditMode && styles['edit-mode-state']}`}>
        <input
          className={styles['title-edit-input']}
          type="text"
          minLength="1"
          maxLength="25"
          onChange={(e) => {setNewTitle(e.target.value);}}
        />
        <div className={styles['button-container']}>
          <div 
            className={styles['save-title-button']}
            onClick={saveTitle}
          >
            <i className="fas fa-save"></i>
          </div>
          <div className={styles['cancel-button']}>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
      <div className={`${styles['story-item-info']} ${titleEditMode && styles['edit-mode-state']}`}>
        <p className={styles['story-item-title']}>{data.title}</p>
        <div className={styles['button-container']}>
          <div 
            className={styles['button-container']}
          >
            <div
              className={styles['edit-title-button']}
              onClick={goEditMode}
            >
              <i className="fas fa-pencil-alt"></i>
            </div>
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