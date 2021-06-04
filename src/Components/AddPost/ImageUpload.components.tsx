import React, { Dispatch, SetStateAction } from "react";
// import { useHistory } from "react-router-dom";
export interface ImageUploadProps {
  setImg: Dispatch<{ type: string; payLoadValue: string; index: number }>;
  setCurrentEditing: Dispatch<SetStateAction<string>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  setImg,
  setCurrentEditing,
}) => {
  // const history = useHistory();
  const a = function readFileAsText(file: any) {
    return new Promise(function (resolve, reject) {
      let fr = new FileReader();

      fr.onload = function () {
        resolve(fr.result);
      };

      fr.onerror = function () {
        reject(fr);
      };

      fr.readAsDataURL(file);
    
    });
  };

  const onSelectFile = async (e: any) => {
    let files = e.target.files;
    let readers = [];
    console.log(files)
    if (!files.length) return;

    for (let i = 0; i < files.length; i++) {
      readers.push(a(files[i]));
    }

    Promise.all(readers).then((values) => {
      console.log(values);
      for (let j = 0; j < files.length; j++) {       
        setImg({
          type: "ORIGINAL",
          payLoadValue: values[j] as string,
          index: j,
        });
      }
    });
    setCurrentEditing("Crop");
    window.history.pushState({}, "Image Editor : Crop", "/img/crop");

  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onSelectFile} multiple />
    </div>
  );
};

export default ImageUpload;
