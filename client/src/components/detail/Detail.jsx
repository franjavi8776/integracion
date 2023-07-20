import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";

const Detail = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          console.log(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.divDetail}>
      <div className={style.card}>
        <div className={style.back}>
          <h2
            style={{
              fontSize: "45px",
            }}
          >
            <b>{character.name && character.name}</b>
          </h2>
          <h3>
            <b>Status </b>| {character.status && character.status}
          </h3>
          <h3>
            <b>Especie</b> | {character.species && character.species}
          </h3>
          <h3>
            <b>Sexo</b> | {character.gender && character.gender}
          </h3>
          <h3>
            <b>Origen </b>| {character.origin?.name}
          </h3>
        </div>
        <div className={style.front}>
          <img src={character.image} alt={character.name} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
