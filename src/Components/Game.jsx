import React from "react";
import Board from "./Board";

const Game = (props) => {
  const status = "Next Player is X";
  const moves = (
    <li>
      <button>Start the Game</button>
    </li>
  );

  const squares = Array(9).fill(null);

  return (
    <div>
      <div className="game-board">
        <Board squares={squares} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ul>{moves}</ul>
      </div>
    </div>
  );
};

export default Game;
