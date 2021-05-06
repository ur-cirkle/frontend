import { useState, useEffect, Dispatch, SetStateAction } from "react";

import axios from "axios";
const useFeed = (deckNumber: number): [boolean, [], boolean] => {
  //* If There is a err while API call
  const [err, setErr]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);
  //* Loading
  const [isLoading, setIsLoading]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(true);
  //* Cards
  const [pbs, setPBS]: [[], Function] = useState([]);
  //* Runs When User watches Last Card from currenlty loaded cards;
  useEffect(() => {
    setIsLoading(true);
    setErr(false);
    axios({
      method: "GET",
      url: `https://fakerapi.it/api/v1/images?_width=500&_height=500&_quantity=10`,
    })
      .then(({ data }: { data: { data: [] } }) => {
        setPBS((prevCards: []) => [
          ...Array.from(new Set([...prevCards, ...data.data])),
        ]);
      })
      .catch((e) => setErr(true));
    axios({
      method: "GET",
      url: `https://fakerapi.it/api/v1/texts?_quantity=10&_characters=${Math.floor(
        Math.random() * 5000 + 500
      )}`,
    }).then(({ data }: { data: { data: [] } }) => {
      setPBS((prevCards: []) => [
        ...Array.from(new Set([...prevCards, ...data.data])),
      ]);
      setIsLoading(false);
      return;
    });
  }, [deckNumber]);
  return [err, pbs, isLoading];
};

export default useFeed;
