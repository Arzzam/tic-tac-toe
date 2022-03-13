import React from "react";
import Square from "./Square";

const Board = (props) => {
  return (
    <div className="board">
      <div>
        <Square
          value={props.squares[0]}
          onclick={() => {
            props.onclick(0);
          }}
        />
        <Square
          value={props.squares[1]}
          onclick={() => {
            props.onclick(1);
          }}
        />
        <Square
          value={props.squares[2]}
          onclick={() => {
            props.onclick(2);
          }}
        />
      </div>
      <div>
        <Square
          value={props.squares[3]}
          onclick={() => {
            props.onclick(3);
          }}
        />
        <Square
          value={props.squares[4]}
          onclick={() => {
            props.onclick(4);
          }}
        />
        <Square
          value={props.squares[5]}
          onclick={() => {
            props.onclick(5);
          }}
        />
      </div>
      <div>
        <Square
          value={props.squares[6]}
          onclick={() => {
            props.onclick(6);
          }}
        />
        <Square
          value={props.squares[7]}
          onclick={() => {
            props.onclick(7);
          }}
        />
        <Square
          value={props.squares[8]}
          onclick={() => {
            props.onclick(8);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
