# Would u marry me?

![새로운 프로젝트](https://user-images.githubusercontent.com/58461395/119040818-d8788a00-b9f0-11eb-8cc1-bcf1476716e0.gif)

<br>

## Index

#### Introduction

- [What is Would u marry me?](###what is Would u marry me?)

#### Install and Usage

- [FrontEnd](###frontEnd)
- [BackEnd](###backEnd)

#### 기술 스택

- [Front End](###front-End)
- [Back End](###back-End)
- [인프라](###인프라)
- [배포 플로우](###배포-플로우)

#### 팀 소개

- [만든 사람들](###만든-사람들)

<br>

## Introduction

### What is Would u marry me?

> `Would u marry me?`를 통해 스토리텔링 중심의 청첩장을 만들어보세요.
>
> <a href="https://wouldumarryme.com/" style ="color:#FF88A5">Would u marry me 사이트 링크 (Web)</a>

 기존의 모바일 청첩장은 단순히 웨딩사진 및 식장의 위치만 담겨 무료함을 준다. Would u marry me 서비스는 신랑, 신부의 첫 만남부터 결혼식까지의 이어진 이야기를 담아낸 스토리텔링기반의 모바일 청첩장이다.

- Story Board

![프레젠테이션1](https://user-images.githubusercontent.com/58461395/119046389-999a0280-b9f7-11eb-87c4-bb5bb392fe52.jpg)

### Why Would u marry me?

1. 청첩장 생성

- 나만의 StoryBoard를 생성해 한번에 여러가지 청첩장을 구상할 수 있습니다.
- 청첩장의 배경, 음악, 캐릭터를 제공함으로서 나만의 청첩장을 꾸밀 수 있습니다.

![배경음악캐릭터](https://user-images.githubusercontent.com/58461395/119060627-8b56e100-ba0d-11eb-915b-5acc763006a4.gif)

- 총 6 Step의 story가 존재하며, 각 story마다 템플릿을 정하고 예비 신랑, 신부님의 이야기를 풀어갈 수 있습니다.

  - 5 Step의 Story 템플릿이 존재합니다.

    ![스토리템플릿neww](https://user-images.githubusercontent.com/58461395/119066551-fa870200-ba1a-11eb-9c55-8414915e5c6f.gif)

  - 1 Step의 Wedding 템플릿이 존재합니다.

    ![웨딩newnew](https://user-images.githubusercontent.com/58461395/119066712-5d789900-ba1b-11eb-9a63-2333aa3c68f2.gif)

2. 완성된 청첩장

- 선택한 배경, 음악, 캐릭터를 이용한 청첩장이 완성됩니다.

  ![완성본new](https://user-images.githubusercontent.com/58461395/119066827-9dd81700-ba1b-11eb-9259-1e211e64c755.gif)

3. 카카오톡 공유하기

- 카카오톡 공유하기를 이용해 주변사람들에게 청첩장을 공유할 수 있습니다.

![카카오톡공유](https://user-images.githubusercontent.com/58461395/119059251-eaffbd00-ba0a-11eb-9c54-207447ee7b97.gif)

<br>

## 📌Installl and Usage

### FrontEnd

- clone을 받은 뒤 frontend 폴더로 들어와  실행시킵니다. 

- Terminal 창에 필요한 패키지를 설치합니다.

  ```shell
  yarn install
  ```

- frontend app을 실행합니다.

  ```shell
  yarn start
  ```

<br>

### BackEnd

- Java (Open JDK 11) 를 설치해줍니다. 

- 환경변수 설정을 해줍니다.

- marry 폴더로 들어와  실행시킵니다. 

  >  file - settings - annotation - Enable annotation processing 체크 ✔

- main 폴더에 resources 폴더 생성해줍니다.

  > resources 폴더 안에 application.yml 넣어줍니다. 

- com.ssafy.wouldUmarryme.marry 파일의 MarryApplication파일 Run 해줍니다.

<br>

## 기술 스택

### Front End

![React](https://img.shields.io/badge/React-17.0.2-61DAFB?Style=flat&logo=React&logoColor=61DAFB)

#### **📚사용된 라이브러리   ----------------------**

![Axios](https://img.shields.io/badge/Axios-0.21.1-61DAFB?Style=flat&logo=React&logoColor=61DAFB)

![ClassNames](https://img.shields.io/badge/ClassNames-2.2.6-61DAFB?Style=flat&logo=React&logoColor=61DAFB)

<br>

### Back End

![Gradle](https://img.shields.io/badge/Gradle-6.8.3-02303A?Style=flat&logo=Gradle&logoColor=02303A)

![JAVA ](https://img.shields.io/badge/JAVA_JDK-11-007396?Style=flat&logo=Java&logoColor=007396)

![SpringBoot](https://img.shields.io/badge/SpringBoot-2.4.4-6DB33F?Style=flat&logo=Spring&logoColor=6DB33F)

![MariaDB](https://img.shields.io/badge/MariaDB(AWS_RDS)-10.4.6-61DAFB?Style=flat&logo=MariaDB&logoColor=61DAFB)

#### 📚사용된 라이브러리   ----------------------

![Lombok](https://img.shields.io/badge/Lombok-1.18.18-BC4521?Style=flat)

![spring-jpa](https://img.shields.io/badge/Spring_jpa-2.4.4-6DB33F?Style=flat&logo=Spring&logoColor=85EA2D)

![spring-validation](https://img.shields.io/badge/Spring_validation-2.4.4-6DB33F?Style=flat&logo=Spring&logoColor=85EA2D)

![Swagger](https://img.shields.io/badge/Swagger-2.9.2-85EA2D?Style=flat&logo=Swagger&logoColor=85EA2D)

![spring-security](https://img.shields.io/badge/Spring_security-2.4.4-6DB33F?Style=flat&logo=Spring&logoColor=85EA2D)

![MariaDB Java Client](https://img.shields.io/badge/MariaDB_Java_Client-2.7.2-61DAFB?Style=flat&logo=MariaDB&logoColor=61DAFB)

![java-jwt](https://img.shields.io/badge/JAVA_JWT-3.4.1-000000?Style=flat&logo=Json-Web-Tokens&logoColor=000000)

<br>

### 🌏인프라

#### ⚙️기술스택   ----------------------

![Docker](https://img.shields.io/badge/Docker-gray?Style=flat&logo=Docker&logoColor=2496ED)

![Nginx](https://img.shields.io/badge/Nginx-gray?Style=flat&logo=Nginx&logoColor=269539)

![Jenkins](https://img.shields.io/badge/Jenkins-gray?Style=flat&logo=Jenkins&logoColor=D24939)

![GitLab](https://img.shields.io/badge/GitLab-gray?Style=flat&logo=GitLab&logoColor=FCA121)

![Mattermost](https://img.shields.io/badge/Mattermost-gray?Style=flat&logo=Mattermost&logoColor=0072C6)

#### 📚사용된 라이브러리   ----------------------

![Gradle Plugin](https://img.shields.io/badge/Gradle_Plugin-1.36-C71A36?Style=flat&logo=Gradle&logoColor=C71A36)

![Node.js](https://img.shields.io/badge/Node.js-15.11.0-339933?Style=flat&logo=Node.js&logoColor=339933)

![GitLab Plugin](https://img.shields.io/badge/GitLab_Plugin-1.5.19-FCA121?Style=flat&logo=GitLab&logoColor=FCA121)

![Mattermost Notification](https://img.shields.io/badge/Mattermost_Notification-3.1.1-0072C6?Style=flat&logo=Mattermost&logoColor=0072C6)

![Publish Over SSH](https://img.shields.io/badge/Publish_Over_SSH-1.22-D24939?Style=flat&logo=Jenkins&logoColor=D24939)

<br>

#### 배포 플로우

![제목을-입력해주세요 -014 (1)](https://user-images.githubusercontent.com/58461395/119035244-52594500-b9ea-11eb-9e6c-0c4369b50f3f.png)

<br>

## 팀 소개

### 만든 사람들

| <a href="https://github.com/leesuuuuumm" style ="color:#FF88A5">숨니</a> | <a href="https://github.com/dmscjf21" style ="color:#FF88A5">AgFe</a> | <a href="https://github.com/JiyoungPark321" style ="color:#FF88A5">Young</a> | <a href="https://github.com/roywogur" style ="color:#FF88A5">NetJH</a> | <a href="https://github.com/psjoon33" style ="color:#FF88A5">SSAFY간판</a> |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![이수민 300x400px](https://user-images.githubusercontent.com/58461395/119034847-d19a4900-b9e9-11eb-9073-abf276bb680e.jpg) | ![은철](https://user-images.githubusercontent.com/58461395/119034676-8ed87100-b9e9-11eb-953a-c7edbe3c803f.jpg) | ![박지영 #40;Park Ji Young #41;](https://user-images.githubusercontent.com/58461395/119034799-bf200f80-b9e9-11eb-9aa0-36c6e3591620.jpg) | ![이재혁고객님 수정본01](https://user-images.githubusercontent.com/58461395/119034192-11acfc00-b9e9-11eb-9c9f-a156fcae4fe5.jpg) | ![박성준 증명사진](https://user-images.githubusercontent.com/58461395/119034446-491ba880-b9e9-11eb-8f29-5bae59b807d2.jpg) |
| 팀장, Back End, DevOps                                       | Back End                                                     | CTO, Front End                                               | Front End                                                    | Front End                                                    |

