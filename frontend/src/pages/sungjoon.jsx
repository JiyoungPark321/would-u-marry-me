import React, { useState } from "react";
import StoryTemplate1 from "../components/storyTemplate/storyTemplate1";
import StoryTemplate2 from "../components/storyTemplate/storyTemplate2";
import StoryTemplate3 from "../components/storyTemplate/storyTemplate3";
import StoryTemplate4 from "../components/storyTemplate/storyTemplate4";
import StoryTemplate5 from "../components/storyTemplate/storyTemplate5";
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
      {/* <StoryTemplate2></StoryTemplate2> */}
      {/* <StoryTemplate3></StoryTemplate3> */}
      <StoryTemplate4></StoryTemplate4>
      {/* <StoryTemplate5></StoryTemplate5> */}
      {/* 여기까지가 storyTemplate */}
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
