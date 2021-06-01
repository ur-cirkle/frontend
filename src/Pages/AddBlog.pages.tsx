import React, { useEffect, useContext, useState } from "react";
import BlogEditor from "../Components/AddBlog/BlogEditor.component";
import { UserContext } from "../Contexts/UserContext";
import io from "socket.io-client";
let socket: any;
export interface AddBlogProps {}

const AddBlog: React.FC<AddBlogProps> = () => {
  const { user } = useContext(UserContext);
  const [blog, setBlog] = useState("");
  const [heading, setHeading] = useState("");
  const [wordCount, setWordCount] = useState(0);
  useEffect(() => {
    socket = io("127.0.0.1:3003", { transports: ["websocket"] });
  }, []);
  useEffect(() => {
    socket.emit("user_connection", {
      userid: user.userid,
      currentPosition: "Add Blog",
    });
  }, [user]);
  const createBlog = () => {
    if (wordCount > 2000 || wordCount === 0) return;
    socket.emit("add-blog", {
      userid: user.userid,
      blog,
    });
  };
  return (
    <div className="">
      <h1>New Blog</h1>
      <BlogEditor
        blog={blog}
        setBlog={setBlog}
        heading={heading}
        setHeading={setHeading}
        wordCount={wordCount}
        setWordCount={setWordCount}
      />
      <button onClick={createBlog}>Create</button>
    </div>
  );
};

export default AddBlog;
