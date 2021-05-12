import React, {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useReducer,
} from "react";
import { colorsState } from "../../Interfaces/ColorPicker.interfaces";
import { hextoRGB, rgbToHex } from "../../Utils/Color.utils";
export interface ColorPickerProps {
  setColor: Dispatch<SetStateAction<{ color: string; opacity: number }>>;
  onInputChangeFunc?: Function;
}

const ColorPicker: React.SFC<ColorPickerProps> = ({
  setColor,
  onInputChangeFunc,
}) => {
  const [currentColor, setCurrentColor] = useState("");
  const [currentMode, setCurrentMode] = useState("hex");
  const colorsReducer = (
    state: colorsState,
    action: { type: string; payLoadValue: any }
  ): colorsState => {
    switch (action.type) {
      case "HEX OPACITY": {
        const { opacity } = action.payLoadValue;

        setColor({ color: state.hex.hexCode, opacity });
        return { ...state, hex: { ...state.hex, opacity } };
      }
      case "HEX CODE": {
        const { hexCode } = action.payLoadValue;
        setCurrentColor(hexCode);

        setColor({ color: hexCode, opacity: state.hex.opacity });
        if (!hexCode) {
          return { ...state, hex: { ...state.hex, hexCode: "#" } };
        }
        if (hexCode.length === 4) {
          setCurrentColor(
            `#${hexCode[1]}${hexCode[1]}${hexCode[2]}${hexCode[2]}${hexCode[3]}${hexCode[3]}`
          );
        }
        return {
          ...state,
          hex: { ...state.hex, hexCode },
        };
      }
      case "RGB R": {
        const hex = rgbToHex(
          Number(action.payLoadValue),
          state.rgba.green,
          state.rgba.blue,
          state.rgba.alpha
        );

        setCurrentColor(hex);
        return {
          ...state,
          hex: { ...state.hex, hexCode: hex },
          rgba: { ...state.rgba, red: Number(action.payLoadValue) },
        };
      }
      case "RGB G": {
        const hex = rgbToHex(
          state.rgba.red,
          Number(action.payLoadValue),
          state.rgba.blue,
          state.rgba.alpha
        );

        setCurrentColor(hex);
        return {
          ...state,
          hex: { ...state.hex, hexCode: hex },
          rgba: { ...state.rgba, green: Number(action.payLoadValue) },
        };
      }
      case "RGB B": {
        const hex = rgbToHex(
          state.rgba.red,
          state.rgba.green,
          Number(action.payLoadValue),
          state.rgba.alpha
        );

        setCurrentColor(hex);
        return {
          ...state,
          hex: { ...state.hex, hexCode: hex },
          rgba: { ...state.rgba, blue: Number(action.payLoadValue) },
        };
      }
      case "RGB A":
        const hex = rgbToHex(
          state.rgba.red,
          state.rgba.green,
          state.rgba.blue,
          Number(action.payLoadValue) / 100
        );

        setCurrentColor(hex);
        return {
          ...state,
          hex: { ...state.hex, hexCode: hex },
          rgba: { ...state.rgba, alpha: Number(action.payLoadValue) / 100 },
        };
      default:
        return state;
    }
  };
  const [colors, setColors] = useReducer(colorsReducer, {
    hex: {
      hexCode: "#ffffff",
      opacity: 1,
    },
    rgba: {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 1,
    },
    hsl: {
      hue: 0,
      saturation: 100,
      lightness: 100,
    },
  });
  return (
    <div className="">
      <label htmlFor="color">Color</label>
      <input
        type="color"
        name=""
        id="color"
        value={currentColor}
        onChange={(e) => {
          setCurrentColor(e.target.value);
          if (onInputChangeFunc) onInputChangeFunc(e);
        }}
      />
      {currentMode === "hex" && (
        <div className="">
          <label htmlFor="opacity">
            <input
              type="range"
              name=""
              id="opacity"
              value={colors.hex.opacity}
              onChange={({ target }) =>
                setColors({
                  type: "HEX OPACITY",
                  payLoadValue: {
                    opacity: target.value,
                  },
                })
              }
            />
          </label>
          <label htmlFor="hex">
            hex:
            <input
              type="text"
              id="hex"
              value={colors.hex.hexCode}
              onChange={({ target }) =>
                setColors({
                  type: "HEX CODE",
                  payLoadValue: {
                    hexCode: target.value,
                  },
                })
              }
            />
          </label>
        </div>
      )}
      {currentMode === "rgb" && (
        <div className="rgb">
          <div className="red_container color_container">
            <label htmlFor="rnumber">
              <input
                type="number"
                id="rnumber"
                max={255}
                min={0}
                className="rgba_number"
                value={colors.rgba.red}
                onChange={({ target }) =>
                  setColors({ type: "RGB R", payLoadValue: target.value })
                }
              />
            </label>
            <label htmlFor="rslide">
              <input
                type="range"
                id="rslide"
                max={255}
                min={0}
                value={colors.rgba.red}
                onChange={({ target }) =>
                  setColors({ type: "RGB R", payLoadValue: target.value })
                }
              />
            </label>
          </div>
          <div className="green_container color_container">
            <label htmlFor="gnumber">
              <input
                type="number"
                id="gnumber"
                max={255}
                min={0}
                className="rgba_number"
                value={colors.rgba.green}
                onChange={({ target }) =>
                  setColors({ type: "RGB G", payLoadValue: target.value })
                }
              />
            </label>
            <label htmlFor="gslide">
              <input
                type="range"
                id="gslide"
                max={255}
                min={0}
                value={colors.rgba.green}
                onChange={({ target }) =>
                  setColors({ type: "RGB G", payLoadValue: target.value })
                }
              />
            </label>
          </div>
          <div className="blue_container color_container">
            <label htmlFor="bnumber">
              <input
                type="number"
                id="bnumber"
                max={255}
                min={0}
                className="rgba_number"
                value={colors.rgba.blue}
                onChange={({ target }) =>
                  setColors({ type: "RGB B", payLoadValue: target.value })
                }
              />
            </label>
            <label htmlFor="bslide">
              <input
                type="range"
                id="bslide"
                max={255}
                min={0}
                value={colors.rgba.blue}
                onChange={({ target }) =>
                  setColors({ type: "RGB B", payLoadValue: target.value })
                }
              />
            </label>
          </div>
          <div className="alpha_container color_container">
            <label htmlFor="anumber">
              <input
                type="number"
                id="anumber"
                max={100}
                min={0}
                className="rgba_number"
                value={Math.floor(colors.rgba.alpha * 100)}
                onChange={({ target }) =>
                  setColors({
                    type: "RGB A",
                    payLoadValue: Number(target.value) / 100,
                  })
                }
              />
            </label>
            <label htmlFor="aslide">
              <input
                type="range"
                id="aslide"
                max={100}
                min={0}
                value={Math.floor(colors.rgba.alpha * 100)}
                onChange={({ target }) => {
                  setColors({
                    type: "RGB A",
                    payLoadValue: target.value,
                  });
                }}
              />
            </label>
          </div>
        </div>
      )}
      <button onClick={() => setCurrentMode("hex")}>Hex</button>
      <button onClick={() => setCurrentMode("rgb")}>RGB</button>
      <button onClick={() => setCurrentMode("hsl")}>HSL</button>
      <div
        className=""
        style={{
          height: "100px",
          width: "100px",
          background: currentColor.length >= 3 ? currentColor : "#000",
          opacity: currentMode === "hex" ? `${colors.hex.opacity}%` : 1,
        }}
      />
    </div>
  );
};

export default ColorPicker;
