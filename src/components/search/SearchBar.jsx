import { useState } from "react";
import style from "./search.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
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
        />
        <button className={style.buttonSearch} onClick={() => onSearch(id)}>
          Agregar
        </button>
      </div>
    </div>
  );
}
