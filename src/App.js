import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Home from "./views/Home/Home.jsx";
import About from "./views/About/About";
import NavBar from "./components/Nav/NavBar";
import Detail from "./views/Detail/Detail";
import Error from "./views/Error/Error";
import Favorites from "./views/Favorites/Favorites";
import FormRegister from "./components/FormRegister/FormRegister";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

//
function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const location = useLocation();
  const username = "mail@mail.com";
  const password = "123456";
  const navigate = useNavigate();

  async function login(userData) {
    const { username, password } = userData;
    try {
      const response = await axios.get(
        `${URL_BASE}/rickandmorty/login?username=${username}&password=${password}`
      );
      if (response.data.access) {
        setAccess(true);
        navigate("/home");
      } else {
        alert("Usuario y/o contraseña incorrecta");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const closeCharacter = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };
  // const URL_BASE = "https://be-a-rym.up.railway.app/api";
  // const API_KEY = "b755a0b71e3e.670b9fc34bc30567595d";

  const URL_BASE = "http://localhost:3001";
  const onSearch = async (character) => {
    if (characters.find((char) => char.id === Number(character))) {
      alert("No se permiten ID repetidos");
    } else {
      const response = await axios.get(
        `${URL_BASE}/rickandmorty/onsearch/${character}`
      );
      if (response.data.name) {
        console.log(response.data)
        setCharacters((oldChars) => [...oldChars, response.data]);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    }
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <div className="divSearch">
          <NavBar onSearch={onSearch} logout={logout} />
        </div>
      )}

      <div className="divRoutes">
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route path="/register" element={<FormRegister/>} />
          <Route
            path="/home"
            element={
              <Home characters={characters} closeCharacter={closeCharacter} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
