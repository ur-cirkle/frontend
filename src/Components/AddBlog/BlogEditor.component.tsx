import React, { useState, Dispatch, SetStateAction } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

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
          setCharCount(editor.plugins.get("WordCount").words);
          console.log(
            editor,

            data
          );
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
