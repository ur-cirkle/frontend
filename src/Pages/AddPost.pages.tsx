import React, { useEffect, useState, useReducer, useRef } from "react";
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
  const [Converted, setConverted] = useState(false);
  const [currentEditing, setCurrentEditing] = useState("Image Upload");
  const [file, setFile] = useState(0);
  const [Croped, setCroped] = useState(false);
  const [CropProp, setCropProp] = useState({
    cropX: 0,
    cropY: 0,
    scaleX: 0,
    scaleY: 0,
    width: 0,
    height: 0,
  });
  const [rotateProp, setrotateProp] = useState(0);
  const [flipProp, setflipProp] = useState(0);
  const [apply, setApply] = useState(false);
  const previewCanvas = useRef<HTMLCanvasElement | null>(null);
  const previewCanvas2 = useRef<HTMLCanvasElement | null>(null);

  const previewCanvas1 = useRef<HTMLCanvasElement | null>(null);
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
      case "Auto_Save": {
        const tempState = state;
        tempState[action.index] = {
          ...state[action.index],

          autoSave: action.payLoadValue,
        };
        return tempState;
      }

      case "Auto_Rotate": {
        const tempState = state;
        tempState[action.index] = {
          ...state[action.index],

          autoRotate: action.payLoadValue,
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
      autoSave: "",
      autoRotate: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
      autoSave: "",
      autoRotate: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
      autoSave: "",
      autoRotate: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
      autoSave: "",
      autoRotate: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
      autoSave: "",
      autoRotate: "",
    },
  ]);

  useEffect(() => {
    const image = new Image();
    if (currentEditing === "Image Upload") return;
    if (Converted) {
      return;
    }
    if (imgs[file - 1].original.length) {
      for (let i = 0; i < file; i++) {
        image.src = imgs[i].original;
        const canvas = previewCanvas.current;
        if (!canvas) {
          return;
        }
        canvas.height = (787 * image.height) / image.width;
        canvas.width = 787;

        const ctx: any = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, 787, (787 * image.height) / image.width);
        setImg({
          type: "ORIGINAL",
          payLoadValue: canvas.toDataURL(),
          index: i,
        });
      }

      setConverted(true);
    }
    setCounter(counter + 1);
  }, [imgs, counter]);

  useEffect(() => {
    setCounter(counter + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEditing, imgs[index].original]);
  useEffect(() => {
    if (currentEditing === "Image Upload") return;
    if (imgs[file - 1].original.length) return;
    setCounter(counter + 1);
  }, [counter]);
  useEffect(() => {
    const image = new Image();
    if (currentEditing === "Image Upload") return;
    if (imgs[file - 1].original.length) {
      for (let i = 0; i < file; i++) {
        image.src = imgs[i].original;
        const canvas = previewCanvas1.current;
        if (!canvas) {
          return;
        }
        const pixelRatio = window.devicePixelRatio;
        const ctx: any = canvas.getContext("2d");
        canvas.width = CropProp.width;
        canvas.height = CropProp.height;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(
          image,
          CropProp.cropX * CropProp.scaleX,
          CropProp.cropY * CropProp.scaleY,
          CropProp.width * CropProp.scaleY,
          CropProp.height * CropProp.scaleY,
          0,
          0,
          CropProp.width,
          CropProp.height
        );

        setImg({
          type: "Auto_Save",
          payLoadValue: canvas.toDataURL(),
          index: i,
        });
        console.log(imgs);
      }
      setCroped(true);
    }
  }, [apply]);

  useEffect(() => {
    if (!apply) {
      return;
    }
    if (Croped) {
      const image = new Image();
        image.src = imgs[2].autoSave;
        const canvas1 = previewCanvas2.current;
        if (!canvas1) {
          return;
        }
        canvas1.width = image.width;
        canvas1.height = image.height;
        const ctx1= canvas1.getContext("2d");
        if(!ctx1) return;
        ctx1.drawImage(image,0,0)
        
        console.log(canvas1.toDataURL())
        // if(canvas1.toDataURL()==="data:,"){setCounter(counter+1)}
      
    } else {
      setCounter(counter + 1);
    }
  }, [apply, Croped, counter]);
  // useEffect(() => {
  //   const image = new Image();
  //   console.log(imgs)
  //   if(imgs[0].autoSave) return
  //   if (currentEditing === "Image Upload") return;

  //     for (let i = 0; i < file; i++) {

  //   image.src = imgs[i].autoSave;
  //   const canvas1 = previewCanvas2.current;
  //   if (!canvas1) {
  //     return;
  //   }
  //   console.log(imgs);
  //   const ctx: any = canvas1.getContext("2d");
  //   if (rotateProp % 2 === 0) {
  //     canvas1.width = image.width;
  //     canvas1.height = image.height;

  //     ctx.translate(canvas1.width / 2, canvas1.height / 2);
  //     ctx.rotate(Math.PI * (rotateProp / 2));
  //     ctx.drawImage(image, -image.width / 2, -image.height / 2);
  //   }
  //   if (rotateProp % 2 !== 0) {
  //     canvas1.width = image.height;
  //     canvas1.height = image.width;

  //     ctx.translate(canvas1.width / 2, canvas1.height / 2);
  //     ctx.rotate(Math.PI * (rotateProp / 2));
  //     ctx.drawImage(image, -image.width / 2, -image.height / 2);
  //   }
  //   if(canvas1.toDataURL()!== "data:,"){
  //     setImg({
  //       type: "Auto_Rotate",
  //       payLoadValue: canvas1.toDataURL(),
  //       index: i,
  //     });
  //   }

  //   console.log(imgs);
  //     }

  //   if(!imgs[file-1].autoRotate){
  //     setCounter(counter + 1)}

  // }, [apply,counter]);

  useEffect(() => {
    const image = new Image();
    if (currentEditing === "Image Upload") return;
    image.src = imgs[1].autoRotate ? imgs[1].autoRotate : imgs[1].original;
    const canvas = document.createElement("canvas");
    const ctxFlip: any = canvas.getContext("2d");
    if (flipProp % 2 === 0) {
      canvas.width = image.width;
      canvas.height = image.height;

      ctxFlip.scale(1, 1);
      ctxFlip.drawImage(image, 0, 0, image.width, image.height);
    }
    if (flipProp % 2 !== 0) {
      canvas.width = image.width;
      canvas.height = image.height;

      ctxFlip.scale(-1, 1);

      ctxFlip.drawImage(image, -image.width, 0, image.width, image.height);
    }
    console.log(canvas.toDataURL());
  }, [flipProp, imgs[1].autoRotate]);

  console.log(CropProp);
  return (
    <div className="App">
      <p>{counter}</p>
      {currentEditing === "Image Upload" && (
        <ImageUpload
          setImg={setImg}
          setCurrentEditing={setCurrentEditing}
          setFile={setFile}
        />
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
          CropProp={CropProp}
          setCropProp={setCropProp}
          rotateProp={rotateProp}
          setrotateProp={setrotateProp}
          flipProp={flipProp}
          setflipProp={setflipProp}
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
      {currentEditing === "Form" && <AddPostForm />}
      <button
        onClick={() => {
          setCounter(counter + 1);
          setImg({
            type: "EDITED",
            payLoadValue: imgs[index].currentEditing,
            index: index,
          });
        }}
      >
        SAVE
      </button>

      <canvas ref={previewCanvas} style={{ display: "none" }}></canvas>
      <canvas ref={previewCanvas1}></canvas>
      <canvas
        ref={previewCanvas2}
        // style={{ display: "none" }}
      ></canvas>
      <div className="crop_wrapper">
        {imgs.map((img, i) => (
          <>
            <div className="">
              <img
                src={img.original}
                alt={`upload ${i}`}
                onClick={() => {
                  setIndex(i);
                }}
                className="crop"
              />
            </div>
            <div className="">
              <img
                src={img.autoRotate}
                alt={`upload ${i}`}
                onClick={() => {
                  setIndex(i);
                }}
                className="crop"
              />
            </div>
          </>
        ))}
        <button
          onClick={() => {
            setApply(true);
          }}
        >
          apply to all
        </button>
      </div>
    </div>
  );
};

export default AddPost;
