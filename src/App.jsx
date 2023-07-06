import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/detail/Detail";
import Error from "./components/error/Error";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const EMAIL = "fran@gmail.com";
  const PASSWORD = "pass123";

  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setLoggedIn(true);
      setAccess(true);
      navigate("/home");
    } else {
      alert("Email o password incorrecto");
    }
  };

  const logout = () => { 
    setLoggedIn(false);
    navigate("/");
  }

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

  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}

      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Form login={login} />} />
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
