import React from "react";
import SearchBar from "../search/SearchBar";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

const nav = ({ onSearch }) => {
  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
  };

  return (
    <div className={style.divNav}>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <button onClick={handleRandom}>Random Character</button>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default nav;
