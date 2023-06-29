import style from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className={style.divCard}>
      <img src={image} alt={name} />
      <button onClick={() => onClose(id)} className={style.buttonCard}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>

      <div className={style.div}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
      <div className={style.div}>
        <h2>{status}</h2>
        <h2>{origin}</h2>
      </div>
    </div>
  );
}
