import React from "react";
import { useHistory } from "react-router";
import styles from "./completeForm.module.css";
import KakaoLinkDefault from "./KakaoLinkDefault";

//https://d3mf3wgh9v41yo.cloudfront.net/bck_kakaoShareImg.png
//https://d3mf3wgh9v41yo.cloudfront.net/bck_kakao-thumbnail.png
const CompleteForm = ({ storyBoardId }) => {
  const history = useHistory();

  const userName = localStorage.getItem("userName");
  const key = process.env.REACT_APP_KAKAO_KEY;
  const template = {
    objectType: "feed",
    content: {
      title: userName + "의 결혼식에 초대합니다.",
      description: userName + "의 청첩장입니다. 웹으로 이용해주세요!",
      imageUrl: "https://d3mf3wgh9v41yo.cloudfront.net/bck_kakaoShareImg.png",
      link: {
        mobileWebUrl: `https://wouldumarryme.com/${userName}/invitation/${storyBoardId}`,
        webUrl: `https://wouldumarryme.com/${userName}/invitation/${storyBoardId}`,
      },
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: `https://wouldumarryme.com/${userName}/invitation/${storyBoardId}`,
          webUrl: `https://wouldumarryme.com/${userName}/invitation/${storyBoardId}`,
        },
      },
    ],
  };

  const moveMyStoryBoard = () => {
    history.push(`/${userName}/storyboard`);
  };

  const moveCompletedStoryBoard = () => {
    history.push(`/${userName}/invitation/${storyBoardId}`);
  };

  return (
    <div className={styles["complete-box"]}>
      <div className={styles["buttons-area"]}>
        <div>
          <button className={styles["buttons"]} onClick={moveMyStoryBoard}>
            마이스토리보드로 이동
          </button>
        </div>
        <div>
          <button
            className={styles["buttons"]}
            onClick={moveCompletedStoryBoard}
          >
            완성본 보기
          </button>
        </div>
        <div>
          <KakaoLinkDefault
            className="template"
            template={template}
            jsKey={key}
          >
            <button className={styles["buttons"]}>카카오톡으로 공유하기</button>
          </KakaoLinkDefault>
        </div>
      </div>
    </div>
  );
};

export default CompleteForm;
