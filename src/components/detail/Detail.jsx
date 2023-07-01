import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";

const Detail = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
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
      <div className={style.divContent}>
        <h2>
          <b>Nombre</b> | {character.name && character.name}
        </h2>
        <h2>
          <b>Status </b>| {character.status && character.status}
        </h2>
        <h2>
          <b>Especie</b> | {character.species && character.species}
        </h2>
        <h2>
          <b>Sexo</b> | {character.gender && character.gender}
        </h2>
        <h2>
          <b>Origen </b>| {character.origin?.name}
        </h2>
      </div>
      <div className={style.divImage}>
        <img src={character.image && character.image} alt={character.name} />
      </div>
    </div>
  );
};

export default Detail;
