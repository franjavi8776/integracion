import style from "./card.module.css";

export default function Card({
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
      <button onClick={onClose} className={style.buttonCard}>
        X
      </button>
      <h2 className={style.name}>{name}</h2>
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
