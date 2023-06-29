import { useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/detail/Detail";
import Error from "./components/error/Error";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const isCharacterExist = characters.find(
            (character) => character.id === data.id
          );
          if (isCharacterExist) {
            window.alert("¡El personaje ya está en pantalla!");
          } else {
            setCharacters([...characters, data]);
          }
        } else {
          window.alert("!No hay personaje con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== parseInt(id))
    );
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
