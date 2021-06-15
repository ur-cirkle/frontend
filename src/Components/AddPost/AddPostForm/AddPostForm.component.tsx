import React, { useReducer, useState, useEffect, useContext } from "react";
import {
  images,
  imagesReducerAction,
  PostForm,
} from "../../../Interfaces/AddPost.interfaces";
import PostReview from "../PostReview/PostReview.component";
import { UserContext } from "../../../Contexts/UserContext";
import io from "socket.io-client";
let socket: any;
export interface AddPostFormProps {
  setImg: React.Dispatch<imagesReducerAction>;
  imgs: images;
}

const AddPostForm: React.SFC<AddPostFormProps> = ({ imgs, setImg }) => {
  const [mode, setMode] = useState<"Form" | "Review">("Form");
  const { user } = useContext(UserContext);
  useEffect(() => {
    socket = io("127.0.0.1:3003", { transports: ["websocket"] });
  }, []);
  useEffect(() => {
    socket.emit("user_connection", {
      userid: user.userid,
      currentPosition: "Add Blog",
    });
  }, [user]);
  const postContentReducer = (
    state: PostForm,
    action: {
      type: "caption" | "interests" | "connections" | "location";
      payLoadValue: string;
      group: "STRING" | "ARRAY ADD" | "ARRAY DELETE";
    }
  ): PostForm => {
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
  const add_fields = () => {
    var objTo = document.getElementById("intrest");
    var divtest = document.createElement("div");
    divtest.innerHTML = '<input type="text">';

    objTo?.appendChild(divtest);
  };
  return (
    <div>
      <textarea name="" id="" placeholder="Share what’s on your mind...">
        {postContent.caption}
      </textarea>
      <h2>Add interest tags</h2>

      <div id="intrest">
        <button onClick={add_fields}>add custom</button>
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
      {mode === "Review" && (
        <PostReview
          post={{
            imgs: imgs.map((img) => img.edited),
            caption: postContent.caption,
            interests: postContent.interests,
            location: postContent.location,
            tags: postContent.connections.join(", "),
          }}
        />
      )}
      <button onClick={() => setMode("Review")}>next</button>
    </div>
  );
};

export default AddPostForm;
