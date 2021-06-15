import { Dispatch,SetStateAction } from "react";

export interface ReviewBlogProps {
    blog: {
        heading: string;
        body: string;
        wordCount: number;
    }
    interest: string;
    setInterest:Dispatch<SetStateAction<string>>;
}
 
const ReviewBlog: React.SFC<ReviewBlogProps> = ({blog,interest,setInterest}) => {
    return (
        <div className="">
            <p>{blog.wordCount} words <button>i</button> </p>
            <h1>{ blog.heading}</h1>
            <p>{blog.body}</p>
            <input type="text" value={interest} onChange={({target}) => setInterest(target.value)}/>
        </div>
     );
}
 
export default ReviewBlog;