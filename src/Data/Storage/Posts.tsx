import React, { createContext } from "react";
import { post, Commment } from "../../Utils/types";

interface Context {
  posts: post;
  usersPost: { [username: string]: Array<string> };
  changeLikeOf: (postID: string, like: boolean) => void;
  addPost: (postID: string, postDetails: post) => void;
  deletePostOf: (username: string) => void;
  addCommentIn: (
    postID: string,
    commentID: string,
    comment: Commment & { [subComentId: string]: Commment }
  ) => void;
  addSubCommentIn: (
    postID: string,
    commentID: string,
    subComentId: string,
    comment: Commment
  ) => void;
  deleteComment: (
    postID: string,
    commentID: string,
    subComentId: string | null
  ) => void;
}

export const store = createContext<Context | null>(null);

const Posts: React.FC = ({ children }) => {
  // const Value: Context = {};
  const Value: any = {};
  return <store.Provider value={Value}>{children}</store.Provider>;
};

export default Posts;
