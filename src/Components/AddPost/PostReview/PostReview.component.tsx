import React, { useState ,useEffect, useContext} from "react";

import { UserContext } from "../../../Contexts/UserContext";
import io from "socket.io-client";
let socket: any;
export interface PostReviewProps {
  post: {
    imgs: Array<string>;
    caption: string;
    interests: Array<string>;
    tags: string;
    location: string;
  };
}
const PostReview: React.SFC<PostReviewProps> = ({ post }) => {
  
  const [index, setIndex] = useState(0);
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
  return (
    <div className="">
      <img src={post.imgs[index]} alt="" />
      {post.imgs.map((_, i) => (
        <div className="" onClick={() => setIndex(i)}>
          0
        </div>
      ))}
      <p>{post.caption}</p>
      {post.interests.map((interest) => (
        <div className="">{interest}</div>
      ))}
          <p>
              {post.tags} <span>tagged</span>
          </p>
          <p>{ post.location}</p>
    </div>
  );
};

export default PostReview;
