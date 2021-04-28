import React from 'react';
import WeddingTemplate from '../components/weddingTemplate/weddingTemplate1'
import WeddingTemplate2 from '../components/weddingTemplate/weddingTemplate2'
import WeddingTemplate3 from '../components/weddingTemplate/weddingTemplate3'
import styles from './jaehyuk.module.css'
const Jaehyuk = () => {
  return (
    <>
    <div className={styles.backgournd_color}>
      <WeddingTemplate></WeddingTemplate>
      <WeddingTemplate2></WeddingTemplate2>
      <WeddingTemplate3></WeddingTemplate3>
    </div>
    </>
  );
}

export default Jaehyuk;