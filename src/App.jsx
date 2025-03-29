import React from "react";
import UserGitSearch from "../src/components/UserGitSearch"

const App = ({ username }) => {
  return (
    <div className="container">
      <h1>Buscar usuario en GitHub</h1>
      <UserGitSearch username={username} />
    </div>
  );
};

export default App;

