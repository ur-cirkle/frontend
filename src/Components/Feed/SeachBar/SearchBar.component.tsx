//** Pakage Imports
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
//** Contexts Imports
import { CurrentJwtContext } from "../../../Contexts/CurrentJwtContext";
import {Searchbar}  from "./Searchbar.styles"



export interface SearchBarProps {}

const SearchBar: React.SFC<SearchBarProps> = () => {
  //* Getting JWT Token
  const { currentJwt } = useContext(CurrentJwtContext);
  //* User entered Query
  const [query, setQuery] = useState("");
  //* Axios Cancel Token
  const source = axios.CancelToken.source();
  //* All Suggestions
  const [allSuggestions, setAllSuggestions] = useState<
    Array<{ username: string; userid: string; image_url: string }>
  >([]);
  //* Suggestions on user ViewPort
  const [viewedSuggestions, setViewedSuggestions] = useState<
    Array<{ username: string; userid: string; image_url: string }>
  >([]);
  //* On Query Change wait 500ms and run API call
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.length === 0) return;
      axios({
        method: "GET",
        url: "http://localhost:5000/search",
        headers: {
          Authorization: `bearer ${currentJwt}`,
        },
        params: {
          search: query,
        },
        cancelToken: source.token,
      })
        .then(({ data }) => {
          setAllSuggestions(data);
          setViewedSuggestions(
            data.filter(
              (
                user: { username: string; userid: string; image_url: string },
                index: number
              ) => index < 20
            )
          );
          console.log(allSuggestions);
        })
        .catch(console.log);
    }, 500);
 
    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    
    <div className="">
      
      <Searchbar
        type="text" placeholder="Search"
        value={query}
        onChange={({ target }) => {
          setQuery(target.value);
         
        }}
      />
      <div className="suggestions">
        {viewedSuggestions.map((user) => (
          <Link to={`/p/${user.userid}`} className="suggestion">
            {user.username}
          </Link>
        ))}
      </div>
      
    </div>
   
  );
};

export default SearchBar;
