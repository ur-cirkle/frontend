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
  const [currentMode , setCurrentMode] = useState<"BlogEditor"|"ReviewBlog">("BlogEditor")
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
    console.log("dsfljldsj")
    if (wordCount > 2000 || wordCount === 0) return;
    socket.emit("add-blog", {
      userid: user.userid,
      blog,
      header: heading,
      interesttag: ["Sumaargiri", "bakloli", "whatching pk"],
      username: user.username,
      taggedUser:["dsjdasljfdsa","dsafdjlfsa","dsfdssadkjl"]
    });
  };
  const onDaftSave = () => {
    alert("Saved")
  }
  return (
    <div className="">
      <h1>{currentMode === "BlogEditor" ?"Write a blog":"Review your blog"}</h1>
      <button onClick={onDaftSave}>Save To Daft</button>
      <button onClick={createBlog}>Publish</button>
      {currentMode === "BlogEditor" ? <BlogEditor
        blog={blog}
        setBlog={setBlog}
        heading={heading}
        setHeading={setHeading}
        wordCount={wordCount}
        setWordCount={setWordCount}
      /> : null}
      currentMode
    </div>
  );
};

export default AddBlog;
