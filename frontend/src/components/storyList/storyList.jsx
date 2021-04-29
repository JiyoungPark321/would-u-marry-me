import React from 'react';
import styles from './storyList.module.css'
import StoryListItem from './storyListItem';

const StoryListData = [
  {
    id: 1,
    img: "https://picsum.photos/486/228",
    title: "일재혁 💘 이재혁"
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
  return (
    <div className={styles['story-list']}>
      <div className={styles['add-story-container']}>
        <button className={styles['add-button']}>
          +
        </button>
        <input 
          className={styles['add-title']}
          placeholder="제목을 입력하세요"
        />
      </div>
      {
        StoryListData.map((data) => {
          return (
            <>
              <StoryListItem data={data} key={data.id} />
            </>
          )
        })
      }
    </div>
  );
};

export default StoryList;