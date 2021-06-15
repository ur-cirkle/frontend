import React, {
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  useReducer,
  useState,
} from "react";
import {
  filterState,
  filterType,
  image,
  imagesReducerAction,
} from "../../Interfaces/AddPost.interfaces";

import { SketchPicker } from "react-color";

export interface FilterProps {
  imgs: image;
  setImg: Dispatch<imagesReducerAction>;
  setCurrentEditing: Dispatch<SetStateAction<string>>;
  imageIndex: number;
}

const Filter: React.FC<FilterProps> = ({
  imgs,
  setImg,
  setCurrentEditing,
  imageIndex,
}) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const buffer = useRef<HTMLCanvasElement | null>(null);
  const [tint, setTint] = useState({
    opacity: 0,
    color: "rgba(0,0,0,0.5)",
  });
  const onFilterTypeChange = (newType: filterType): filterState => {
    setTint({ ...tint, opacity: 0 });
    switch (newType) {
      case "SEPIA":
        return { value: "sepia(1)", type: newType };
      case "BLUR":
        return { value: "blur(4px)", type: newType };
      case "INVERT":
        return { value: "invert(1)", type: newType };
      case "CONTRAST":
        return { value: "contrast(200%)", type: newType };
      case "SATURATION":
        return { value: "saturate(100)", type: newType };
      case "HUE_ROTATE":
        return { value: "hue-rotate(180deg)", type: newType };
      case "GRAYSCALE":
        return { value: "grayscale(1)", type: newType };
      case "NONE":
        return { value: "", type: newType };
    }
  };
  const filterReducer = (
    state: filterState,
    action: {
      type: "TYPE" | "TINT";
      payLoadValue: filterType | "TINT" | number;
    }
  ): filterState => {
    switch (action.type) {
      case "TINT":
        if (action.type !== "TINT") return state;
        return { type: "TINT", value: "" };
      case "TYPE":
        if (
          action.payLoadValue === "TINT" ||
          typeof action.payLoadValue === "number"
        )
          return state;
        return onFilterTypeChange(action.payLoadValue);
    }
  };
  const [filter, setFilter] = useReducer(filterReducer, {
    value: "",
    type: "NONE",
  });
  useEffect(() => {
    if (!canvas.current || !imgs.edited) return;
    const ctx: any = canvas.current.getContext("2d");
    const image = new Image();
    image.src = imgs.edited;

    image.onload = (img) => {
      if (!canvas.current || !img.target) return;
      canvas.current.width = (img.target as HTMLImageElement).width;
      canvas.current.height = (img.target as HTMLImageElement).width;
      ctx.filter = filter.value;

      buffer.current = document.createElement("canvas");
      buffer.current.width = (img.target as HTMLImageElement).width;
      buffer.current.height = (img.target as HTMLImageElement).width;
      const bx: any = buffer.current.getContext("2d");

      // fill offscreen buffer with the tint color
      bx.fillStyle = tint.color;
      bx.fillRect(0, 0, buffer.current.width, buffer.current.height);

      // destination atop makes a result with an alpha channel identical to fg, but with all pixels retaining their original color *as far as I can tell*
      bx.globalCompositeOperation = "destination-over";
      bx.drawImage(img.target, 0, 0);
      ctx.drawImage(img.target, 0, 0);
      // to tint the image, draw it first
      ctx.drawImage(img.target, 0, 0);

      //then set the global alpha to the amound that you want to tint it, and draw the buffer directly on top of it.
      ctx.globalAlpha = tint.opacity;
      ctx.drawImage(buffer.current, 0, 0);
      setImg({
        type: "EDITED",
        payLoadValue: canvas.current.toDataURL(),
        index: imageIndex,
      });
    };
    console.log(imgs);
    //console.log(imgRef, canvas);
    //   asjLDJAL

    // navigator.userAgent.toLowerCase().includes("safari") &&
    //   alert("filter nai aave");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgs.edited, filter, tint]);

  return (
    <div className="filter">
      <div className="filter_left_items">
        <canvas ref={canvas} />
        <div className="slider_container">
          {filter.type === "TINT" && (
            <SketchPicker
              color={tint.color}
              onChange={({ rgb }) =>
                setTint({
                  ...tint,
                  color: `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`,
                })
              }
              presetColors={[
                "#D9E3F0",
                "#F47373",
                "#697689",
                "#37D67A",
                "#2CCCE4",
                "#555555",
                "#DCE775",
                "#FF8A65",
                "#BA68C8",
              ]}
            />
          )}
        </div>
      </div>

      <div className="filters_gallery">
        <div id={filter.type === "SEPIA" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_sepia "
            alt=""
            onClick={() => setFilter({ type: "TYPE", payLoadValue: "SEPIA" })}
          />
          <p>sepia</p>
        </div>
        <div id={filter.type === "BLUR" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_blur"
            alt=""
            onClick={() => setFilter({ type: "TYPE", payLoadValue: "BLUR" })}
          />
          <p>blur</p>
        </div>
        <div id={filter.type === "INVERT" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_invert"
            alt=""
            onClick={() => setFilter({ type: "TYPE", payLoadValue: "INVERT" })}
          />

          <p>invert</p>
        </div>

        <div id={filter.type === "CONTRAST" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_contrast"
            alt=""
            onClick={() =>
              setFilter({ type: "TYPE", payLoadValue: "CONTRAST" })
            }
          />
          <p>contrast</p>
        </div>
        <div id={filter.type === "SATURATION" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_saturation"
            alt=""
            onClick={() =>
              setFilter({ type: "TYPE", payLoadValue: "SATURATION" })
            }
          />
          <p>saturation</p>
        </div>
        <div id={filter.type === "HUE_ROTATE" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_hueRotate"
            alt=""
            onClick={() =>
              setFilter({ type: "TYPE", payLoadValue: "HUE_ROTATE" })
            }
          />
          <p>hue Rotate</p>
        </div>
        <div id={filter.type === "GRAYSCALE" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_grayscale"
            alt=""
            onClick={() =>
              setFilter({ type: "TYPE", payLoadValue: "GRAYSCALE" })
            }
          />
          <p>Gray scale</p>
        </div>
        <div id={filter.type === "NONE" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_none"
            alt=""
            onClick={() => setFilter({ type: "TYPE", payLoadValue: "NONE" })}
          />
          <p>none</p>
        </div>
        <div
          id={filter.type === "TINT" ? "img_selected" : ""}
          className="tint"
          onClick={() => {
            setTint({
              ...tint,
              opacity: 0.5,
            });
            setFilter({ type: "TINT", payLoadValue: 0 });
          }}
        >
          <img src={imgs.edited} className="fimg img_tint" alt="" />
          <p>Tint</p>
        </div>
        <button
          onClick={() => {
            setCurrentEditing("Form");
            window.history.pushState({}, "Image Editor:Form", "/img/form");
          }}
        >
          post
        </button>
      </div>
    </div>
  );
};
// 10px
export default Filter;
