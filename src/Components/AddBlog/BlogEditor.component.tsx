import React, { Dispatch, SetStateAction } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";

<<<<<<< HEAD
const editorConfiguration = {
  toolbar: {
    items: [
      "bulletedList",
      "numberedList",
      "|",
      "outdent",
      "indent",
      "|",
      "undo",
      "redo",
      "superscript",
      "subscript",
      "strikethrough",
      "specialCharacters",
      "link",
      "|",
      "fontColor",
      "fontSize",
      "alignment",
      "bold",
      "underline",
      "italic",
      "horizontalLine",
    ],
    link: {
      defaultProtocol: "https://",
      decorators: {
        addTargetToExternalLinks: {
          mode: "automatic",
          callback: (url: string) => /^(https?:)?\/\//.test(url),
          attributes: {
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
        openInNewTab: {
          mode: "manual",
          label: "Open in a new tab",
          attributes: {
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
      },
    },
  },
  language: "en",
  licenseKey: "",
  placeholder: "Start Typing",
};
=======
>>>>>>> 6a4bb8e60a9feffc9dffdbc0306c92701e89c400
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
<<<<<<< HEAD
          setCharCount(editor.plugins.get("WordCount").words);
          console.log(
            editor,

            data
          );
=======
          setWordCount(editor.plugins.get("WordCount").words);
>>>>>>> 6a4bb8e60a9feffc9dffdbc0306c92701e89c400
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
