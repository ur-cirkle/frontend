import React, { useEffect, useState, useReducer,useRef } from "react";
import AddPostForm from "../Components/AddPost/AddPostForm/AddPostForm.component";
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
  const previewCanvas = useRef<HTMLCanvasElement | null>(null);
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
  }, [currentEditing,imgs[index].original]);
  console.log(imgs)

  // useEffect(() => {
  //   const image = new Image();
  //   image.src = imgs[0].original;
  //   const canvas =previewCanvas.current;
  //   if (!canvas){return}
  //   canvas.height=787*(image.height)/image.width
  //   canvas.width=787

  //   const ctx: any = canvas.getContext("2d");
  //   ctx.drawImage(image,0,0,787,787*(image.height)/image.width)
  //   // console.log(canvas.toDataURL()) 
  //   setImg({ type: "ORIGINAL", payLoadValue: canvas.toDataURL() , index:0 });
  //   console.log(imgs[0], "were")
  // }, []);

  
  return (
    <div className="App">
      <p>{counter}</p>
      {currentEditing === "Image Upload" && (
        <ImageUpload setImg={setImg} setCurrentEditing={setCurrentEditing} />
      )}
      {currentEditing === "Crop" && (
        <Crop
          imgs={imgs[index]}
          setImg={setImg}
          setCurrentEditing={setCurrentEditing}
          index={index}
          counter={counter}
          setCounter={setCounter}
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
      {
        currentEditing === "Form" && (
          <AddPostForm  />
        )
      }
      <button onClick={()=>{setCounter(counter+1)
      setImg({ type: "EDITED", payLoadValue: imgs[index].currentEditing , index:index })
      }}>SAVE</button>
      <button onClick={()=>{setIndex(index+1)}}> next </button>
      <button onClick={()=>{setIndex(index-1)}}>prev </button>

<div>

{   
  imgs.map(img =>(
    <div className="">
      <img src={img.original} alt="upload" />
    </div>
  ))
}

</div>

   
    </div>
  );
};

export default AddPost;
