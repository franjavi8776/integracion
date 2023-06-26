import style from "./search.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className={style.divSearch}>
      <div className={style.div}>
        <input
          className={style.inputSearch}
          type="search"
          placeholder="Ingrese Id"
        />
        <button className={style.buttonSearch} onClick={(id) => onSearch(id)}>
          Agregar
        </button>
      </div>
    </div>
  );
}
