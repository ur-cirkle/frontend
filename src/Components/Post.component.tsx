import React, { useState, SetStateAction, Dispatch } from "react";
import { PostProps } from "../Interfaces/Feed.interfaces";
export interface PostFProps {
  post: PostProps;
  postRef?: React.RefCallback<HTMLDivElement>;
}

const Post: React.FC<PostFProps> = ({ post, postRef }) => {
  const [expland, setExpand]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);
  return (
    <div className="post" ref={postRef}>
      <img src={post.url} alt="" className="post_img" />
      {post.description.length >= 200 && (
        <button
          className="post_ex_btn"
          onClick={() => setExpand((prevExpand) => !prevExpand)}
        >
          {expland ? "See Less" : "See More"}
        </button>
      )}
      <p className="post_caption">
        {!expland || post.description.length >= 200
          ? `${post.description.slice(0, 200)}...`
          : post.description}
      </p>
    </div>
  );
};

export default Post;
