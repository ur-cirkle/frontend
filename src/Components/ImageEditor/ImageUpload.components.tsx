import React, { Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
export interface ImageUploadProps {
  setImg: Dispatch<{ type: string; payLoadValue: string }>;
  setCurrentEditing: Dispatch<SetStateAction<string>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  setImg,
  setCurrentEditing,
}) => {
  const history = useHistory();
  const onSelectFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImg({ type: "ORIGINAL", payLoadValue: reader.result as string });
        const img = new Image();
        img.src = reader.result as string;
        setCurrentEditing("Crop");
        window.history.pushState({}, "Image Editor : Crop", "/img/crop");
      });

      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={onSelectFile} />
    </div>
  );
};

export default ImageUpload;
