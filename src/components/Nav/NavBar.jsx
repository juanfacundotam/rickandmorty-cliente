import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BiLogOut } from "react-icons/bi";

export default function NavBar({ onSearch, logout }) {
  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      className={style.nav}
      initial={{ opacity: 0 }}
      animate={{ y: "20px", scale: 1.05, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.7, duration: 2, delay: 0.2 }}
    >
      <div className={style.divLinks}>
        <NavLink
          to={`/home`}
          className={({ isActive }) =>
            isActive ? style.active : style.disable
          }
        >
          Home
        </NavLink>
        <NavLink
          to={`/about`}
          className={({ isActive }) =>
            isActive ? style.active : style.disable
          }
        >
          About
        </NavLink>
        <NavLink
          to={`/favorites`}
          className={({ isActive }) =>
            isActive ? style.active : style.disable
          }
        >
          Favorites
        </NavLink>
      </div>
      <div className={style.divNavSearch}>
        <Link className={style.btnLogout}>
          <button onClick={handleLogout}>
            <BiLogOut className={style.icon} />
          </button>
        </Link>
        <div className={style.divSearch}>
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </motion.div>
  );
}
