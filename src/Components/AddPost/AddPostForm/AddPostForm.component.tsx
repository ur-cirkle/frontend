import React,{useReducer,useEffect} from 'react'
import {  PostForm} from "../../../Interfaces/AddPost.intrefaces";
export interface AddPostFormProps {
  setImg: React.Dispatch<{
    type: string;
    payLoadValue: string;
    index: number;
}>
imgs:[{
  original: string;
  edited: string;
  currentEditing: string;
  autoSave: string;
  autoRotate: string;
  compressed: string;
}, {
  original: string;
  edited: string;
  currentEditing: string;
  autoSave: string;
  autoRotate: string;
  compressed: string;
}, {
  original: string;
  edited: string;
  currentEditing: string;
  autoSave: string;
  autoRotate: string;
  compressed: string;
}, {
  
  original: string;
  edited: string;
  currentEditing: string;
  autoSave: string;
  autoRotate: string;
  compressed: string;
}, {
  
  original: string;
  edited: string;
  currentEditing: string;
  autoSave: string;
  autoRotate: string;
  compressed: string;
}]
 }
 
const AddPostForm: React.SFC<AddPostFormProps> = ({imgs,setImg}) => {
    const postContentReducer = (
        state: PostForm,
        action: {
          type: "caption" | "interests" | "connections" | "location";
          payLoadValue: string;
          group: "STRING"|"ARRAY ADD" | "ARRAY DELETE";
        }
      ): PostForm => {
        const { type, payLoadValue, group } = action;
        switch (group) {
          case "STRING":
            return { ...state, [type]: payLoadValue };
          case "ARRAY ADD": {
            if (type === "caption" || type === "location") return state;
            const arr = state[type];
            arr.push(payLoadValue);
            return { ...state, [type]: arr };
          }
          case "ARRAY DELETE": {
            if (type !== "interests") return state;
            const arr = state[type];
            const index = arr.indexOf(payLoadValue);
            arr.splice(index, 1);
            return { ...state, [type]: arr };
          }
          default:
            return state;
        }
      };
      const [postContent, setPostContent] = useReducer(postContentReducer, {
        caption: "",
        interests: [],
        connections: [],
        location: "",
      });
      const add_fields =()=> {
        var objTo = document.getElementById('intrest')
        var divtest = document.createElement("div");
        divtest.innerHTML = '<input type="text">';
        
        objTo?.appendChild(divtest)
    }
    return ( 
        <div >
          
            <textarea name="" id="" placeholder="Share what’s on your mind...">{postContent.caption}</textarea>
            <h2>Add interest tags</h2>
            
           <div contentEditable="true"  id="intrest">
             <button onClick={add_fields}>add custom</button>

             </div>
       <h2>Tag connections</h2>
            <label htmlFor="tag_connections">Tap on the picture to tag connections</label>
            <input type="text" id="tag_connection" onChange={({target}) => setPostContent({type:"connections",payLoadValue:"string",group:"STRING"})}/>
            <h2>Add Location</h2>
            <input type="text" value={postContent.location} onChange={({target}) => setPostContent({type:"location",payLoadValue:target.value,group:"STRING"})} />
      <div>{imgs.map((img, i) => (
        <>
          <div className="">
            <img
              src={img.edited}
              alt={`upload ${i}`}
              className="crop"
            />
          </div>
          
        </>
      ))}</div>

        </div>

     );
}
 
export default AddPostForm;