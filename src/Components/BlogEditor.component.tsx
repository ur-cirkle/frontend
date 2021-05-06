import React, { useState, Dispatch, SetStateAction } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const editorConfiguration = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "strikethrough",
      "underline",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "alignment",
      "|",
      "blockQuote",
      "codeBlock",
      "code",
      "link",
      "|",
      "undo",
      "redo",
      "|",
      "fontColor",
      "fontSize",
      "fontFamily",
      "fontBackgroundColor",
      "|",
      "superscript",
      "subscript",
      "|",
      "specialCharacters",
    ],
  },
  language: "en",
  licenseKey: "",
  placeholder: "Start Typing",
};
export interface BlogEditorProps {
  blog: string;
  setBlog: Dispatch<SetStateAction<string>>;
  charCount: number;
  setCharCount: Dispatch<SetStateAction<number>>;
}

const BlogEditor: React.FC<BlogEditorProps> = ({
  blog,
  setBlog,
  charCount,
  setCharCount,
}) => {
  return (
    <div className="">
      <CKEditor
        editor={Editor}
        data={blog}
        config={editorConfiguration}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          setCharCount(editor.plugins.get("WordCount").characters);
          setBlog(data);
        }}
      />
      <p style={{ color: charCount > 20000 ? "red" : "black" }}>
        Characters : {charCount}
      </p>
    </div>
  );
};

export default BlogEditor;
