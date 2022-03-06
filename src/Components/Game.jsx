import React from "react";
import Board from "./Board";

const Game = () => {
  const status = "Next Player is X";
  const moves = (
    <li>
      <button>Start the Game</button>
    </li>
  );
  return (
    <div>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ul>{moves}</ul>
      </div>
    </div>
  );
};

export default Game;
