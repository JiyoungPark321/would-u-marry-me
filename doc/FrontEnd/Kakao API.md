# Kakao API

## 카카오맵 사용법(for Web)

### 프로젝트 생성

1. 카카오 개발자사이트 (https://developers.kakao.com/) 접속

   ![카카오 개발자사이트](https://user-images.githubusercontent.com/58461395/117920767-7225a480-b32a-11eb-9cfa-abd5899644d5.png)

   > 시작하기 클릭
   >
   > 카카오 계정으로 로그인

2. 개발자 등록 및 앱 생성

   ![앱생성](https://user-images.githubusercontent.com/58461395/117920781-7c47a300-b32a-11eb-8fb8-a12e78b3bc80.png)

   > Click

   ![앱생성2](https://user-images.githubusercontent.com/58461395/117920800-849fde00-b32a-11eb-9852-8ece328e99a5.png)

   > 추가하기

3.  플랫폼 설정

   - 생성 앱을 클릭해서 들어오면 다음과 같은 화면이 나옵니다.

   ![플랫폼 설정](https://user-images.githubusercontent.com/58461395/117920829-95e8ea80-b32a-11eb-8fbe-fe81e83cdff2.png)

   > 플랫폼 설정하기 클릭
   > 상단의 JavaScript 키를 사용할 것입니다.

   - 플랫폼 설정화면

   ![플랫폼](https://user-images.githubusercontent.com/58461395/117920848-a13c1600-b32a-11eb-9697-b6e9befe2a42.png)

   > Web 플랫폼 등록 클릭

   - Web 플랫폼 등록

   ![web플랫폼](https://user-images.githubusercontent.com/58461395/117920866-ae590500-b32a-11eb-82fc-51c32636a719.png)

   > 사이트 도메인을 예시에 따라 등록해주세요.

### API key 사용하기 in React

> https://apis.map.kakao.com/ 사이트 접속!

- JavaScript API 불러오기

```html
<!-- 실제 지도를 불러오는 라이브러리 불러오기 -->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."></script>
```

![index](https://user-images.githubusercontent.com/58461395/117920883-b4e77c80-b32a-11eb-8e9c-23b259f98330.png)

><head> 부분에 추가!

- 라이브러리 사용하기(기존 지도를 불러오는 라이브러리에 한줄로 합쳐서 사용해주세요.)

  ```html
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=LIBRARY"></script>
  ```

  > 라이브러리는 추가로 불러서 사용해야 합니다. 아래와 같이 파라미터에 추가하여 로드합니다.

  - clusterer : 마커를 클러스터링 할 수 있는 *[클러스터러](https://apis.map.kakao.com/web/documentation/#MarkerClusterer)* 라이브러리 입니다.

  ```html
  <!-- clusterer 라이브러리 불러오기 -->
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=clusterer"></script>
  ```

  - services : *[장소 검색](https://apis.map.kakao.com/web/documentation/#services_Places)* 과 *[주소-좌표 변환](https://apis.map.kakao.com/web/documentation/#services_Geocoder)* 을 할 수 있는 *[services](https://apis.map.kakao.com/web/documentation/#services)* 라이브러리 입니다.

  ```html
  <!-- services 라이브러리 불러오기 -->
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=services"></script>
  ```

  - drawing : 지도 위에 마커와 그래픽스 객체를 쉽게 그릴 수 있게 그리기 모드를 지원하는 *[drawing](https://apis.map.kakao.com/web/documentation/#drawing)* 라이브러리 입니다.

  ```html
  <!-- drawing 라이브러리 불러오기 -->
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=drawing"></script>
  ```

- 라이브러리 여러개 사용하기

  ```html
  <!-- services와 clusterer, drawing 라이브러리 불러오기 -->
  <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=services,clusterer,drawing"></script>
  ```

  

