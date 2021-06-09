export interface filterState {
  value: string;
  type: string;
}
export type state = [
  {
    original: string;
    edited: string;
    currentEditing: string;
    autoSave:string
    autoRotate:string
    compressed:string
  },
  {
    original: string;
    edited: string;
    currentEditing: string;
    autoSave:string
    autoRotate:string
    compressed:string
  },
  {
    original: string;
    edited: string;
    currentEditing: string;
    autoSave:string
    autoRotate:string
    compressed:string
  },
  {
    original: string;
    edited: string;
    currentEditing: string;
    autoSave:string
    autoRotate:string
    compressed:string
  },
  {
    original: string;
    edited: string;
    currentEditing: string;
    autoSave:string
    autoRotate:string
    compressed:string
  }
];
export interface PostForm {
  caption: string;
  interests: Array<string>;
  connections: string[];
  location: string;
}
