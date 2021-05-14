// import { stat } from "node:fs";
import React, {
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  useReducer,
  useState,
} from "react";
import { filterState } from "../../Interfaces/ImageEditor.intrefaces";

import { SketchPicker } from "react-color";

export interface FilterProps {
  imgs: { original: string; edited: string; currentEditing: string };
  setImg: Dispatch<{ type: string; payLoadValue: string;index:number}>;
  setCurrentEditing: Dispatch<SetStateAction<string>>;
  index:number
}

const Filter: React.FC<FilterProps> = ({ imgs, setImg, setCurrentEditing ,index}) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const buffer = useRef<HTMLCanvasElement | null>(null);
  const [tint, setTint] = useState({
    opacity: 0,
    color: "rgba(0,0,0,0.5)",
  });
  const onFilterTypeChange = (newType: string): filterState => {
    setTint({ ...tint, opacity: 0 });
    switch (newType) {
      case "SEPIA":
        setSliderValue(100);
        return { value: "sepia(1)", type: "sepia" };
      case "BLUR":
        setSliderValue(16);
        return { value: "blur(4px)", type: "blur" };
      case "INVERT":
        setSliderValue(100);
        return { value: "invert(1)", type: "invert" };
      case "CONTRAST":
        setSliderValue(50);
        return { value: "contrast(200%)", type: "contrast" };
      case "SATURATION":
        setSliderValue(100);
        return { value: "saturate(100)", type: "saturation" };
      case "HUE ROTATE":
        setSliderValue(50);
        return { value: "hue-rotate(180deg)", type: "hue rotate" };
      case "GRAYSCALE":
        setSliderValue(100);
        return { value: "grayscale(1)", type: "grayscale" };
      case "NONE":
        setSliderValue(0);
        return { value: "", type: "none" };
      default:
        return {
          value: "",
          type: "none",
        };
    }
  };
  const onFilterValueChange = (
    value: number,
    type: string,
    filter: string
  ): filterState => {
    let calcValue = 0;
    setSliderValue(value);

    switch (type) {
      case "0-1 NO UNIT":
        calcValue = value * 0.01;
        return { value: `${filter}(${calcValue})`, type: filter };

      case "BLUR":
        calcValue = value / 4;
        return { value: `blur(${calcValue}px)`, type: "blur" };
      case "CONTRAST":
        calcValue = value * 4;
        return { value: `contrast(${calcValue}%)`, type: "contrast" };
      case "SATURATION":
        return { value: `saturate(${value})`, type: "saturation" };
      case "HUE ROTATE":
        calcValue = value * 3.6;
        return { value: `hue-rotate(${calcValue}deg)`, type: "hue rotate" };
      case "NONE":
        return { value: "", type: "none" };
      default:
        return {
          value: "",
          type: "none",
        };
    }
  };
  const filterReducer = (
    state: filterState,
    action: { type: string; payLoadValue: number | string }
  ): filterState => {
    switch (action.type) {
      case "TYPE":
        return onFilterTypeChange(action.payLoadValue.toString());
      case "VALUE CHANGE":
        const type: string =
          state.type === "sepia" ||
          state.type === "invert" ||
          state.type === "grayscale"
            ? "0-1 NO UNIT"
            : state.type;
        return onFilterValueChange(
          Number(action.payLoadValue),
          type.toUpperCase(),
          state.type
        );
      case "TINT":
        return { type: "tint", value: "" };
      default:
        return state;
    }
  };
  const [filter, setFilter] = useReducer(filterReducer, {
    value: "",
    type: "none",
  });
  const onSliderChanged = (value: string) => {
    if (filter.type === "tint") {
      setTint({
        ...tint,
        opacity: Number(value) / 100,
      });
      setSliderValue(Number(value));
      return;
    }
    setTint({ ...tint, opacity: 0 });
    setFilter({
      type: "VALUE CHANGE",
      payLoadValue: value,
    });
  };
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
        type: "CURRENT_EDITING",
        payLoadValue: canvas.current.toDataURL(),
        index
      });
    };

    //console.log(imgRef, canvas);
    //   asjLDJAL

    // navigator.userAgent.toLowerCase().includes("safari") &&
    //   alert("filter nai aave");
  }, [imgs.edited, filter, tint]);

  return (
    <div className="filter">
      <div className="filter_left_items">
        <canvas ref={canvas} />
        <div className="slider_container">
          {filter.type !== "tint" && (
            <label htmlFor="" className="slider">
              <input
                type="number"
                name=""
                id=""
                min={0}
                max={100}
                width="100px"
                value={sliderValue}
                onChange={({ target }) => {
                  onSliderChanged(target.value);
                }}
              />
              <input
                type="range"
                name=""
                id=""
                min={0}
                max={100}
                value={sliderValue}
                onChange={({ target }) => {
                  onSliderChanged(target.value);
                }}
              />
            </label>
          )}
          {filter.type === "tint" && (
            <SketchPicker
              color={tint.color}
              onChange={({ rgb }) =>
                setTint({
                  ...tint,
                  color: `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`,
                })
              }
              presetColors={["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#DCE775","#FF8A65","#BA68C8"]}
            />
          )}
        </div>
      </div>

      <div className="filters_gallery">
        <div id={filter.type === "sepia" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_sepia "
            alt=""
            onClick={() => setFilter({ type: "TYPE", payLoadValue: "SEPIA" })}
          />
          <p>sepia</p>
        </div>
        <div id={filter.type === "blur" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_blur"
            alt=""
            onClick={() => setFilter({ type: "TYPE", payLoadValue: "BLUR" })}
          />
          <p>blur</p>
        </div>
        <div id={filter.type === "invert" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_invert"
            alt=""
            onClick={() => setFilter({ type: "TYPE", payLoadValue: "INVERT" })}
          />

          <p>invert</p>
        </div>

        <div id={filter.type === "contrast" ? "img_selected" : ""}>
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
        <div id={filter.type === "saturation" ? "img_selected" : ""}>
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
        <div id={filter.type === "hue rotate" ? "img_selected" : ""}>
          <img
            src={imgs.edited}
            className="fimg img_hueRotate"
            alt=""
            onClick={() =>
              setFilter({ type: "TYPE", payLoadValue: "HUE ROTATE" })
            }
          />
          <p>hue Rotate</p>
        </div>
        <div id={filter.type === "grayscale" ? "img_selected" : ""}>
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
        <div
          id={filter.type === "tint" ? "img_selected" : ""}
          className="tint"
          onClick={() => {
            console.log("hello");
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
      </div>
    </div>
  );
};
// 10px
export default Filter;
