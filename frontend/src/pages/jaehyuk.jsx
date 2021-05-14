import React from "react";
import StoryTemplate1 from "../components/storyTemplate/storyTemplate1/storyTemplate1";
import StoryTemplate2 from "../components/storyTemplate/storyTemplate2/storyTemplate2";
import StoryTemplate3 from "../components/storyTemplate/storyTemplate3/storyTemplate3";
import WeddingTemplate1 from "../components/weddingTemplate/weddingTemplate1/weddingTemplate1";
import WeddingTemplate2 from "../components/weddingTemplate/weddingTemplate2/weddingTemplate2";
import WeddingTemplate3 from "../components/weddingTemplate/weddingTemplate3/weddingTemplate3";
import WeddingTemplate4 from "../components/weddingTemplate/weddingTemplate4/weddingTemplate4";
import CompleteForm from "../components/completeForm/completeForm";
import styles from "./jaehyuk.module.css";
const Jaehyuk = () => {
  return (
    <>
      <div className={styles["backgournd-color"]}>
        {/* <StoryTemplate1></StoryTemplate1> */}
        {/* <StoryTemplate2></StoryTemplate2> */}
        {/* <StoryTemplate3></StoryTemplate3> */}
        {/* <WeddingTemplate1></WeddingTemplate1> */}
        {/* <WeddingTemplate2></WeddingTemplate2> */}
        <WeddingTemplate3></WeddingTemplate3>
        {/* <WeddingTemplate4></WeddingTemplate4> */}
        {/* <CompleteForm></CompleteForm> */}
      </div>
    </>
  );
};

export default Jaehyuk;
