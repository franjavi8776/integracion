import style from "./card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Card({ id, name, status, species, gender, origin, image, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(
        addFav({ name, status, species, gender, origin, image, onClose })
      );
    }
  };

  return (
    <div className={style.divCard}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
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
      <button onClick={() => {}}></button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (pj) => dispatch(addFav(pj)),
    removeFav: (pj) => dispatch(removeFav(pj)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
