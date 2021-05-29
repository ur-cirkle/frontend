import React, { Dispatch, useRef } from "react";
export interface RotateProps {
  imgs: { original: string; edited: string; currentEditing: string };
  setImg: Dispatch<{ type: string; payLoadValue: string; index: number }>;
  index: number;
}

const Rotate: React.FC<RotateProps> = ({ imgs, setImg, index }) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const onRotate = () => {
    if (!canvas.current) return;
    let currentImg: string;
    if (imgs.edited) currentImg = imgs.edited;
    else currentImg = imgs.original;
    const ctx = canvas.current.getContext("2d") as CanvasRenderingContext2D;
    const image = new Image();
    image.src = currentImg;
    image.onload = () => {
      if (!canvas.current) return;
      ctx.translate(image.width / 2, image.height / 2);
      ctx.rotate(Math.PI / 2);
      ctx.translate(-image.width / 2, -image.height / 2);
      ctx.drawImage(image, 0, 0);
      canvas.current.width = image.width;
      canvas.current.height = image.height;
    };
  };
  return (
    <div className="">
      <canvas ref={canvas} />
      <img src={imgs.original} alt="" />
      <button onClick={onRotate}>Rotate</button>
    </div>
  );
};

export default Rotate;
