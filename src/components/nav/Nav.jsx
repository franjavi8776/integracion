import React from "react";
import SearchBar from "../search/SearchBar";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

const nav = ({ onSearch }) => {
  return (
    <div className={style.divNav}>
      <div className={style.btnNav}>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/home">
          <li>Home</li>
        </Link>
      </div>
      <div className={style.searchBar}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default nav;
