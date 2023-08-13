import React, { useEffect, useState } from "react";
import logo from "../assests/YouTube-Logo-New.jpg";
import hamburgerIcon from "../assests/hamberg-icon.png";
import userIcon from "../assests/user-icon.jpg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]); 
  const [showSuggestions, setShowSuggestions] = useState(false); 
  useEffect(() => {
    //Api call

    //make an api call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the API call

    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]); 
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col py-1 my-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 pt-3 pl-2 cursor-pointer"
          alt="menu"
          src={hamburgerIcon}
        />
        <a>
          <img className="h-14 mx-2" alt="app-icon" src={logo} />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 px-4 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        <div className="fixed bg-white py-2 px-5 w-[34rem] shadow-lg rounded-lg">
          <ul>
            {showSuggestions && suggestions.map((suggestion)=> (<li className="py-2 shadow-sm hover:bg-gray-100">🔍 {suggestion}</li>))}
          </ul>
        </div>
      </div>

      <div className="col-span-1">
        <img className="h-10" alt="user" src={userIcon} />
      </div>
    </div>
  );
};

export default Header;
