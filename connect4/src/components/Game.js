import { useState } from 'react';
import { Square } from './Square';
import { Board } from './Board';

export default function Gameboard() {
  let player = 1;
  let currentSquares = Array(6).fill(Array(7).fill(0));

  function handlePlay(row, column, player) {
    currentSquares[row][column] = player;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board player={player} squares={currentSquares} onPlay={handlePlay()} />
      </div>
    </div>
  );
}

function calculateWinner(player, board) {
    // horizontalCheck 
    for (let j = 0; j < 6-3; j++ ){
      for (let i = 0; i < 7; i++){
          if (board[i][j] === player && board[i][j+1] === player && board[i][j+2] === player && board[i][j+3] === player){
              return true;
          }           
      }
  }
  // verticalCheck
  for (let i = 0; i < 7-3; i++ ){
      for (let j = 0; j < 6; j++){
          if (board[i][j] === player && board[i+1][j] === player && board[i+2][j] === player && board[i+3][j] === player){
              return true;
          }           
      }
  }
  // ascendingDiagonalCheck /
  for (let i=3; i < 7; i++){
      for (let j=0; j < 6-3; j++){
          if (board[i][j] === player && board[i-1][j+1] === player && board[i-2][j+2] === player && board[i-3][j+3] === player)
              return true;
      }
  }
  // descendingDiagonalCheck \
  for (let i=3; i < 7; i++){
      for (let j=3; j < 6; j++){
          if (board[i][j] === player && board[i-1][j-1] === player && board[i-2][j-2] === player && board[i-3][j-3] === player)
              return true;
      }
  }
  return false;
}