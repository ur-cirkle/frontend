import React, { useState, useRef, useCallback } from "react";
import { uid } from "uid";
import Card from "../../Components/Explore/Card/Card.component";
import { cardUser } from "../../Interfaces/Card.interfaces";
import useCardSearch from "../../Hooks/useCardSearch.hooks";
import {ExploreStyle} from "./Explore.styles"
import {HeadingStyle} from "./Explore.styles"
import {TagLineStyle} from "./Explore.styles"


const Explore: React.FC = () => {
  const [cardPackNumber, setCardPackNumber]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(1);
  const [error, cards, isLoading]: [boolean, [], boolean] = useCardSearch(
    cardPackNumber
  );
  const observable: any = useRef();
  const lastCardRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observable.current) observable.current.disconnect();
      observable.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setCardPackNumber((prevCardPackNumber) => prevCardPackNumber + 1);
        }
      });
      if (node) observable.current.observe(node);
    },
    [isLoading]
  );

  return (
    <div className="">
      <HeadingStyle>Explore</HeadingStyle>
      <TagLineStyle>Find people with shared interests</TagLineStyle>
        <ExploreStyle className="cards">
          {cards.map((card: cardUser, index: number) => {
            if (index === cards.length - 1)
              return <Card cardRef={lastCardRef} cardUser={card} index={index} />;
            else return <Card cardUser={card} key={uid()} index={index} />;
          })}
          {isLoading && <div className="">Loading...</div>}
          {error && <div className="">Errrrrrr</div>}
        </ExploreStyle>
    </div>
  );
};

export default Explore;
