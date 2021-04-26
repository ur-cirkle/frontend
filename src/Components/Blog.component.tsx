import React, { Dispatch, SetStateAction, useState } from "react";
import { BlogProps } from "../Interfaces/Feed.interfaces";
interface BlogCProps {
  blog: BlogProps;
  blogRef?: React.RefCallback<HTMLDivElement>;
}
const Blog: React.FC<BlogCProps> = ({ blog, blogRef }) => {
  const [expland, setExpand]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);
  return (
    <div className="blog" ref={blogRef}>
      <h3>{blog.title}</h3>
      <button onClick={() => setExpand((prevExpand) => !prevExpand)}>
        {expland ? "See Less" : "See More"}
      </button>
      <p>Author : {blog.author}</p>
      <p>{!expland ? `${blog.content.slice(0, 300)}...` : blog.content}</p>
    </div>
  );
};

export default Blog;
