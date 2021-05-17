import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styles from "./textEditor.module.css";
const TextEditor = () => {
  return (
    <div className={styles.textEditor}>
      <CKEditor
        editor={ClassicEditor}
        data=""
        onInit={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      ></CKEditor>
      {/* <form action="">
        <textarea name="editor1" id="editor1" cols="30" rows="30"></textarea>
      </form> */}
      <button className={styles["submit-button"]}>submit</button>
    </div>
  );
};
export default TextEditor;
