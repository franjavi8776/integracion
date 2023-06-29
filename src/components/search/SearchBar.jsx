import { useState, useRef } from "react";
import style from "./search.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSearch = () => {
    onSearch(id);
    setId("");
    inputRef.current.focus();
  };

  return (
    <div className={style.divSearch}>
      <div className={style.div}>
        <input
          className={style.inputSearch}
          type="search"
          placeholder="Ingrese Id"
          value={id}
          onChange={handleChange}
          ref={inputRef}
        />
        <button className={style.buttonSearch} onClick={handleSearch}>
          Agregar
        </button>
      </div>
    </div>
  );
}
