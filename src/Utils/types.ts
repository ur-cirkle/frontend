export interface APIcall<D> {
  (
    details: D,
    setLoading: (e: boolean) => void,
    success: (resBody: any) => void,
    fail: (resBody: any) => void,
    error: (err: any) => void
  ): void;
}
export interface BasicFild<T = string> {
  value: T;
  error: null | string;
  changeTo: (val: T) => void;
}
export interface Profile {
  avater: string;
  connectionCount: number;
  comunityCount: number;
  connection: Array<{ username: string; avatar: string }>;
  comunity: Array<{ username: string; avater: string }>;
  bio: string;
  posts: Array<string> | null;
  birthday: string;
  intrestTag: Array<string>;
}
export interface Commment {
  username: string;
  avatar: string;
  comment: string;
}
interface Blocked {
  avatar: string; //(url),
  username: string;
  avability: false;
}
interface BasicPostParams {
  avatar: string; //(url),
  username: string;
  avability: boolean;
  tag: Array<[string, string, string]>; // [...["tag", "bg-colour", "font-colour"]]
  likeCount: number;
  commentCount: number;
  likedUsers: Array<{
    usernme: string;
    avatar: string; // url
  }>;
  comments: {
    [commentID: string]: Commment & {
      subComments: { [subComentId: string]: Commment };
    };
  };
  myLike: boolean;
}
interface pic {
  type: "pic";
  discription: string; // 314 char,
  images: Array<string>; // (url)max: 3
}
interface blog {
  type: "blog";
  blog: string;
}
export interface post {
  [postId: string]: (BasicPostParams & (pic | blog)) | Blocked;
}
