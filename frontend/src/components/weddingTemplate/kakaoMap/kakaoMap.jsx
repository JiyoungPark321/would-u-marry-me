import React, { useState } from 'react';
import styles from './kakaoMap.module.css'
import { useEffect } from 'react';

const { kakao } = window;
const KakaoMap = (props) => {
  const {searchPlace} = props
  var mapInfo = props.mapInfo
  var mapExist = props.mapExist
  useEffect(() => {
    if (mapExist === undefined) {
      var mapContainer = document.getElementById('myMap'), // 지도를 표시할 div
      mapOption = { 
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
      };
      if (searchPlace) {
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchPlace, placesSearchCB);
      }
      function placesSearchCB(data, status) {
        if (status === kakao.maps.services.Status.OK) {
          let bounds = new kakao.maps.LatLngBounds();
          // console.log(data)
          for (let i = 0; i < data.length; i++) {
            // console.log(data[i])
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          map.setBounds(bounds);
        }
      }
      var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
      var infowindow = new kakao.maps.InfoWindow({
        removable : iwRemoveable
      });
      function displayMarker(place) {
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
          clickable: true 
        });
        kakao.maps.event.addListener(marker, 'click', function() {
          // 마커 위에 인포윈도우를 표시합니다
          infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
          infowindow.open (map, marker);
          var info = {
            name : place.place_name,
            y : place.y,
            x : place.x,
          }
          getSearchInfo(info)
        });
      }
      var map = new kakao.maps.Map(mapContainer,  mapOption); // 지도를 생성합니다
    }
    else {
      var mapContainer = document.getElementById('myMap'), // 지도를 표시할 div
      mapOption = { 
          center: new kakao.maps.LatLng(mapInfo.y, mapInfo.x), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
      };
      var map = new kakao.maps.Map(mapContainer,  mapOption); // 지도를 생성합니다
      var markerPosition  = new kakao.maps.LatLng(mapInfo.y, mapInfo.x); 
      var marker = new kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);
    }

  }, [searchPlace]);
  const getSearchInfo = (info) => {
    props.getSearchInfo(info)
  }
return (
  <>
    { mapExist=== undefined
    ?
    <div id='myMap' className={styles['map']}></div>
    :
    <div id='myMap'  className={styles['map-searched']}></div>
    // <div   className={styles['map-searched']}>dddd</div>
    // <div id='myMap' style="width:100%;height:100%;" className={styles['map-searched']}></div>
    }
  </>
);
}

export default KakaoMap;