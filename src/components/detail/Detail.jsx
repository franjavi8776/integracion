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
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.divDetail}>
      <div>
        <h1>Nombre | {character.name}</h1>
        <h2>Status | {character.status} </h2>
        <h2>Especie | {character.specie}</h2>
        <h2>Sexo | {character.gender}</h2>
        <h2>Origen | {character.name && character.origin.name}</h2>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
};

export default Detail;
