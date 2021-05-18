import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../service/api';
import styles from './storyList.module.css'
import StoryListItem from './storyListItem';


const StoryList = () => {

  const history = useHistory();

  const [newTitle, setNewTitle] = useState('');
  const [storyListData, setStoryListData] = useState([]);


  useEffect(() => {
    api.get('/storyboard/getList', {
      headers: {Authorization: localStorage.getItem("jwt")}
    })
      .then((res) => {
        if (res.data.data) {
          setStoryListData(res.data.data);
          console.log('check', res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  },[])


  const startNewStoryBoard = () => {
    api.post('/storyboard', {
      storyBoardTitle: newTitle
    },
    {
      headers: {Authorization: localStorage.getItem("jwt")}
    })
      .then((res) => {
        const userName = localStorage.getItem("userName");
        const storyboardId = res.data.data;
        history.push(`/${userName}/storyboard/${storyboardId}`);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleSaveTitle = (data) => {
    const newStoryListData = storyListData.map((story) => {
      if (story.id === data.id) {
        return data;
      }
      return story;
    });
    setStoryListData(newStoryListData);
  };

  
  const handleDeleteStoryBoard = (data) => {
    const newStoryListData = storyListData.filter((story) => {
      return story.id !== data.id;
    });
    setStoryListData(newStoryListData);
  };
  

  return (
    <div className={styles['story-list']}>
      <div className={styles['add-story-container']}>
        <button 
          className={styles['add-button']}
          onClick={startNewStoryBoard}
        >
          <p className={newTitle && styles['add-button-blink']}>
            +
          </p>
        </button>
        <input 
          className={styles['add-title']}
          placeholder="제목을 입력하세요"
          maxLength="25"
          onChange={(e) => {setNewTitle(e.target.value);}}
        />
      </div>
      {
        storyListData.map((data) => {
          return (
            <StoryListItem 
              data={data} 
              key={data.id}
              handleSaveTitle={handleSaveTitle}
              handleDeleteStoryBoard={handleDeleteStoryBoard}
            />
          )
        })
      }
    </div>
  );
};

export default StoryList;