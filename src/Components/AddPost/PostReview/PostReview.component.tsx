import React, { useState } from "react";
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
