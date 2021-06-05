import React, { Dispatch, SetStateAction } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import "../AddBlog/BlogEditorStyle.css";

export interface BlogEditorProps {
  blog: string;
  setBlog: Dispatch<SetStateAction<string>>;
  wordCount: number;
  setWordCount: Dispatch<SetStateAction<number>>;
  heading: string;
  setHeading: Dispatch<SetStateAction<string>>;
}

const BlogEditor: React.FC<BlogEditorProps> = ({
  blog,
  setBlog,
  heading,
  setHeading,
  wordCount,
  setWordCount,
}) => {
  const getUsers = (query: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios({
          method: "get",
          url: "https://localhost:5000/mention/username",
        });
      }, 100);
    });
  };
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
      mention: {
        user: [
          {
            marker: "@",
            feed: getUsers,
          },
        ],
      },
    },
    language: "en",
    licenseKey: "",
    placeholder: "Start Typing",
  };

  return (
    <div className="">
      <input
        type="text"
        value={heading}
        onChange={({ target }) => setHeading(target.value)}
      />
      <CKEditor
        editor={Editor}
        data={blog}
        config={editorConfiguration}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          setWordCount(editor.plugins.get("WordCount").words);
          setBlog(data);
        }}
      />
      <p style={{ color: wordCount > 2000 ? "red" : "black" }}>
        Characters : {wordCount}
      </p>
    </div>
  );
};

export default BlogEditor;
