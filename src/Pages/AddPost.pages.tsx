import React, { useEffect, useState, useReducer } from "react";
import Crop from "../Components/AddPost/Crop.components";
import Filter from "../Components/AddPost/Filter.components";
import ImageUpload from "../Components/AddPost/ImageUpload.components";
import { state } from "../Interfaces/AddPost.intrefaces";


export interface cropProp {
  unit?: any;
  width?: number | undefined;
  height?: number | undefined;
  aspect?: any;
  x?: number | undefined;
  y?: number | undefined;
}

const AddPost: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(0);
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
        console.log(action);
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
    setCounter(counter + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(imgs)
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

{/* 

      <img src={imgs[0].original} onClick={()=>{setIndex(0)}} alt="upload"></img>
      <img src={imgs[1].original} onClick={()=>{setIndex(1)}}alt="upload"></img>
      <img src={imgs[2].original} onClick={()=>{setIndex(2)}}alt="upload"></img>
      <img src={imgs[3].original} onClick={()=>{setIndex(3)}}alt="upload"></img>
      <img src={imgs[4].original} onClick={()=>{setIndex(4)}}alt="upload"></img>
 */}


      <button onClick={()=>{setCounter(counter+1)}}>load </button>
      <button onClick={()=>{setIndex(index+1)}}> next </button>
      <button onClick={()=>{setIndex(index-1)}}>prev </button>

   
    </div>
  );
};

export default AddPost;
