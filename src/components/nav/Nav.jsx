import React from "react";
import SearchBar from "../search/SearchBar";
import style from "./nav.module.css";

const nav = ({ onSearch }) => {
  return (
    <div className={style.divNav}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default nav;
