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
  const [Converted, setConverted] = useState(false)
  const [currentEditing, setCurrentEditing] = useState("Image Upload");
  const [file,setFile]=useState(0)
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
    const image = new Image();
    if(currentEditing === "Image Upload") return;
    if(Converted){return}
    if(imgs[file - 1].original.length){ 
      for(let i=0;i<file;i++){
        image.src = imgs[i].original;
        const canvas =previewCanvas.current;
        if (!canvas){return}
        canvas.height=787*(image.height)/image.width
        canvas.width=787
    
        const ctx: any = canvas.getContext("2d");
        ctx.drawImage(image,0,0,787,787*(image.height)/image.width)
        setImg({ type: "ORIGINAL", payLoadValue: canvas.toDataURL() , index:i });
      }
      
      setConverted(true)}
      setCounter(counter +1)
   

  }, [imgs,counter]);

  useEffect(() => {
    setCounter(counter + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEditing,imgs[index].original]);
  useEffect(() => {
    if(currentEditing === "Image Upload") return;
    if(imgs[file - 1].original.length) return;
    setCounter(counter+1)
    
  }, [counter]);
  return (
    <div className="App">
      <p>{counter}</p>
      {currentEditing === "Image Upload" && (
        <ImageUpload setImg={setImg} setCurrentEditing={setCurrentEditing} setFile={setFile}  />
      )}
      {currentEditing === "Crop" && Converted && (
        <Crop
          imgs={imgs[index]}
          setImg={setImg}
          setCurrentEditing={setCurrentEditing}
          index={index}
          counter={counter}
          setCounter={setCounter}
          Converted={Converted}
          
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
  imgs.map((img,i) =>(
    <div className="">
      <img src={img.original} alt={`upload ${i}`} onClick={()=>{setIndex(i)}} />
    </div>
  ))
}

</div>
<canvas ref={previewCanvas}
style={{ display: "none" }}></canvas>
   
    </div>
  );
};

export default AddPost;
