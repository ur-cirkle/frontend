import { APIcall, Commment } from "../../Utils/types";

interface Basic {
  authToken: string;
  postID: string;
}

interface LikePost extends Basic {
  like: boolean;
}

interface CommentPost extends Basic {
  comment: string;
  comentID: string | null;
}

interface DeleteComment extends Basic {
  commentID: string;
  subCommentID: string | null;
}

interface GetCommentDetails extends Basic {
  data: {
    [commentID: string]: Commment & { [subCommentID: string]: Commment };
  };
}

export const getPost: APIcall<Basic> = () => {};

export const likePost: APIcall<LikePost> = () => {};

export const commentPost: APIcall<CommentPost> = () => {};

export const deleteComment: APIcall<DeleteComment> = () => {};

export const deletePost: APIcall<Basic> = () => {};

export const getMoreComments: APIcall<GetCommentDetails> = () => {};
