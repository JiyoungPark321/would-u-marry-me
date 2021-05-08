import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import styles from './storyList.module.css'
import StoryListItem from './storyListItem';

const StoryListData = [
  {
    id: 1,
    img: "https://picsum.photos/486/228",
    title: "일재혁 💘 이재혁 ㅎ하하하하하하하하하하하하하"
  },
  {
    id: 2,
    img: "https://picsum.photos/486/229",
    title: "오재혁 💢 삼재혁"
  },
  {
    id: 3,
    img: "https://picsum.photos/486/230",
    title: "일재혁 💘 이재혁"
  },
  {
    id: 4,
    img: "https://picsum.photos/486/231",
    title: "오재혁 💢 삼재혁"
  },
  {
    id: 5,
    img: "https://picsum.photos/486/232",
    title: "일재혁 💘 이재혁"
  },
  // {
  //   id: 6,
  //   img: "https://picsum.photos/486/233",
  //   title: "오재혁 💢 삼재혁"
  // },
]

const StoryList = () => {

  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    api.get('storyboard/getList', {
      headers: {Authorization: localStorage.getItem("jwt"),}
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  },[])


  const startNewStoryBoard = () => {
    api.post('storyboard', {
      storyboardTitle: newTitle
    },
    {
      headers: {Authorization: localStorage.getItem("jwt"),}
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
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
        StoryListData.map((data) => {
          return (
            <StoryListItem 
              data={data} 
              key={data.id}
            />
          )
        })
      }
    </div>
  );
};

export default StoryList;