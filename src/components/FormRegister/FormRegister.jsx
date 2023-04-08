import React from "react";
import style from "./FormRegister.module.css";
import validation from "./validation";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

export default function FormRegister(props) {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    setErrors(validation({ ...userData, [property]: value }));

    // validation ({...userData, [property]: value}, errors, setErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);

    const response = await axios.post(
      "/rickandmorty/login",
      userData
    );
    if (response.data.error) alert("El usuario ya existe");
    else {
      alert("Usuario creado correctamente");
      navigate("/");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: "30px", opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>Register Now</h1>
        <div className={style.divUser}>
          <label htmlFor="username">UserName</label>
          <input
            className={errors.username ? style.error : style.success}
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.divPass}>
          <label htmlFor="password">Password</label>
          <input
            className={errors.password ? style.error : style.success}
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>
        <button className={style.button} type="submit">
          Register
        </button>
        <Link to={"/"} className={style.button}>&lt;&lt;</Link>
      </form>
      <div
        className={
          errors.username === "" && errors.password === ""
            ? style.divErroresVacio
            : style.divErrores
        }
      >
        <p>{errors.username && errors.username}</p>
        <p>{errors.password && errors.password}</p>
      </div>
    </motion.div>
  );
}
