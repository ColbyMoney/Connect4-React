import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
  
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(x, y) {
    if (calculateWinner(squares) || squares[x][y]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[x][y] = 'X';
    } else {
      nextSquares[x][y] = 'O';
    }
    onPlay(nextSquares);
  }

  var winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  //build the html for the squares in the gameboard so the bottom left corner is (0,0) for (x,y)
  //x corresponds to the column while y corresponds to the row
  //on game board, x value increases to the right and y value increases up
  /*
  var boardHTML = '';
  boardHTML += ('<div className="status">{status}</div>')
  for (let y = 5; y >= 0; y--) {
    boardHTML += ('<div className="board-row">');
    for (let x = 0; x < 7; x++) {
      boardHTML += ('<Square value={squares[' + x + '][' + y + ']} onSquareClick={() => handleClick(' + x + ',' + y + ')} />');
    }
    boardHTML += ('</div>');
  }
  console.log(boardHTML);
  let parser = new DOMParser();
  const doc = parser.parseFromString(boardHTML, 'text/html');
  */

  return ( 
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0][5]} onSquareClick={() => handleClick(0,5)} />
        <Square value={squares[1][5]} onSquareClick={() => handleClick(1,5)} />
        <Square value={squares[2][5]} onSquareClick={() => handleClick(2,5)} />
        <Square value={squares[3][5]} onSquareClick={() => handleClick(3,5)} />
        <Square value={squares[4][5]} onSquareClick={() => handleClick(4,5)} />
        <Square value={squares[5][5]} onSquareClick={() => handleClick(5,5)} />
        <Square value={squares[6][5]} onSquareClick={() => handleClick(6,5)} />
      </div>
      <div className="board-row">
        <Square value={squares[0][4]} onSquareClick={() => handleClick(0,4)} />
        <Square value={squares[1][4]} onSquareClick={() => handleClick(1,4)} />
        <Square value={squares[2][4]} onSquareClick={() => handleClick(2,4)} />
        <Square value={squares[3][4]} onSquareClick={() => handleClick(3,4)} />
        <Square value={squares[4][4]} onSquareClick={() => handleClick(4,4)} />
        <Square value={squares[5][4]} onSquareClick={() => handleClick(5,4)} />
        <Square value={squares[6][4]} onSquareClick={() => handleClick(6,4)} />
      </div>
      <div className="board-row">
        <Square value={squares[0][3]} onSquareClick={() => handleClick(0,3)} />
        <Square value={squares[1][3]} onSquareClick={() => handleClick(1,3)} />
        <Square value={squares[2][3]} onSquareClick={() => handleClick(2,3)} />
        <Square value={squares[3][3]} onSquareClick={() => handleClick(3,3)} />
        <Square value={squares[4][3]} onSquareClick={() => handleClick(4,3)} />
        <Square value={squares[5][3]} onSquareClick={() => handleClick(5,3)} />
        <Square value={squares[6][3]} onSquareClick={() => handleClick(6,3)} />
      </div>
      <div className="board-row">
        <Square value={squares[0][2]} onSquareClick={() => handleClick(0,2)} />
        <Square value={squares[1][2]} onSquareClick={() => handleClick(1,2)} />
        <Square value={squares[2][2]} onSquareClick={() => handleClick(2,2)} />
        <Square value={squares[3][2]} onSquareClick={() => handleClick(3,2)} />
        <Square value={squares[4][2]} onSquareClick={() => handleClick(4,2)} />
        <Square value={squares[5][2]} onSquareClick={() => handleClick(5,2)} />
        <Square value={squares[6][2]} onSquareClick={() => handleClick(6,2)} />
      </div>
      <div className="board-row">
        <Square value={squares[0][1]} onSquareClick={() => handleClick(0,1)} />
        <Square value={squares[1][1]} onSquareClick={() => handleClick(1,1)} />
        <Square value={squares[2][1]} onSquareClick={() => handleClick(2,1)} />
        <Square value={squares[3][1]} onSquareClick={() => handleClick(3,1)} />
        <Square value={squares[4][1]} onSquareClick={() => handleClick(4,1)} />
        <Square value={squares[5][1]} onSquareClick={() => handleClick(5,1)} />
        <Square value={squares[6][1]} onSquareClick={() => handleClick(6,1)} />
      </div>
      <div className="board-row">
        <Square value={squares[0][0]} onSquareClick={() => handleClick(0,0)} />
        <Square value={squares[1][0]} onSquareClick={() => handleClick(1,0)} />
        <Square value={squares[2][0]} onSquareClick={() => handleClick(2,0)} />
        <Square value={squares[3][0]} onSquareClick={() => handleClick(3,0)} />
        <Square value={squares[4][0]} onSquareClick={() => handleClick(4,0)} />
        <Square value={squares[5][0]} onSquareClick={() => handleClick(5,0)} />
        <Square value={squares[6][0]} onSquareClick={() => handleClick(6,0)} />
      </div>
    </>
  );
}

export default function Gameboard() {
  /*const [history, setHistory] = useState([Array(7).fill(Array(6).fill(null))]);
  const [currentMove, setCurrentMove] = useState(0, 0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });*/

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(player, board) {
    // horizontalCheck 
    for (let j = 0; j < 6-3; j++ ){
      for (let i = 0; i < 7; i++){
          if (board[i][j] == player && board[i][j+1] == player && board[i][j+2] == player && board[i][j+3] == player){
              return true;
          }           
      }
  }
  // verticalCheck
  for (let i = 0; i < 7-3; i++ ){
      for (let j = 0; j < 6; j++){
          if (board[i][j] == player && board[i+1][j] == player && board[i+2][j] == player && board[i+3][j] == player){
              return true;
          }           
      }
  }
  // ascendingDiagonalCheck /
  for (let i=3; i < 7; i++){
      for (let j=0; j < 6-3; j++){
          if (board[i][j] == player && board[i-1][j+1] == player && board[i-2][j+2] == player && board[i-3][j+3] == player)
              return true;
      }
  }
  // descendingDiagonalCheck \
  for (let i=3; i < 7; i++){
      for (let j=3; j < 6; j++){
          if (board[i][j] == player && board[i-1][j-1] == player && board[i-2][j-2] == player && board[i-3][j-3] == player)
              return true;
      }
  }
  return false;
}