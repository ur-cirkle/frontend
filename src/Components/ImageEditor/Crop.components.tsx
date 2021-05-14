import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";
import { cropProp } from "../../Pages/ImageEditor.pages";
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
  setCurrentEditing: Dispatch<SetStateAction<string>>;
}

const Crop: React.FC<CropProps> = ({ imgs, setImg, setCurrentEditing ,index}) => {
  const [crop, setCrop]: [
    cropProp,
    Dispatch<SetStateAction<cropProp>>
  ] = useState<cropProp>({ unit: "%", width: 30, aspect: 1 / 1 });
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [dataURI, setDataURI] = useState(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const onLoad = useCallback((img: HTMLImageElement) => {
    imgRef.current = img;
  }, []);

  const [completedCrop, setCompletedCrop] = useState<any>(null);
  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current) {
      return;
    }

    const image = new Image();
    image.src = imgs.original;
console.log(imgs.original,"wefref")
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

    // ctx.drawImage(
    //   image,
    //   crop.x * scaleX,
    //   crop.y * scaleY,
    //   crop.width * scaleX,
    //   crop.height * scaleY,
    //   0,
    //   0,
    //   crop.width,
    //   crop.height
    // );
    ctx.translate(crop.width/2,crop.height/2)
    ctx.rotate(Math.PI / 4)
    ctx.translate(-crop.width/2,-crop.height/2)
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
  }, [completedCrop]);
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
  return (
    <>
      <ReactCrop
        src={imgs.original}
        onImageLoaded={onLoad}
        crop={crop as any}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
      />
      <canvas
        ref={previewCanvasRef}
        // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
        // style={{ display: "none" }}
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
      <button
        onClick={() => {
          setImg({ type: "ORIGINAL", payLoadValue: "" ,index});
          setCurrentEditing("Image Upload");
          window.history.pushState({}, "Image Editor : Crop", "/img");
        }}
      >
        Change Image
      </button>
      <button
        onClick={() => {
          if (imgs.currentEditing === "data:,") return alert("Not Valid");
          console.log(imgs.currentEditing)
          setImg({ type: "EDITED", payLoadValue: imgs.currentEditing,index });
          setCurrentEditing("Filter");
          window.history.pushState({}, "Image Editor:Filter", "/img/filter");
        }}
      >
        ✔️
      </button>
    </>
  );
};

export default Crop;
