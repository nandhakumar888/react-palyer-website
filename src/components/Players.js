import React from "react";

const Players = ({ players }) => {
  return (
    <div className="filtered-container">
      {players.map((player, index) => {
        const { name, img } = player;
        return (
          <div key={index}>
            <div className="img-container">
              <img src={img} alt="players" />
            </div>
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Players;
