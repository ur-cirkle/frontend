import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { cropProp } from "../../Pages/AddPost.pages";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { flattenDiagnosticMessageText } from "typescript";

export interface CropProps {
  imgs: {
    original: string;
    edited: string;
    currentEditing: string;
  };
  setImg: React.Dispatch<{
    type: string;                  
    payLoadValue: string;
    index: number;
  }>;
  index: number;
  counter: number;
  Converted: boolean;
  setCounter: React.Dispatch<SetStateAction<number>>;
  setCurrentEditing: Dispatch<SetStateAction<string>>;
  setCropProp: React.Dispatch<React.SetStateAction<{
    cropX: number;
    cropY: number;
    scaleX: number;
    scaleY: number;
    width: number;
    height: number;
}
>>
setrotateProp: React.Dispatch<React.SetStateAction<number>>
setflipProp: React.Dispatch<React.SetStateAction<number>>
}

const Crop: React.FC<CropProps> = ({
  imgs,
  setImg,
  setCurrentEditing,
  index,
  counter,
  setCounter,
  Converted,
  setCropProp,
  setflipProp,
  setrotateProp
}) => {
  const [crop, setCrop]: [cropProp, Dispatch<SetStateAction<cropProp>>] =
    useState<cropProp>({ unit: "%", width: 30, aspect: 1 / 1 });

  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const previewCanvasRefRotate = useRef<HTMLCanvasElement | null>(null);
  const previewCanvasRefFlip = useRef<HTMLCanvasElement | null>(null);

  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const [CompleteRotate, setCompleteRotate] = useState<any>(null);
  const [Completeflip, setCompleteflip] = useState<any>(null);
  const [croping , setCroping]=useState(true);
  const[rotating,setRotating]=useState(false);
  const[fliping,setFliping]=useState(false);
    
  
  useEffect(() => {
    if (imgs.original && Converted) return;
    setCounter(counter + 1);
  }, [counter]);
 
  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current) {
      return;
    }

    const image = new Image();
    image.src = imgs.edited ? imgs.edited : imgs.original;
    const canvas = previewCanvasRef.current;
    const crop: any = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx: any = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;

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
    console.log(crop.x)
    setCropProp({
      cropX: crop.x,
      cropY: crop.y,
      scaleX: scaleX,
      scaleY: scaleY,
      width: crop.width,
      height: crop.height


    })
    
    setImg({
      type: "CURRENT_EDITING",
      payLoadValue: canvas.toDataURL(),
      index,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedCrop, imgs.edited, counter]);
  
   useEffect(() => {
    if (!CompleteRotate || !previewCanvasRefRotate.current) {
      return;
    }
    const image = new Image();
    image.src = imgs.edited ? imgs.edited : imgs.original;

    const canvasRotate = previewCanvasRefRotate.current;
    const ctxRotate: any = canvasRotate.getContext("2d");
    if (CompleteRotate % 2 === 0) {
      canvasRotate.width = image.width;
      canvasRotate.height = image.height;

      ctxRotate.translate(canvasRotate.width / 2, canvasRotate.height / 2);
      ctxRotate.rotate(Math.PI * (CompleteRotate / 2));
      ctxRotate.drawImage(image, -image.width / 2, -image.height / 2);
    }
    if (CompleteRotate % 2 !== 0) {
      canvasRotate.width = image.height;
      canvasRotate.height = image.width;

      ctxRotate.translate(canvasRotate.width / 2, canvasRotate.height / 2);
      ctxRotate.rotate(Math.PI * (CompleteRotate / 2));
      ctxRotate.drawImage(image, -image.width / 2, -image.height / 2);
    }
    setrotateProp(CompleteRotate)
    setImg({
      type: "CURRENT_EDITING",
      payLoadValue: canvasRotate.toDataURL(),
      index,
    });
    
  }, [CompleteRotate, imgs.edited]);

  useEffect(() => {
    if (!Completeflip || !previewCanvasRefFlip.current) {
      return;
    }

    const image = new Image();
    image.src = imgs.edited ? imgs.edited : imgs.original;
    const canvasFlip = previewCanvasRefFlip.current;
    const ctxFlip: any = canvasFlip.getContext("2d");
    if (Completeflip % 2 === 0) {
      canvasFlip.width = image.width;
    canvasFlip.height = image.height;
    
      ctxFlip.scale(1, 1);
      ctxFlip.drawImage(image, 0, 0, image.width, image.height);
    }
    if (Completeflip % 2 !== 0) {
      canvasFlip.width = image.width;
    canvasFlip.height = image.height;
    
      ctxFlip.scale(-1, 1);
    
      ctxFlip.drawImage(image, -image.width, 0, image.width, image.height);
    }

    setImg({
      type: "CURRENT_EDITING",
      payLoadValue: canvasFlip.toDataURL(),
      index,
    });
    setflipProp(Completeflip)
    console.log(imgs)
  }, [Completeflip, imgs.edited]);

  const onRatioChange = (ratio: number) => {
    const image = new Image();
    image.src = imgs.original;
    if (!crop.width || !crop.height) return;

    setCrop((prevCrop) => {
      if (!prevCrop.width || !prevCrop.height) return prevCrop;
      return {
        ...prevCrop,
        aspect: ratio,
        height: (image.width * 0.3) / ratio,
        width: image.width * 0.3,
      };
    });
  };
  if (!imgs.original) {
    return <p>Loading......</p>;
  }
  return (
    <>
    { croping && <div>
      <ReactCrop
        src={imgs.edited ? imgs.edited : imgs.original}
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
          height: Math.round(completedCrop?.height ?? 0),
          display: "none"
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

    </div>}
      { rotating &&
      <div>
      <canvas ref={previewCanvasRefRotate} />
  
      </div>}
    {fliping &&  <div>
      <canvas ref={previewCanvasRefFlip} />
           
      </div>}
      <button
        onClick={() => {
          
          setImg({type:"Compressed", payLoadValue:imgs.edited, index:index })
          setCurrentEditing("Filter");
          window.history.pushState({}, "Image Editor:Filter", "/img/filter");
        }}
      >
        filter
      </button>
      <button onClick={()=>{
              setCroping(true)
              setRotating(false)
              setFliping(false)

      }}>Crop</button>
      <button onClick={()=>{
              setCroping(false)
              setRotating(true)
              setFliping(false)
              setCompleteRotate(CompleteRotate + 1);
      }}>Rotate</button>
      <button onClick={()=>{
              setCroping(false)
              setRotating(false)
              setFliping(true)
              setCompleteflip(Completeflip + 1);
      }}>Flip</button>
      

    </>
  );
};

export default Crop;
