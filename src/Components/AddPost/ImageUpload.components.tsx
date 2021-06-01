import { AnyARecord } from "dns";
import React, { Dispatch, SetStateAction, useState,useRef } from "react";
import { useHistory } from "react-router-dom";
export interface ImageUploadProps {
  setImg: Dispatch<{ type: string; payLoadValue: string; index: number }>;
  setCurrentEditing: Dispatch<SetStateAction<string>>;

}

const ImageUpload: React.FC<ImageUploadProps> = ({
  setImg,
  setCurrentEditing,
}) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const history = useHistory();
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
  }

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
          index: j
        });

      }
    })
      ;
    setCurrentEditing("Crop");
    window.history.pushState({}, "Image Editor : Crop", "/img/crop");
    // if (e.target.files && e.target.files.length > 0) {

    //   const files = e.target.files;
    //   console.log(files)
    //   console.log(1234);
    // for(var i = 0; i< files.length; i++)
    // {
    //     var file = files[i];
    //     console.log(file)
    //     const reader = new FileReader();
    //     console.log(i);

    //  setA()
    //  console.log(reader.readAsDataURL(file));
    // console.log(reader.readAsDataURL(e.target.files[i]),999);
    // reader.addEventListener("load",async () => {
    //   // reader.readAsDataURL(file);
    //   console.log(reader.result,i,123124);
    //   // i = i -1;




    //   });

    // reader.readAsDataURL(e.target.files[0]);
    // }
    // }

  }







    ;
  return (
    <div>
      <input type="file" accept="image/*" onChange={onSelectFile} multiple />
    </div>
  );
};

export default ImageUpload;
