import React from "react";
import logo from "../assests/youtube-icon.jpg";
import hamburgerIcon from "../assests/hamberg-icon.png";
import userIcon from "../assests/user-icon.jpg";
import searchIcon from "../assests/search-icon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {

  const dispatch = useDispatch(); 

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col py-1 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="menu"
          src={hamburgerIcon}
        />
        <a>
        <img className="h-12 mx-2" alt="app-icon" src={logo} />
        </a>
       
        <h1 className="font-bold pt-3 text-lg">Youtube</h1>
      </div>

      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
          🔍
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-10" alt="user" src={userIcon} />
      </div>
    </div>
  );
};

export default Header;
