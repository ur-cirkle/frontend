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
type state = [
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

const ImageEditor: React.FC<ImageEditorProps> = () => {
  const [index, setIndex] = useState(0);
  const [counter,setCounter] = useState(0);
  const [currentEditing, setCurrentEditing] = useState("Image Upload");
  const imgsReducer = (
    state: state,
    action: { type: string; payLoadValue: string; index: number }
  ): state => {
    switch (action.type) {
      case "ORIGINAL": {
        const tempState = state;
        tempState[action.index] = {
          ...state[action.index],
          original: action.payLoadValue,
        };
        return tempState;
      }
      case "EDITED": {
        const tempState = state;
        tempState[action.index] = {
          ...state[action.index],
          edited: action.payLoadValue,
        };
        return tempState;
      }
      case "CURRENT_EDITING": {
        const tempState = state;
        tempState[action.index] = {
          ...state[action.index],
          currentEditing: action.payLoadValue,
        };
        return tempState;
      }
      default:
        return state;
    }
  };
  
  const [imgs, setImg] = useReducer(imgsReducer, [
    {
      original: "",
      edited: "",
      currentEditing: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
    },
  ]);
  useEffect(() => {
    setCounter(counter+1)
    
  }, [imgs[index].original]);
  console.log(imgs,index)
  return (
    <div className="App">
      <p>{counter}</p>
      {/* <img src={imgs[0].original}></img> */}
      {currentEditing === "Image Upload" && (
        <ImageUpload setImg={setImg} setCurrentEditing={setCurrentEditing} />
      )}
      {currentEditing === "Crop" && (
        <Crop
          imgs={imgs[index]}
          setImg={setImg}
          setCurrentEditing={setCurrentEditing}
          index={index}
        />
      )}
      {currentEditing === "Filter" && (
        <Filter
          setImg={setImg}
          imgs={imgs[index]}
          setCurrentEditing={setCurrentEditing}
          index={index}
          

        />
      )}
      <button onClick={()=>{setIndex(index + 1)}}> NEXT</button>
      <button onClick={()=>{setIndex(index - 1)}}> Previous</button>
   
    </div>
  );
};

export default ImageEditor;
