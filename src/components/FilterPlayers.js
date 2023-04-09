import React, { useState } from "react";

const Players = ({ filterPlayers, playerPosition }) => {
  // adding border bottom
  const [selected, setSelected] = useState("All Players");

  function filterCatogery(position) {
    filterPlayers(position);
    setSelected(position);
  }

  return (
    <div>
      {/* categories */}
      <ul className="categories">
        {playerPosition.map((position, index) => {
          return (
            <li
              className={selected === position ? "active" : ""}
              key={index}
              onClick={() => filterCatogery(position)}
            >
              {position}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Players;
