import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import styles from './storyListItem.module.css'

const StoryListItem = ({ data }) => {
  const [titleEditMode, setTitleEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState('');


  const saveTitle = () => {
    api.put('/storyboard/updateTitle', {
      storyboardId: data.id,
      title: newTitle
    },
    {
      headers: {Authorization: localStorage.getItem("jwt")}
    })
      .then((res) => {
        setTitleEditMode(!titleEditMode);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  const cancelEdit = () => {
    setTitleEditMode(!titleEditMode);
  }

  const goEditMode = () => {
    setTitleEditMode(!titleEditMode);
    setNewTitle(data.title);
  }

  const deleteStory = () => {
    // api.delete(`/storyboard/${data.id}`,
    // {
    //   headers: {Authorization: localStorage.getItem("jwt")}
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   })
  };


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
          value={newTitle}
          onChange={(e) => {setNewTitle(e.target.value);}}
        />
        <div className={styles['button-container']}>
          <div 
            className={styles['save-title-button']}
            onClick={saveTitle}
          >
            <i className="fas fa-save"></i>
          </div>
          <div 
            className={styles['cancel-button']}
            onClick={cancelEdit}
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
      <div className={`${styles['story-item-info']} ${titleEditMode && styles['edit-mode-state']}`}>
        {/* 바로 타이틀 변경이 안됨 */}
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
          <div 
            className={styles['delete-button']}
            onClick={deleteStory}
          >
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryListItem;