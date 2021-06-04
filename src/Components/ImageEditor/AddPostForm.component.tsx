import React, { useReducer } from "react";
 import { PostForm } from "../../Interfaces/AddPost.interfaces";
export interface AddPostFormProps {}

const AddPostForm: React.SFC<AddPostFormProps> = () => {
  const postContentReducer = (
    state:PostForm,
    action: {
      type: "caption" | "interests" | "connections" | "location";
      payLoadValue: string;
      group: "STRING" | "ARRAY ADD" | "ARRAY DELETE";
    }
  ):PostForm => {
    const { type, payLoadValue, group } = action;
    switch (group) {
      case "STRING":
        return { ...state, [type]: payLoadValue };
      case "ARRAY ADD": {
        if (type === "caption" || type === "location") return state;
        const arr = state[type];
        arr.push(payLoadValue);
        return { ...state, [type]: arr };
      }
      case "ARRAY DELETE": {
        if (type !== "interests") return state;
        const arr = state[type];
        const index = arr.indexOf(payLoadValue);
        arr.splice(index, 1);
        return { ...state, [type]: arr };
      }
      default:
        return state;
    }
  };
  const [postContent, setPostContent] = useReducer(postContentReducer, {
    caption: "",
    interests: [],
    connections: [],
    location: "",
  });
  return (
    <div className="">
      <textarea name="" id="" placeholder="Share what’s on your mind...">
        {postContent.caption}
      </textarea>
      <h2>Add interest tags</h2>
      <div className="">
        <div className="suggestion" contentEditable>
          hello
        </div>
        <button>Add Custom</button>
      </div>
      <h2>Tag connections</h2>
      <label htmlFor="tag_connections">
        Tap on the picture to tag connections
      </label>
      <input
        type="text"
        id="tag_connection"
        onChange={({ target }) =>
          setPostContent({
            type: "connections",
            payLoadValue: "string",
            group: "STRING",
          })
        }
      />
      <h2>Add Location</h2>
      <input
        type="text"
        value={postContent.location}
        onChange={({ target }) =>
          setPostContent({
            type: "location",
            payLoadValue: target.value,
            group: "STRING",
          })
        }
      />
    </div>
  );
};

export default AddPostForm;
