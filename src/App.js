import React, { useState } from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import data from "./data";
import FilterPlayers from "./components/FilterPlayers";
import Players from "./components/Players";

const App = () => {
  const [player, setPlayer] = useState(data);

  const filterPlayers = (position) => {
    if (position === "All Players") {
      setPlayer(data);
    } else {
      const updatedPlayer = data.filter((player) => {
        return player.position === position;
      });
      setPlayer(updatedPlayer);
    }
  };

  // convert array to set & set to array
  const playerPosition = [
    "All Players",
    ...new Set(
      data.map((player) => {
        return player.position;
      })
    ),
  ];

  return (
    <div className="main">
      <div className="logo-container">
        <h1 className="title">CRICKET PLAYERS</h1>
        <img
          src="https://img.icons8.com/color/256/india.png"
          alt="logo"
          className="logo"
        />
      </div>
      <FilterPlayers
        filterPlayers={filterPlayers}
        playerPosition={playerPosition}
      />
      <Players players={player} />
    </div>
  );
};

export default App;
