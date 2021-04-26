//** Package Imports
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
const useCardSearch = (cardPackNumber: number): [boolean, [], boolean] => {
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
  const [cards, setCards]: [[], Function] = useState([]);
  //* Runs When User watches Last Card from currenlty loaded cards;
  useEffect(() => {
    setIsLoading(true);
    setErr(false);
    axios({
      method: "GET",
      url: `https://randomuser.me/api/?results=${
        cardPackNumber === 1 ? 20 : 10
      }`,
    })
      .then(({ data }: { data: { results: [] } }) => {
        console.log(data);
        setCards((prevCards: []) => [
          ...Array.from(new Set([...prevCards, ...data.results])),
        ]);
        setIsLoading(false);
      })
      .catch((e) => setErr(true));
  }, [cardPackNumber]);
  return [err, cards, isLoading];
};
export default useCardSearch;
