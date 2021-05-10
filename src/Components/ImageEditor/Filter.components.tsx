import React, { useRef, useEffect, Dispatch, SetStateAction } from "react";
export interface FilterProps {
  imgs: { original: string; edited: string; currentEditing: string };
  setImg: Dispatch<{ type: string; payLoadValue: string }>;
  setCurrentEditing: Dispatch<SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({ imgs, setImg, setCurrentEditing }) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvas.current || !imgs.edited) return;
    const ctx: any = canvas.current.getContext("2d");
    const image = new Image();
    image.src = imgs.edited;
    image.onload = (img) => {
      console.log(!canvas.current || !img.target, img);
      if (!canvas.current || !img.target) return;
      canvas.current.width = (img.target as HTMLImageElement).width;
      canvas.current.height = (img.target as HTMLImageElement).height;
      ctx.filter = "contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)";
      ctx.drawImage(img.target, 0, 0);
    };

    //console.log(imgRef, canvas);
    //   asjLDJAL
    console.log(canvas.current.toDataURL());
    alert(navigator.userAgent.toLowerCase().includes("safari"));
  }, [imgs.edited]);
  return (
    <div className="">
      <canvas ref={canvas} />
      <div className="">
        <img src={imgs.edited} className="fimg img_sepia" alt="" />
        <img src={imgs.edited} className="fimg img_sepia" alt="" />
        <img src={imgs.edited} className="fimg img_sepia" alt="" />
        <img src={imgs.edited} className="fimg img_sepia" alt="" />
        <img src={imgs.edited} className="fimg img_sepia" alt="" />
        <img src={imgs.edited} className="fimg img_sepia" alt="" />
        <img src={imgs.edited} className="fimg img_sepia" alt="" />
      </div>
    </div>
  );
};
// 10px
export default Filter;
