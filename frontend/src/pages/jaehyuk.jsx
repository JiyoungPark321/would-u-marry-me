import React from 'react';
import StoryTemplate1 from '../components/storyTemplate/storyTemplate1'
import StoryTemplate2 from '../components/storyTemplate/storyTemplate2'
import StoryTemplate3 from '../components/storyTemplate/storyTemplate3'
import WeddingTemplate1 from '../components/weddingTemplate/weddingTemplate1'
import styles from './jaehyuk.module.css'
const Jaehyuk = () => {
  return (
    <>
    <div className={styles['backgournd-color']}>
      {/* <StoryTemplate1></StoryTemplate1>
      <StoryTemplate2></StoryTemplate2>
      <StoryTemplate3></StoryTemplate3> */}
      <WeddingTemplate1></WeddingTemplate1>
    </div>
    </>
  );
}

export default Jaehyuk;