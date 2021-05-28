import React, { Dispatch, useRef, useEffect,useState } from "react";
export interface RotateProps {
  imgs: { original: string; edited: string; currentEditing: string };
  setImg: Dispatch<{ type: string; payLoadValue: string; index: number }>;
  index: number;
}

const Rotate: React.FC<RotateProps> = ({ imgs, setImg, index }) => {
  const canvas1 = useRef<HTMLCanvasElement | null>(null);
  const onRotate = () => {                                                                         
    if (!canvas1.current) return;
    let currentImg: string| null = "";
    if (imgs.edited) currentImg= imgs.edited;

    const ctx = canvas1.current.getContext("2d") as CanvasRenderingContext2D;
    const image = new Image();
    image.src = currentImg;
    console.log(currentImg)
    image.onload = () => {

      rotateImage();
      console.log(canvas1.current?.toDataURL());

    
    };
    let rotateImage = () => {
    
      if (!canvas1.current) return;
      canvas1.current.width = image.width;
      canvas1.current.height = image.height;
      console.log(image.width)
      
      ctx.translate(canvas1.current.width / 2,canvas1.current.height / 2);
      ctx.rotate(Math.PI);
      ctx.drawImage(image, -image.width / 2, -image.height / 2);
  }

  };
  return (
    <div className="">
      <canvas ref={canvas1} />
      <img src={imgs.edited} alt="" />
      <button onClick={onRotate}>Rotate</button>                                              
    </div>
  );
};





// export default Rotate;
