import React, { useState } from "react";
import StoryTemplate1 from "../components/storyTemplate/storyTemplate1/storyTemplate1";
import StoryTemplate2 from "../components/storyTemplate/storyTemplate2/storyTemplate2";
import StoryTemplate3 from "../components/storyTemplate/storyTemplate3/storyTemplate3";
import StoryTemplate4 from "../components/storyTemplate/storyTemplate4/storyTemplate4";
import StoryTemplate5 from "../components/storyTemplate/storyTemplate5/storyTemplate5";
import WeddingTemplate1 from "../components/weddingTemplate/weddingTemplate1/weddingTemplate1.jsx";
import WeddingTemplate2 from "../components/weddingTemplate/weddingTemplate2/weddingTemplate2.jsx";
import WeddingTemplate3 from "../components/weddingTemplate/weddingTemplate3/weddingTemplate3.jsx";
import WeddingTemplate4 from "../components/weddingTemplate/weddingTemplate4/weddingTemplate4.jsx";
import styles from "./sungjoon.module.css";

const Sungjoon = () => {
  const [pageIndex, moveRight] = useState(0);
  // console.log(pageIndex);
  return (
    <div className={styles["backgournd-color"]}>
      {/* <div className={styles["menu-btn-box"]}>
        <i class="fas fa-th"></i>
      </div> */}
      {/* <StoryTemplate1></StoryTemplate1> */}
      <StoryTemplate2></StoryTemplate2>
      {/* <StoryTemplate3></StoryTemplate3> */}
      {/* <StoryTemplate4></StoryTemplate4> */}
      {/* <StoryTemplate5></StoryTemplate5> */}
      {/* 여기까지가 storyTemplate */}
      {/* <WeddingTemplate1></WeddingTemplate1> */}
      {/* <WeddingTemplate2></WeddingTemplate2> */}
      {/* <WeddingTemplate3></WeddingTemplate3> */}
      {/* <WeddingTemplate4></WeddingTemplate4> */}
      {/* <div className={styles["move-left"]}> */}
      {/* <i class="fas fa-arrow-circle-left"></i> */}
      {/* </div> */}
      {/* <div className={styles["move-right"]}> */}
      {/* <i class="fas fa-arrow-circle-right"></i> */}
      {/* </div> */}
    </div>
  );
};

export default Sungjoon;
