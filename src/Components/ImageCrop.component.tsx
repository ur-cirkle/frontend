import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
export interface ImageCropProps {
  handleSubmit: (dataURI: string) => {};
}

const ImageCrop: React.SFC<ImageCropProps> = ({ handleSubmit }) => {
  const [upImg, setUpImg] = useState<string>("");
  const imgRef = useRef<null | HTMLImageElement>(null);
  const previewCanvasRef = useRef<null | HTMLCanvasElement>(null);
  const [crop, setCrop] = useState<any>({
    unit: "%",
    width: 30,
    aspect: 1 / 1,
  });
  const [completedCrop, setCompletedCrop] = useState<any>({});
  const [dataURI, setDataURI] = useState<null | string>(null);
  const onSelectFile = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result as string));
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (
      completedCrop === null ||
      !previewCanvasRef.current ||
      !imgRef.current
    ) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
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
    setDataURI(canvas.toDataURL());
  }, [completedCrop]);
  const onsubmit = () => {
    if (!dataURI) return;
    handleSubmit(dataURI);
  };
  const onClick = () => {
    setUpImg("");
  };
  return (
    <div className="App">
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          onClick={onClick}
        />
      </div>
      <div>
        <ReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
        />
        <button onClick={onsubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ImageCrop;
