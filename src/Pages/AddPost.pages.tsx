import React, { useEffect, useState, useReducer, useRef } from "react";
import AddPostForm from "../Components/AddPost/AddPostForm/AddPostForm.component";
import BasicImageEditor from "../Components/AddPost/BasicImageEditor/BasicImageEditor.components";
import Filter from "../Components/AddPost/Filter.components";
import ImageUpload from "../Components/AddPost/ImageUpload.components";
import {
  cropPropObj,
  images,
  imagesReducerAction,
} from "../Interfaces/AddPost.interfaces";

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

  const [cropProp, setCropProp] = useState<cropPropObj>({
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
  const [saved, setSaved] = useState(false);
  const [basicEditorMode, setBasicEditorMode] =
    useState<"PREVIEW" | "CROP" | "FLIP" | "ROTATE">("PREVIEW");
  const imagesReducer = (
    state: images,
    action: imagesReducerAction
  ): images => {
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
      case "AUTO_SAVE": {
        const tempState = state;
        tempState[action.index] = {
          ...state[action.index],

          autoSave: action.payLoadValue,
        };
        return tempState;
      }

      case "AUTO_ROTATE": {
        const tempState = state;
        tempState[action.index] = {
          ...state[action.index],

          autoRotate: action.payLoadValue,
        };
        return tempState;
      }
      case "BACKUP": {
        const tempState = state;
        tempState[action.index] = {
          ...state[action.index],

          backup: action.payLoadValue,
        };
        return tempState;
      }
      default:
        return state;
    }
  };
  //* Images useReduces
  //- Array of 5 image object
  const [imgs, setImg] = useReducer(
    imagesReducer,
    new Array(5).fill({
      original: "",
      edited: "",
      currentEditing: "",
      autoSave: "",
      autoRotate: "",
      backup: "",
    }) as images
  );
  const cancel = () => {
    for (let i = 0; i < file; i++) {
      setImg({
        type: "EDITED",
        payLoadValue: "",
        index: i,
      });
      setImg({
        type: "CURRENT_EDITING",
        payLoadValue: "",
        index: i,
      });
      setImg({
        type: "AUTO_SAVE",
        payLoadValue: "",
        index: i,
      });
      setImg({
        type: "AUTO_ROTATE",
        payLoadValue: "",
        index: i,
      });
      setApply(false);
      setCroped(false);
      setRotated(false);
      setCurrentEditing("Crop");
      console.log(imgs);
    }
  };
  const back = () => {
    if (currentEditing === "Crop") {
      setCurrentEditing("Image Upload");
    }

    if (currentEditing === "Filter") {
      setIndex(0);
      for (let i = 0; i < file; i++) {
        setImg({
          type: "EDITED",
          payLoadValue: "",
          index: i,
        });
        console.log("qrwefhi");
        setImg({
          type: "CURRENT_EDITING",
          payLoadValue: "",
          index: i,
        });
        console.log("qrwefhi");
        setImg({
          type: "AUTO_SAVE",
          payLoadValue: "",
          index: i,
        });
        console.log("qrqwef");
        setImg({
          type: "AUTO_ROTATE",
          payLoadValue: "",
          index: i,
        });
        console.log(123);
      }
      setApply(false);
      setCroped(false);
      setRotated(false);
      setCurrentEditing("Crop");
      console.log(imgs);
    }

    if (currentEditing === "Form") {
      setIndex(0);
      for (let i = 0; i < file; i++) {
        setImg({
          type: "EDITED",
          payLoadValue: imgs[i].backup,
          index: i,
        });
        setCurrentEditing("Filter");
      }
    }
  };
  //resizing image in to the required area i.e 787*height of image takinig care that pixels does not blur out
  useEffect(() => {
    const image = new Image();
    console.log("skjadsa", Converted, currentEditing);
    if (currentEditing === "Image Upload") return;
    if (Converted) {
      return;
    }
    console.log("skjadsa1");
    if (imgs[file - 1].original.length) {
      for (let i = 0; i < file; i++) {
        image.src = imgs[i].original;
        const canvas = document.createElement("canvas");
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
        const canvas = document.createElement("canvas");
        if (!canvas) {
          return;
        }
        const pixelRatio = window.devicePixelRatio;
        const ctx: any = canvas.getContext("2d");
        canvas.width = cropProp.width;
        canvas.height = cropProp.height;

        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(
          image,
          cropProp.cropX * cropProp.scaleX,
          cropProp.cropY * cropProp.scaleY,
          cropProp.width * cropProp.scaleY,
          cropProp.height * cropProp.scaleY,
          0,
          0,
          cropProp.width,
          cropProp.height
        );

        setImg({
          type: "AUTO_SAVE",
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
          const canvas1 = document.createElement("canvas");
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
            type: "AUTO_ROTATE",
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
          const canvas1 = document.createElement("canvas");
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
          setImg({
            type: "BACKUP",
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
        <BasicImageEditor
          imgs={imgs[index]}
          setImg={setImg}
          setCurrentEditing={setCurrentEditing}
          imageIndex={index}
          basicEditorMode={basicEditorMode}
          setBasicEditorMode={setBasicEditorMode}
          counter={counter}
          setCounter={setCounter}
          Converted={Converted}
          setCropProp={setCropProp}
          setRotateProp={setrotateProp}
          setFlipProp={setflipProp}
        />
      )}
      {currentEditing === "Filter" && (
        <Filter
          setImg={setImg}
          imgs={imgs[index]}
          setCurrentEditing={setCurrentEditing}
          imageIndex={index}
        />
      )}
      {currentEditing === "Form" && <AddPostForm imgs={imgs} setImg={setImg} />}
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
          </>
        ))}
        <div></div>
      </div>

      {currentEditing === "Crop" && (
        <div>
          <button
            onClick={() => {
              setCounter(counter + 1);
              setImg({
                type: "EDITED",
                payLoadValue: imgs[index].currentEditing,
                index: index,
              });
              setBasicEditorMode("PREVIEW");
              setSaved(true);
            }}
          >
            SAVE
          </button>

          <button
            onClick={() => {
              setApply(true);
            }}
          >
            apply to all
          </button>
        </div>
      )}
      <button onClick={back}>cancel</button>
    </div>
  );
};

export default AddPost;
