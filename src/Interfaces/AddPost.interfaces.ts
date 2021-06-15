//* Filter State Interface
export interface filterState {
  value: string;
  type: filterType | "TINT";
}
export type filterType =
  | "SEPIA"
  | "BLUR"
  | "INVERT"
  | "CONTRAST"
  | "SATURATION"
  | "HUE_ROTATE"
  | "GRAYSCALE"
  | "NONE" ;
//* Image Object Interface
export interface image {
  original: string;
  edited: string;
  currentEditing: string;
  autoSave: string;
  autoRotate: string;
  backup: string;
}
//* Image Object Array Interface
export type images = [image, image, image, image, image];
//* Image Object Array useReducer Action Interface
export interface imagesReducerAction {
  type:
    | "ORIGINAL"
    | "EDITED"
    | "CURRENT_EDITING"
    | "AUTO_SAVE"
    | "AUTO_ROTATE"
    | "BACKUP"
    | "RESET"|"CLEAR_EDITING";
  payLoadValue: string;
  index: number;
}
export interface PostForm {
  caption: string;
  interests: Array<string>;
  connections: string[];
  location: string;
}
//* React-easy-crop pakage crop Object
export interface cropObj {
  unit?: any;
  width?: number | undefined;
  height?: number | undefined;
  aspect?: any;
  x?: number | undefined;
  y?: number | undefined;
}
//* Props needed For Croping Image
export interface cropPropObj {
  cropX: number;
  cropY: number;
  scaleX: number;
  scaleY: number;
  width: number;
  height: number;
}
