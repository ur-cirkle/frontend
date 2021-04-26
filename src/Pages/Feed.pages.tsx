import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import Blog from "../Components/Blog.component";
import Post from "../Components/Post.component";
import useFeed from "../Hooks/useFeed.hooks";
import { BlogProps, PostProps } from "../Interfaces/Feed.interfaces";
export interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
  const [deckNumber, setDeckNumber] = useState<number>(0);
  const [err, pbs, isLoading]: [
    boolean,
    Array<BlogProps | PostProps>,
    boolean
  ] = useFeed(deckNumber);
  const [shuffledPBS, setShuffledPBS]: [
    Array<BlogProps | PostProps>,
    Dispatch<SetStateAction<Array<BlogProps | PostProps>>>
  ] = useState<Array<BlogProps | PostProps>>([]);
  const observable: any = useRef();
  const lastPBRef = useCallback(
    (node) => {
      console.log("dsajksj", isLoading);
      if (isLoading) return;
      if (observable.current) observable.current.disconnect();
      observable.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setDeckNumber((prevDeckNumber) => prevDeckNumber + 1);
        }
      });
      if (node) observable.current.observe(node);
      console.log(deckNumber);
    },
    [isLoading]
  );
  useEffect(() => {
    const arr = pbs
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    setShuffledPBS(arr);
  }, [pbs]);
  return (
    <div className="feed">
      <h1>Hello</h1>
      {shuffledPBS.map((pb: BlogProps | PostProps, index) => {
        if (index === shuffledPBS.length - 1) {
          if (pb.author) {
            return <Blog blog={pb} blogRef={lastPBRef} />;
          }
          if (pb.url) {
            return <Post post={pb} postRef={lastPBRef} />;
          }
        }
        if (pb.author) {
          return <Blog blog={pb} />;
        }
        if (pb.url) {
          return <Post post={pb} />;
        }
        return 0;
      })}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Feed;
