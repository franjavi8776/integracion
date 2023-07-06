import style from "./card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose }) {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(
        addFav({ id, name, status, species, gender, origin, image, onClose })
      );
    }
  };

  return (
    <div className={style.divCard}>
      {isFav ? (
        <p className={style.btn} onClick={handleFavorite}>
          ❤️
        </p>
      ) : (
        <p className={style.btn} onClick={handleFavorite}>
          🤍
        </p>
      )}
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

export default Card;
