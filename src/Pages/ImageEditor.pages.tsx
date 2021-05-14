import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  SetStateAction,
  Dispatch,
  useReducer,
} from "react";
import Crop from "../Components/ImageEditor/Crop.components";
import Filter from "../Components/ImageEditor/Filter.components";
import ImageUpload from "../Components/ImageEditor/ImageUpload.components";
import { hextoRGB } from "../Utils/Color.utils";
export interface ImageEditorProps {}

export interface cropProp {
  unit?: any;
  width?: number | undefined;
  height?: number | undefined;
  aspect?: any;
  x?: number | undefined;
  y?: number | undefined;
}
const ImageEditor: React.FC<ImageEditorProps> = () => {
  const [currentEditing, setCurrentEditing] = useState("Image Upload");
  const imgsReducer = (
    state: {
      original: string;
      edited: string;
      currentEditing: string;
    },
    action: { type: string; payLoadValue: string }
  ): {
    original: string;
    edited: string;
    currentEditing: string;
  } => {
    switch (action.type) {
      case "ORIGINAL":
        return { ...state, original: action.payLoadValue };
      case "EDITED":
        return { ...state, edited: action.payLoadValue };
      case "CURRENT_EDITING":
        return { ...state, currentEditing: action.payLoadValue };
      default:
        return state;
    }
  };
  const [imgs, setImg] = useReducer(imgsReducer, {
    original: "",
    edited: "",
    currentEditing: "",
  });

  return (
    <div className="App">
      {currentEditing === "Image Upload" && (
        <ImageUpload setImg={setImg} setCurrentEditing={setCurrentEditing} />
      )}
      {currentEditing === "Crop" && (
        <Crop
          imgs={imgs}
          setImg={setImg}
          setCurrentEditing={setCurrentEditing}
        />
      )}
      {currentEditing === "Filter" && (
        <Filter
          setImg={setImg}
          imgs={imgs}
          setCurrentEditing={setCurrentEditing}
        />
      )}
    </div>
  );
};

export default ImageEditor;
