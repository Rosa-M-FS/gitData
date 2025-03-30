import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import { useState } from "react";
import style from './UserGitSearch.module.css'

const UserGitSearch = ({ username }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const [inputValue, setInputValue] = useState(username || "");

  useEffect(() => {
    if (username) {
      dispatch(fetchUser(username));
    }
  }, [dispatch, username]);

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      dispatch(fetchUser(inputValue));
    }
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingresa usuario de GitHub"
        className={style.input}
        onKeyDown={(e)=>e.key==='Enter'&& handleSearch()}
      />
      <button
        onClick={handleSearch}
        className={style.button}
      >
        Buscar
      </button>

      {status === "loading" && (
        <><div className={style.overlay}></div>
        <div className={style.spinner}></div></>
        )}
      {error && <p className={style.error}>{error}</p>}
      {user && (
        <div className={style.user}>
          <img
            src={user.avatar_url}
            alt={user.login}
            className={style.img}
          />
          <h2>{user.name}</h2>
          <p>@{user.login}</p>
          <p>Followers: {user.followers}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default UserGitSearch;
