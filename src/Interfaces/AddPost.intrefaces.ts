export interface filterState {
  value: string;
  type: string;
}
export type state = [
  {
    original: string;
    edited: string;
    currentEditing: string;
  },
  {
    original: string;
    edited: string;
    currentEditing: string;
  },
  {
    original: string;
    edited: string;
    currentEditing: string;
  },
  {
    original: string;
    edited: string;
    currentEditing: string;
  },
  {
    original: string;
    edited: string;
    currentEditing: string;
  }
];
export interface PostForm {
  caption: string;
  interests: Array<string>;
  connections: string[];
  location: string;
}
