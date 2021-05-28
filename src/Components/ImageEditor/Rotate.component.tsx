import React, { Dispatch } from "react";
import { state } from "../../Interfaces/ImageEditor.intrefaces";
export interface RotateProps {
  imgs: { original: string; edited: string; currentEditing: string };
  setImg: Dispatch<{ type: string; payLoadValue: string; index: number }>;
  index: number;
}

const Rotate: React.FC<RotateProps> = ({ imgs, setImg, index }) => {
  return <button>rotate</button>;
};

export default Rotate;
