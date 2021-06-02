import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";
import { cropProp } from "../../Pages/AddPost.pages";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export interface CropProps {
  imgs: {
    original: string;
    edited: string;
    currentEditing: string;
    
  };
  setImg: React.Dispatch<{
    type: string;
    payLoadValue: string;
    index:number
    
  }>;
  index :number;
  counter:number;
  setCounter:React.Dispatch<SetStateAction<number>>
  setCurrentEditing: Dispatch<SetStateAction<string>>;
}

const Crop: React.FC<CropProps> = ({ imgs, setImg, setCurrentEditing ,index,counter,setCounter}) => {
  const [crop, setCrop]: [
    cropProp,
    Dispatch<SetStateAction<cropProp>>
  ] = useState<cropProp>({ unit: "%", width: 30, aspect: 1 / 1 });
  const imgRef = useRef<HTMLImageElement | null>(null);
  
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const previewCanvasRef1 = useRef<HTMLCanvasElement | null>(null);
  const previewCanvasRef2 = useRef<HTMLCanvasElement | null>(null);
  
  const onLoad = useCallback((img: HTMLImageElement) => {
    imgRef.current = img;
  }, []);

  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const [CompleteRotate, setCompleteRotate] = useState<any>(null);
  const [Completeflip, setCompleteflip] = useState<any>(null);
  useEffect(() => {
    if(imgs.original)return;
    setCounter(counter+1)
    
  }, [counter]);
  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current) {
      return;
    }

    const image = new Image();
    image.src = imgs.original;
    const canvas = previewCanvasRef.current;
    const crop: any = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx: any = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;

    // canvas.width = crop.width * pixelRatio;
    // canvas.height = crop.height * pixelRatio;

    
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );


    setImg({ type: "EDITED", payLoadValue: canvas.toDataURL() ,index});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedCrop,imgs.edited,counter]);
  
  
  useEffect(() => {
    console.log(123)
    if (!CompleteRotate ||  !previewCanvasRef1.current) {
      return;
    }
    const image = new Image();
    image.src = imgs.edited?imgs.edited:imgs.original;
    
    const canvasRotate = previewCanvasRef1.current;
    const ctxRotate: any = canvasRotate.getContext("2d");
    if(CompleteRotate%2===0){
      canvasRotate.width = image.width;
      canvasRotate.height = image.height;
      
      ctxRotate.translate(canvasRotate.width / 2,canvasRotate.height / 2);
      ctxRotate.rotate(Math.PI*(CompleteRotate/2));
      console.log(Math.PI*(CompleteRotate/2));
      ctxRotate.drawImage(image, -image.width / 2, -image.height / 2);
      console.log(canvasRotate.toDataURL(),61);

    }
    if(CompleteRotate%2!==0){
      canvasRotate.width = image.height;
      canvasRotate.height = image.width;
      
      ctxRotate.translate(canvasRotate.width / 2,canvasRotate.height / 2);
      ctxRotate.rotate(Math.PI*(CompleteRotate/2));
      console.log(Math.PI*(CompleteRotate/2));
      ctxRotate.drawImage(image, -image.width / 2, -image.height / 2);
      console.log(canvasRotate.toDataURL(),61);

    }
    setImg({ type: "EDITED", payLoadValue: canvasRotate.toDataURL(),index });
       
  }, [CompleteRotate,imgs.edited]);

useEffect(() => {

  if (!Completeflip ||  !previewCanvasRef2.current) {
    return;
  }
  console.log(456)

  const image = new Image();
  image.src = imgs.edited?imgs.edited:imgs.original;
  const canvasFlip = previewCanvasRef2.current;
  const ctxFlip: any = canvasFlip.getContext("2d");
  canvasFlip.width=image.width
  canvasFlip.height=image.height
  if(Completeflip%2===0){
  
    ctxFlip.scale(1,1);
    ctxFlip.drawImage(image,0,0,image.width,image.height);
  }
  if(Completeflip%2!==0){    
    ctxFlip.scale(-1,1);
    ctxFlip.drawImage(image,-image.width,0,image.width,image.height);
  }
  
  setImg({ type: "EDITED", payLoadValue: canvasFlip.toDataURL(),index });
  
}, [Completeflip,imgs.edited]);


  const onRatioChange = (ratio: number) => {
    const image = new Image();
    // console.log(imgs.original)
    image.src = imgs.original;
    if (!crop.width || !crop.height) return;

    setCrop((prevCrop) => {
      if (!prevCrop.width || !prevCrop.height) return prevCrop;
      console.log((image.width * (prevCrop.width / 100)) / ratio);
      return {
        ...prevCrop,
        aspect: ratio,
        height: (image.width * 0.3) / ratio,
        width: image.width * 0.3,
      };
    });
  };
  if(!imgs.original){
    return <p>Loading......</p>
  }
  return (
    <>
      <ReactCrop
        src={imgs.original}
        
        crop={crop as any}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
      />
      <canvas
        ref={previewCanvasRef}
        // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
        // style={{ display: "none" }}
        style={{
          width: Math.round(completedCrop?.width ?? 0),
          height: Math.round(completedCrop?.height ?? 0)
        }}
      />
      


      <button
        onClick={() => onRatioChange(1 / 1)}
        disabled={crop.aspect === 1 / 1}
      >
        1:1
      </button>

      <button
        onClick={() => onRatioChange(9 / 16)}
        disabled={crop.aspect === 9 / 16}
      >
        9:16
      </button>

      <button
        onClick={() => onRatioChange(16 / 9)}
        disabled={crop.aspect === 16 / 9}
      >
        16:9
      </button>
      
      <button onClick={()=>{
        setCurrentEditing("Filter");
        window.history.pushState({}, "Image Editor:Filter", "/img/filter");}}>filter</button>
      <canvas
        ref={previewCanvasRef1}
      />
    <button onClick={()=>{setCompleteRotate(CompleteRotate+1)}}>rotate</button>
   
    <canvas
        ref={previewCanvasRef2}
        
      />
    <button onClick={()=>{setCompleteflip(Completeflip+1)}}>flip</button>
    
    </>
  );
};

export default Crop;
