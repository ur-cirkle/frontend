export interface BlogProps {
  title: string;
  author: string;
  genre: string;
  content: string;
  description?: never;
  url?: never;
}
export interface PostProps {
  title: string;
  description: string;
  url: string;
  author?: never;
  genre?: never;
  context?: never;
}
