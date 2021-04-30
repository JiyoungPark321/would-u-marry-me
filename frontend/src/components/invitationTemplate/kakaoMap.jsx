import React from 'react';
// import useEffect from 'react'
import styles from './invitationTemplate1.module.css'
import { useEffect } from 'react';

const { kakao } = window;
const KakaoMap = () => {
//   const container = document.getElementById('myMap');// 지도를 담을 영역의 DOM 레퍼런스
//   const options = { // 지도를 생성할 때 필요한 기본 옵션
//     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표
//     level: 3 //지도의 레벨(확대, 축소 정도)
//   }
//   const map = new kakao.maps.Map(container, options);
//   return (
//     <div className={styles.map_box}>
//       <div id='myMap'></div>
//     </div>
//   );
// };

useEffect(() => {
  const container = document.getElementById('myMap');
const options = {
center: new kakao.maps.LatLng(33.450701, 126.570667),
level: 3
};
  const map = new kakao.maps.Map(container, options);
}, []);

return (
  <div id='myMap' style={{
      width: '500px', 
      height: '500px'
  }}></div>
);
}

export default KakaoMap;