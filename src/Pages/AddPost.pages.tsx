import React, { useEffect, useState, useReducer, useRef } from "react";
import AddPostForm from "../Components/AddPost/AddPostForm/AddPostForm.component";
import Crop from "../Components/AddPost/Crop.components";
import Filter from "../Components/AddPost/Filter.components";
import ImageUpload from "../Components/AddPost/ImageUpload.components";
import { state } from "../Interfaces/AddPost.intrefaces";

import { Img, ImgContainer } from "./AddPost.styles";

export interface cropProp {
  unit?: any;
  width?: number | undefined;
  height?: number | undefined;
  aspect?: any;
  x?: number | undefined;
  y?: number | undefined;
}

const AddPost: React.FC = () => {
  //active image index on which editing is done
  const [index, setIndex] = useState(0);
  //to render after editing is done
  const [counter, setCounter] = useState(0);
  //boolean to cheack wether image is converted or not
  const [Converted, setConverted] = useState(false);
  //there are four cases such as 1) image upload 2)crop 3)filter 4)post
  const [currentEditing, setCurrentEditing] = useState("Image Upload");
  // max numer of selected out of 5
  const [file, setFile] = useState(0);
  //boolean to check wether crop is done or not in apply to all
  const [Croped, setCroped] = useState(false);
  //boolean to check wether rotate is done or not in apply to all
  const [Rotated, setRotated] = useState(false);
  //taking crop setting and apllying to all if needed

  const [CropProp, setCropProp] = useState({
    cropX: 0,
    cropY: 0,
    scaleX: 0,
    scaleY: 0,
    width: 0,
    height: 0,
  });
  //taking rotate setting and apllying to all if needed
  const [rotateProp, setrotateProp] = useState(0);
  //taking flip setting and apllying to all if needed
  const [flipProp, setflipProp] = useState(0);
  //boolean to aplly editing
  const [apply, setApply] = useState(false);
  //canvas on which image are edited
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
      case "Compressed": {
        const tempState = state;
        tempState[action.index] = {
          ...state[action.index],

          compressed: action.payLoadValue,
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
      compressed: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
      autoSave: "",
      autoRotate: "",
      compressed: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
      autoSave: "",
      autoRotate: "",
      compressed: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
      autoSave: "",
      autoRotate: "",
      compressed: "",
    },
    {
      original: "",
      edited: "",
      currentEditing: "",
      autoSave: "",
      autoRotate: "",
      compressed: "",
    },
  ]);
  //resizing image in to the required area i.e 787*height of image takinig care that pixels does not blur out
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
        setCounter(counter + 1);
      }
      setCroped(true);
    }
  }, [apply]);

  useEffect(() => {
    if (!apply) {
      return;
    }
    if (Croped) {
      for (let i = 0; i < file; i++) {
        const image = new Image();

        image.src = imgs[i].autoSave;

        image.onload = () => {
          const canvas1 = previewCanvas2.current;
          if (!canvas1) {
            return;
          }
          canvas1.width = image.width;
          canvas1.height = image.height;
          const ctx1 = canvas1.getContext("2d");
          if (!ctx1) return;
          if (rotateProp % 2 === 0) {
            canvas1.width = image.width;
            canvas1.height = image.height;

            ctx1.translate(canvas1.width / 2, canvas1.height / 2);
            ctx1.rotate(Math.PI * (rotateProp / 2));
            ctx1.drawImage(image, -image.width / 2, -image.height / 2);
          }
          if (rotateProp % 2 !== 0) {
            canvas1.width = image.height;
            canvas1.height = image.width;

            ctx1.translate(canvas1.width / 2, canvas1.height / 2);
            ctx1.rotate(Math.PI * (rotateProp / 2));
            ctx1.drawImage(image, -image.width / 2, -image.height / 2);
          }
          console.log(canvas1.toDataURL(), i);
          setImg({
            type: "Auto_Rotate",
            payLoadValue: canvas1.toDataURL(),
            index: i,
          });
          console.log(imgs);
        };
      }
      setRotated(true);
    } else {
      setCounter(counter + 1);
    }
  }, [apply, Croped, counter]);

  useEffect(() => {
    if (!apply) {
      return;
    }
    if (Rotated) {
      for (let i = 0; i < file; i++) {
        const image = new Image();
        image.src = imgs[i].autoRotate;

        image.onload = () => {
          const canvas1 = previewCanvas2.current;
          if (!canvas1) {
            return;
          }
          canvas1.width = image.width;
          canvas1.height = image.height;
          const ctx1 = canvas1.getContext("2d");
          if (!ctx1) return;
          if (flipProp % 2 === 0) {
            canvas1.width = image.width;
            canvas1.height = image.height;

            ctx1.scale(1, 1);
            ctx1.drawImage(image, 0, 0, image.width, image.height);
          }
          if (flipProp % 2 !== 0) {
            canvas1.width = image.width;
            canvas1.height = image.height;
            ctx1.scale(-1, 1);
            ctx1.drawImage(image, -image.width, 0, image.width, image.height);
          }
          setImg({
            type: "EDITED",
            payLoadValue: canvas1.toDataURL(),
            index: i,
          });
          console.log(imgs);
        };
      }
      if (imgs[file - 1].edited) {
        setCurrentEditing("Filter");
        setApply(false);
        window.history.pushState({}, "Image Editor:Filter", "/img/filter");
      } else {
        setCounter(counter + 1);
      }
    } else {
      setCounter(counter + 1);
    }
  }, [apply, counter, Rotated]);

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
          setCropProp={setCropProp}
          setrotateProp={setrotateProp}
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
      {currentEditing === "Form" && <AddPostForm imgs={imgs} setImg={setImg} />}
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
      <ImgContainer className="crop_wrapper">
        {imgs.map((img, i) => (
          <Img
            id={`img-${i}`}
            src={img.original}
            alt={`upload ${i}`}
            onClick={() => {
              setIndex(i);
            }}
            className="crop"
          />
        ))}
        <button
          onClick={() => {
            setApply(true);
          }}
        >
          apply to all
        </button>
      </ImgContainer>
    </div>
  );
};

export default AddPost;
